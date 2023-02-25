import * as local from "../storage/localstorage.mjs";

export function creditHandler(btn, user, token) {
    btn.addEventListener("click", async (event) => {

        const curentCredits = user.credits;
        const getCredit = curentCredits + 1000;
        const updateCredit = local.storageLoad("profile");
        updateCredit["credits"] = getCredit;
        local.storageSave("profile", updateCredit);
        window.location.reload();
    });
};