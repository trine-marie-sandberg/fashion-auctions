import { formHandler } from "./login-out.mjs";

const loginEndpoint = "https://nf-api.onrender.com/api/v1/auction/auth/login"
const registerEndpoint = "https://nf-api.onrender.com/api/v1/auction/auth/register"
formHandler(loginEndpoint, registerEndpoint);