import { API_URL } from "../../settings";
import { handleHttpErrors, makeOptions } from "./fetchUtils";
import { Login } from "../types/login";

const BASE_URL = "http://localhost:4000";

const LOGIN_URL = `${BASE_URL}/login`;

// Authenticate the user with email and password
export async function createLogin(loginData: Login): Promise<string> {
  const options = makeOptions("POST", loginData);
  return fetch(LOGIN_URL, options)
    .then(handleHttpErrors)
    .then((response) => {
      // Assuming the server returns a token on successful login
      return response.token;
    });
}
