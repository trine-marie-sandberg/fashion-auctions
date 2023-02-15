import { mobileMenu } from "./menu-items/mobile-menu.js";
import * as local from "./storage/localstorage.mjs";

const mobileMenuBtn = document.querySelector("#mobile-menu-btn");
mobileMenuBtn.addEventListener("click", mobileMenu);

const token = local.storageLoad("accessoken");
const loginOutBtn = document.querySelector(".login-out-btn");
if(token) {
    loginOutBtn.innerText = "Logout";
} else {
    loginOutBtn.innerText = "Login";
};

loginOutBtn.addEventListener("click", () => {
    
    if(token) {

        //Logout function here
        loginOutBtn.innerText = "Login";
    }
    else {
        document.location.replace("/auth/profile/login");
    }
});