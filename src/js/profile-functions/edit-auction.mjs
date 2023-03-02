import { edit } from "./html.mjs";
export function editAuction(editBtn, form, delBtn, highlights) {
    highlights.style.backgroundColor = "#395658"
    editBtn.addEventListener("click", () => {
        console.log(form);
        const wrapper = document.createElement("div");
        form.append(wrapper)
        wrapper.innerHTML = edit();
        wrapper.style.display = "block";

        const closeBtn = wrapper.querySelector(".close-form");
        closeBtn.addEventListener("click", (event) => {
            console.log(event)
            wrapper.style.display = "none";
        });
    });

    delBtn.addEventListener("click", (event) => {
        console.log("delete not working yet");
    });
};