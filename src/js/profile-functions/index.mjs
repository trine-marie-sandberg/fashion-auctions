import * as local from "../storage/localstorage.mjs";
import * as html from "./html.mjs";
import { creditHandler } from "./credits.mjs";
import { createAuction } from "./list-item.mjs";

function profileHandler() {
    
    const token = local.storageLoad("accessToken");
    const profile = local.storageLoad("profile");
    const creditBtn = document.getElementById("get-credits");
    creditHandler(creditBtn, profile, token);

    let avatarUrl = profile.avatar;
    const userName = profile.name;

    const avatarWrap = document.querySelector(".my-avatar");
    avatarWrap.style.cursor = "pointer"

    if(avatarUrl === null) {
        avatarUrl = "../src/assets/img/avatar-placeholder.png";
    };
    avatarWrap.innerHTML = html.avatar(userName, avatarUrl);

    const formWrap = document.createElement("div");
    formWrap.innerHTML = html.form();
    const form = formWrap.querySelector("form");
    form.addEventListener("submit", async () => {
        try {
            const requestBody = {
                "avatar": form.url.value,
            };
            const postData = {
                method: "PUT",
                body: JSON.stringify(requestBody),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };
            const response = await fetch(`https://nf-api.onrender.com/api/v1/auction/profiles/${userName}/media`, postData);
            const saveUrl = local.storageLoad("profile");
            saveUrl["avatar"] = form.url.value;
            local.storageSave("profile", saveUrl);
        } catch (error) {
            console.log(error);
        };
        window.location.reload();
    });

    const clickDiv = avatarWrap.querySelector("div");
    clickDiv.addEventListener("click", () => {
        avatarWrap.append(form);
    });

    const profileContainer = document.querySelector(".my-profile");
    profileContainer.innerHTML = `<div class="padding-left-right-med">
                                     <p>My credits: $ ${profile.credits}</p>
                                     <p>My e-mail: ${profile.email}</p>
                                  </div>`;
    const listBtn = document.getElementById("new-auction");
    listBtn.addEventListener("click", (event) => {
        console.log(event)
    });
    createAuction(profile, token);
};
profileHandler();