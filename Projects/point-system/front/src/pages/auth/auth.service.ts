import { BehaviorSubject } from "rxjs";

import { SignInInterface } from "./interfaces/signIn.interface";
import { UserInterface } from "./interfaces/user.interface";
import { JwtServiceUtil } from "../../shared/utils/jwt-service.util";
import { Singleton } from "../../shared/classes/Singleton";
import http from "../../shared/services/axios";

class AuthService extends Singleton<AuthService> {
  private user: BehaviorSubject<any> = new BehaviorSubject(null);
  private bearer: BehaviorSubject<string> = new BehaviorSubject("");
  private privileges: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() {
    super();
    this.handleLocalStorageUser();
  }

  async authenticate(data: SignInInterface) {
    const jwt = await http.post<SignInInterface, UserInterface & { accessToken: string }>("auth/login", {
      data,
    });

    return this.saveUser(jwt.data.accessToken);
  }

  async getPrivileges(): Promise<any> {
    const privileges = await http.get("auth/privileges");
    localStorage.setItem("privileges", JSON.stringify(privileges));
    this.privileges.next(JSON.stringify(privileges));
  }

  saveUser(accessToken: string): boolean | unknown {
    try {
      const jwtDecoded = JwtServiceUtil.getDecodedAccessToken(accessToken);
      if (!jwtDecoded) {
        throw new Error();
      }

      localStorage.setItem("access_token", accessToken);
      localStorage.setItem("user", JSON.stringify(jwtDecoded));
      this.user.next(JSON.stringify(jwtDecoded));
      this.bearer.next(accessToken);

      return true;
    } catch (error) {
      return error;
    }
  }

  private handleLocalStorageUser() {
    const data = localStorage.getItem("user");
    const bearer = localStorage.getItem("access_token");
    const privileges = localStorage.getItem("privileges");
    if (data && bearer) {
      const user = JSON.parse(data);
      this.user.next(user);
      this.bearer.next(bearer);
      this.privileges.next(privileges);
    }
  }

  getBearer(): string {
    return this.bearer.getValue();
  }

  getUser(): any {
    return this.user.getValue();
  }
}

const authService = AuthService.getInstance(AuthService);
export default authService;
