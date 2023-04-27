import { environment } from "../../../environments/environment";
import { AxiosRequest } from "./interfaces/axios-request.interface";

async function callAxios<T, D>(path: string, fn: AxiosRequest, data?: T, param?: number) {
  async function getRequest(url: string, data?: T) {
    return data
      ? await fn<D>(`${environment.api}/${url}/${param ? param : ""}`, data)
      : await fn<D>(`${environment.api}/${url}/${param ? param : ""}`);
  }

  return await getRequest(path, data);
}

export default callAxios;
