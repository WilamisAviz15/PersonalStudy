import axios from "axios";

import { SignInInterface } from "./interfaces/signIn.interface";
import { UserInterface } from "./interfaces/user.interface";
import callAxios from "../../shared/components/useAxios";

class AuthService {
  constructor() {}

  async authenticate(data: SignInInterface) {
    const jwt = await callAxios<SignInInterface, UserInterface & { accessToken: string }>(
      "auth/login",
      axios.post,
      data
    );
    this.saveUser(jwt.data.accessToken);
    return jwt;
  }

  saveUser(accessToken: string) {}

  handleCurrentUser(user: UserInterface, accessToken: string) {
    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("user", JSON.stringify(user));
  }
}
const authService = new AuthService();
Object.freeze(authService);
export default authService;
