import axios from "axios";
import { useNavigate } from "react-router-dom";

import { SignInInterface } from "./interfaces/signIn.interface";
import { environment } from "../../environments/environment";
import { UserInterface } from "./interfaces/user.interface";

const authService = {
  async authenticate(data: SignInInterface) {
    return axios.post(`${environment.api}/auth/login`, data);
  },

  handleCurrentUser(user: UserInterface, accessToken: string) {
    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("user", JSON.stringify(user));
  },
};

export default authService;
