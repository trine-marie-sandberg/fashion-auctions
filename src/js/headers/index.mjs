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

export const put = {

    method: "PUT",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    },
};

export const del = {

    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    },
};