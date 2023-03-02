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
console.log(menuAccount)
const avatar = document.querySelector(".avatar");
const profile = local.storageLoad("profile");
const accountLink = document.querySelector(".account-link");
const welcomeText = document.querySelector(".welcome-text");
function accountMenu(token, menuAccount) {
    if(menuAccount) {
        if(!token) {
            menuAccount.style.display = "none";
            accountLink.style.display = "none";
        } else {
            menuAccount.style.display = "block";
            if(profile.avatar) {
                avatar.src = profile.avatar;
                avatar.alt = "My profile picture";
                welcomeText.innerHTML = `Hi ${profile.name} <i class="fa-regular fa-face-smile-beam"></i>`;
            };
        };
    };
};
accountMenu(token, menuAccount);
