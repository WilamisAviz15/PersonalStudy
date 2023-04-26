import axios from "axios";

import { SignInInterface } from "./interfaces/signIn.interface";
import { environment } from "../../environments/environment";

const authService = {
  async authenticate(data: SignInInterface) {
    return axios.post(environment.api, data);
  },
};

export default authService;
