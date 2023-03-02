import { edit } from "./html.mjs";
export function editAuction(editBtn, form, delBtn, highlights) {

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

        editForm.addEventListener("submit", (event) => {
            event.preventDefault();
            console.log(event)
        });

        const closeBtn = wrapper.querySelector(".close-form");
        closeBtn.addEventListener("click", () => {
            wrapper.style.display = "none";
            editBtn.style.display = "block";
        });
    });

    delBtn.addEventListener("click", () => {
        console.log("delete not working yet");
    });
};