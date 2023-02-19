import { mobileMenu } from "./menu-items/mobile-menu.js";
import * as local from "./storage/localstorage.mjs";
import { logInOutHandler, loginOutStyles } from "./menu-items/login-logout.mjs";

const mobileMenuBtn = document.querySelector("#mobile-menu-btn");
mobileMenuBtn.addEventListener("click", mobileMenu);

const token = local.storageLoad("accessToken");
const loginOutBtn = document.querySelector(".login-out-btn");

loginOutBtn.addEventListener("click", () => {
    
    logInOutHandler(loginOutBtn, token);   
});
loginOutStyles(loginOutBtn, token);

function accountMenu(token) {
    const menu = document.getElementById("account-menu");
    if(!token) {
        menu.style.display = "none";
    }
    
    console.log(menu)
};
accountMenu(token);