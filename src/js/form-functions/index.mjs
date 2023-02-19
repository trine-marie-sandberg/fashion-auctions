import { formHandler } from "./form-handler.mjs";

const loader = "";
const loginEndpoint = "https://nf-api.onrender.com/api/v1/auction/auth/login"
const registerEndpoint = "https://nf-api.onrender.com/api/v1/auction/auth/register"
formHandler(loginEndpoint, registerEndpoint);