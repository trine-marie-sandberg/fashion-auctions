import { edit } from "./html.mjs";
import { put, del } from "../headers/index.mjs";
export function editAuction(editBtn, form, delBtn, highlights, id) {

    highlights.style.backgroundColor = "#395658";
    //edit auction btn
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
        //editForm on submit
        editForm.addEventListener("submit", async (event) => {
            event.preventDefault();
            let media = [];
            const tags = editForm.tags.value;
            const tag = tags.split(",");
            media.push(editForm.media.value);
            if(media.length = 0) {
                media = [];
            };
            const body = {
                "title": editForm.title.value,
                "description": editForm.description.value,
                "tags": tag,
                "media": media,
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
        //cancel/close editForm
        const closeBtn = wrapper.querySelector(".close-form");
        closeBtn.addEventListener("click", () => {
            wrapper.style.display = "none";
            editBtn.style.display = "block";
        });
    });

    delBtn.addEventListener("click", async () => {
        console.log("delete workin?");
        confirm("Do you want to permanently delete this auction?");
        const postData = {
            method: del.method,
            headers: del.headers,
        };
        if(confirm("Do you want to permanently delete this auction?") == false) {
            //do nothing
        } else if(confirm("Do you want to permanently delete this auction?") == true) {
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
        };
        console.log(postData)
    });
};