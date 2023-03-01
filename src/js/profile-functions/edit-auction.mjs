import { edit } from "./html.mjs";
export function editAuction(btn, form) {
    btn.addEventListener("click", () => {
        console.log(form);
        const wrapper = document.createElement("div");
        form.append(wrapper)
        wrapper.innerHTML = edit();
    });
};