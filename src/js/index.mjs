import { mobileMenu } from "./menu-items/mobile-menu.js";
import * as local from "./storage/localstorage.mjs";
import { logInOutHandler, loginOutStyles } from "./menu-items/login-logout.mjs";
import { listingsHandler } from "./listings/index.mjs";
import { searchHandler } from "./search-filter/search.mjs";

const loader = document.querySelector(".spinner");
const listingsContainer = document.getElementById("listings-container");
listingsHandler(listingsContainer, loader);

const mobileMenuBtn = document.querySelector("#mobile-menu-btn");
mobileMenuBtn.addEventListener("click", mobileMenu);

const token = local.storageLoad("accessToken");
const loginOutBtn = document.querySelector(".login-out-btn");
loginOutBtn.addEventListener("click", () => {
    logInOutHandler(loginOutBtn, token);   
});
loginOutStyles(loginOutBtn, token);

const menuAccount = document.getElementById("account-menu");
const avatar = document.querySelector(".avatar");
const profile = local.storageLoad("profile");
const accountLink = document.querySelector(".account-link");
const accountHref = document.querySelector(".account-href");
const welcomeText = document.querySelector(".welcome-text");
function accountMenu(token, menuAccount) {
    if(menuAccount) {
        if(!token) {
            accountLink.style.display = "none";
            accountHref.style.display = "none";
            welcomeText.innerHTML = `Welcome guest <i class="fa-regular fa-face-smile-beam"></i>`;
        } else {
            accountLink.style.display = "block";
            accountHref.style.display = "block";
            if(profile.avatar) {
                avatar.src = profile.avatar;
                avatar.alt = "My profile picture";
                welcomeText.innerHTML = `Hi ${profile.name} <i class="fa-regular fa-face-smile-beam"></i>`;
            };
        };
    };
};
accountMenu(token, menuAccount);

const searchContainer = document.querySelector(".search-container");
const searchBar = document.querySelector(".search");
searchHandler(searchContainer, searchBar);