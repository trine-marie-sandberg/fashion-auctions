import { loginData } from "./login-data.mjs";
import { regiserData } from "./register-data.mjs";

const registerForm = document.getElementById("register-form");
if(registerForm) {
    registerForm.addEventListener("submit", (event) => {
        regiserData(registerForm, event);
    });
};

const loginForm = document.getElementById("login-form");
if(loginForm) {
    loginForm.addEventListener("submit", (event) => {
        loginData(loginForm, event);
    });
};