import { mobileMenu } from "./menu-items/mobile-menu.js";
import * as local from "./storage/localstorage.mjs";
import { logInOutHandler, loginOutStyles } from "./menu-items/login-logout.mjs";
import { listingsHandler } from "./listings/index.mjs";

const listingsContainer = document.getElementById("listings-container");
listingsHandler(listingsContainer);

const mobileMenuBtn = document.querySelector("#mobile-menu-btn");
mobileMenuBtn.addEventListener("click", mobileMenu);

const token = local.storageLoad("accessToken");
const loginOutBtn = document.querySelector(".login-out-btn");

loginOutBtn.addEventListener("click", () => {
    
    logInOutHandler(loginOutBtn, token);   
});

loginOutStyles(loginOutBtn, token);
const menuAccount = document.getElementById("account-menu");
function accountMenu(token, menuAccount) {
    if(menuAccount) {
        if(!token) {
            menuAccount.style.display = "none";
        } else {
            menuAccount.style.display = "block";
        };
    };
};
accountMenu(token);
