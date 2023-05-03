import jwt_decode from "jwt-decode";

export class JwtServiceUtil {
  constructor() {}

  static getDecodedAccessToken(token: string): any {
    // eslint-disable-next-line no-useless-catch
    try {
      return jwt_decode(token);
    } catch (error) {
      throw error;
    }
  }
}
