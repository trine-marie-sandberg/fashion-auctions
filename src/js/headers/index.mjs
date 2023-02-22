import * as local from "../storage/localstorage.mjs";
const token = local.storageLoad("accessToken");

export const allListings = {

    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
};

export const auth = {

    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    },
};