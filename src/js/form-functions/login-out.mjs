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
        if(accessToken) {
            window.location.href = "../index.html";
        };

    } catch(error) {
        console.log(error);
    };
};

export function formHandler(loginUrl, registerUrl) {

const registerForm = document.getElementById("register-form");
if(registerForm) {
    return registerForm.addEventListener("submit", async (event) => {
        try {
            const data = regiserData(registerForm, event);
            await handleData(data, registerUrl);
            await handleData(data, loginUrl);   
        } catch(error) {
            console.log(error);
        }
    });
};

const loginForm = document.getElementById("login-form");
if(loginForm) {
    return loginForm.addEventListener("submit", async (event) => {
        try {
            const data = loginData(loginForm, event);
            await handleData(data, loginUrl);
        } catch(error) {
            console.log(error);
        };
    });
};
};