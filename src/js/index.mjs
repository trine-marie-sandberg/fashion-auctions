import { mobileMenu } from "./menu-items/mobile-menu.js";
import * as local from "./storage/localstorage.mjs";

const mobileMenuBtn = document.querySelector("#mobile-menu-btn");
mobileMenuBtn.addEventListener("click", mobileMenu);

const loginOutBtn = document.querySelector(".login-out-btn");
loginOutBtn.addEventListener("click", () => {
    const token = local.storageLoad("accessToken");
    if(token === null) {
        console.log(token)
        //document.location.href = "/profile/login";
    }
    else {
        console.log(token)
    }
});