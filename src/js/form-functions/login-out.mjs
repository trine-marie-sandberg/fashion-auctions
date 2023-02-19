import { loginData } from "./login-data.mjs";
import { regiserData } from "./register-data.mjs";
import { storageSave } from "../storage/localstorage.mjs";

async function handleData(data, url) {
    try {
        const postData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };
        const response = await fetch(url, postData);
        console.log(response)

        const { accessToken, ...profile } = await response.json();
        storageSave("accessToken", accessToken);
        storageSave("profile", profile);

    } catch(error) {
        console.log(error);
    };
};

export function formHandler(loginUrl, registerUrl) {

const registerForm = document.getElementById("register-form");
if(registerForm) {
    return registerForm.addEventListener("submit", function(event) {
        const data = regiserData(registerForm, event);
        console.log(data);
        handleData(data, registerUrl);
    });
};

const loginForm = document.getElementById("login-form");
if(loginForm) {

    return loginForm.addEventListener("submit", function(event) {
        const data = loginData(loginForm, event);
        console.log(data);
        handleData(data, loginUrl);
    });
};
};