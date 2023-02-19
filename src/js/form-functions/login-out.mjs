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
        window.location.reload();
    });
};

const loginForm = document.getElementById("login-form");
if(loginForm) {
    return loginForm.addEventListener("submit", async (event) => {
        try {
            const data = loginData(loginForm, event);
            await handleData(data, loginUrl);
            console.log(data);
            window.location.href = "../index.html"
        } catch(error) {
            console.log(error);
        };
    });
};
};