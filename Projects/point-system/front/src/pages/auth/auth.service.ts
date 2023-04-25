import axios from "axios";

import { SignInInterface } from "./interfaces/signIn.interface";
import { environment } from "../../environments/environment";

const authService = {
  async autenticate(data: SignInInterface) {
    const response = axios.post(environment.api, data);
  },
};

export default authService;
