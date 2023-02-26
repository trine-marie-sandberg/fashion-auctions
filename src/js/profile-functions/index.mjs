import * as local from "../storage/localstorage.mjs";
import * as html from "./html.mjs";
import { creditHandler } from "./credits.mjs";
import { createAuction, getFormData } from "./list-item.mjs";

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
    formWrap.innerHTML = html.avatarForm();
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
            await fetch(`https://nf-api.onrender.com/api/v1/auction/profiles/${userName}/media`, postData);
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
        form.style.display = "block";
        const close = document.querySelector(".close");
        close.addEventListener("click", (close) => {
            form.style.display = "none";
        });
    });

    const profileContainer = document.querySelector(".my-profile");
    profileContainer.innerHTML = `<div class="padding-left-right-med">
                                     <p>My credits: $ ${profile.credits}</p>
                                     <p>My e-mail: ${profile.email}</p>
                                  </div>`;

    const listBtn = document.getElementById("new-auction");
    
    listBtn.addEventListener("click", (event) => {
        const auctionFormContainer = document.getElementById("auction-form-container");
        const createForm = document.createElement("form");
        auctionFormContainer.append(createForm)
        const form = auctionFormContainer.querySelector("form");
        form.innerHTML = html.auctionForm();
        form.addEventListener("submit", (event) => {
            const tags = form.tags.value;
            console.log(tags)
            event.preventDefault();
            if(tags.includes(" ")) {
                alert("Please do not ad spaces in the tags field. Instead,separate,words,with,comma");
            } else {
                createAuction(profile, token, getFormData(form, event));
            }
            
        });
        //
    });
};
profileHandler();