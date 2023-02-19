import { mobileMenu } from "./menu-items/mobile-menu.js";
import * as local from "./storage/localstorage.mjs";
const mobileMenuBtn = document.querySelector("#mobile-menu-btn");
mobileMenuBtn.addEventListener("click", mobileMenu);

const token = local.storageLoad("accessToken");
const loginOutBtn = document.querySelector(".login-out-btn");
if(token) {
    loginOutBtn.innerText = "Logout";
} else {
    loginOutBtn.innerText = "Login";
};

loginOutBtn.addEventListener("click", () => {
    
    if(token) {
        console.log(token)
        function logout() {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("user");
            localStorage.removeItem("profile");

            window.location.reload();
        };
        logout();
        loginOutBtn.innerText = "Logout";
    }
    else {
        
        if((window.location.href.includes("/login/")) || (window.location.href.includes("/register/"))) {
            //
        }
        else {
            window.location.href = "./login/";
        }
        loginOutBtn.style.textDecoration = "underline";
    }
});