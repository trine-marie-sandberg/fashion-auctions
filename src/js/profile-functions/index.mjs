import * as local from "../storage/localstorage.mjs";
import * as html from "./html.mjs";
import { createAuction, getFormData, listItem } from "./list-item.mjs";
import { getUserAuctions } from "./users-auctions.mjs";

function profileHandler() {
    const loader = document.querySelector(".spinner");
    const token = local.storageLoad("accessToken");
    const profile = local.storageLoad("profile");

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
    profileContainer.innerHTML = html.userDetails(profile);
    
    const listBtn = document.getElementById("new-auction");
    const auctionFormContainer = document.getElementById("auction-form-container");
    const classes = ["bg-white", "border-radius-xs", "border-grey-contrast-slight"];
    auctionFormContainer.classList.add(...classes);
    auctionFormContainer.style.display = "none";
    let cancelForm = document.createElement("div");

    cancelForm. innerHTML = `<div class="flex flex-right">
                               <button aria-label="cancel edit this auction" class="border-black border-radius-xs padding-xs color-black bg-white cursor-pointer">
                                 <i class="close-form fa-solid fa-x"></i>
                               </button>
                             </div>`;
                             
    auctionFormContainer.append(cancelForm);
    cancelForm.style.display = "none";
    
    listBtn.addEventListener("click", () => {
        cancelForm.style.display = "block";
        auctionFormContainer.style.display = "block";
        cancelForm.addEventListener("click", () => {
            auctionFormContainer.style.display = "none";
        });
        listItem(auctionFormContainer, profile, token);
    });

    const userAuctionsContainer = document.querySelector(".card-container");
    getUserAuctions(userAuctionsContainer, loader);
};
profileHandler();