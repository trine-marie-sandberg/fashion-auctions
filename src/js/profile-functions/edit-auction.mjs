import { edit } from "./html.mjs";
import { put, del } from "../headers/index.mjs";
import { dialog } from "./html.mjs";
export function editAuction(editBtn, form, delBtn, highlights, id, prevTitle, prevDescription, prevTags, prevMedia, dialogBox) {

    highlights.style.backgroundColor = "#395658";

    editBtn.addEventListener("click", () => {
        const wrapper = document.createElement("div");
        form.append(wrapper)
        wrapper.innerHTML = edit();
        wrapper.style.display = "block";
        wrapper.style.position = "absolute";
        wrapper.style.top = "0";
        wrapper.style.zIndex = "5";
        editBtn.style.display = "none";
        const editForm = form.querySelector("form");
        editForm.title.value = prevTitle;
        editForm.description.value = prevDescription;
        editForm.tags.value =prevTags;
        editForm.url.value = prevMedia;

        editForm.addEventListener("submit", async (event) => {
            event.preventDefault();
            let media = prevMedia;
            let newMedia = editForm.media.value.split(",");
            let mediaArray = [];
            const tags = editForm.tags.value;
            const tag = tags.split(",");
            if(newMedia === prevMedia) {
                //do nothing
            } else {
                media = newMedia;
                mediaArray = media;
            };

            const body = {
                "title": editForm.title.value,
                "description": editForm.description.value,
                "tags": tag,
                "media": mediaArray,
            };
            const postData = {
                method: put.method,
                body: JSON.stringify(body),
                headers: put.headers,
            };
            console.log(postData)
            try {
                const response = await fetch(`https://nf-api.onrender.com/api/v1/auction/listings/${id}`, postData);
                console.log(response);
                if(response.ok) {
                    window.location.reload();
                } else {
                    alert("Something went wrong. Please try again");
                };
            } catch(error) {
                console.log(error);
            }
        });

        const closeBtn = wrapper.querySelector(".close-form");
        closeBtn.addEventListener("click", () => {
            wrapper.style.display = "none";
            editBtn.style.display = "block";
        });
    });

    delBtn.addEventListener("click", async () => {
        dialogBox.style.display = "block";
        dialogBox.innerHTML = dialog();
        const noBtn = dialogBox.querySelector(".no-btn");
        noBtn.addEventListener("click", () => {
            dialogBox.style.display = "none";
        });
        const yesBtn = dialogBox.querySelector(".yes-btn");
        yesBtn.addEventListener("click", async () => {
            try {
                const postData = {
                    method: del.method,
                    headers: del.headers,
                };
                console.log(postData)
                const response = await fetch(`https://nf-api.onrender.com/api/v1/auction/listings/${id}`, postData);
                console.log(response);
    
                if(response.ok) {
                    window.location.reload();
                } else {
                    alert("Something went wrong. Please try again");
                };
            } catch(error) {
                console.log(error);
            }
        });
    });
};