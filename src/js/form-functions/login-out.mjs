import { loginData } from "./login-data.mjs";
import { regiserData } from "./register-data.mjs";
import { storageSave } from "../storage/localstorage.mjs";

const errorMessage = document.createElement("p");
const loader = document.createElement("div");
const loaderClass = ["spinner"];
loader.classList.add(loaderClass);

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
        } else {
            loader.innerHTML = `<p>Error: Sorry, we could not log you in. Please make sure your username and password are corect.</p>
                                <p>Technical details: Code ${response.status}, ${response.statusText}</p>
                                <p>url: ${response.url}</p>`;
            const errorClasses = ["color-red", "bg-white", "border-red", "padding-xs", "border-radius-xs"];
            loader.classList.remove("spinner");
            loader.classList.add(...errorClasses)
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
            registerForm.append(loader);
            const data = regiserData(registerForm, event);
            await handleData(data, registerUrl);
            await handleData(data, loginUrl);   
        } catch(error) {
            console.log(error);
        };
    });
};

const loginForm = document.getElementById("login-form");
if(loginForm) {
    return loginForm.addEventListener("submit", async (event) => {
        try {
            loginForm.append(loader);
            const data = loginData(loginForm, event);
            await handleData(data, loginUrl);
        } catch(error) {
            console.log(error);
        };
    });
};
};