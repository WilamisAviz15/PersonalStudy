import axios, { AxiosResponse } from "axios";

import { SignInInterface } from "./interfaces/signIn.interface";
import { UserInterface } from "./interfaces/user.interface";
import callAxios from "../../shared/components/useAxios";

const authService = {
  async authenticate(data: SignInInterface) {
    return await callAxios<SignInInterface, UserInterface & { accessToken: string }>("auth/login", axios.post, data);
  },

  handleCurrentUser(user: UserInterface, accessToken: string) {
    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("user", JSON.stringify(user));
  },
};

export default authService;
