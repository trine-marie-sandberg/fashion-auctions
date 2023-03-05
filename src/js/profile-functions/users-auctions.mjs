import * as url from "../api-endpoints.mjs";
import * as local from "../storage/localstorage.mjs";
import * as header from "../headers/index.mjs";
import { getListings } from "../listings/get-listings.mjs";
import { displayPost } from "../listings/create-listing-cards.mjs";

export async function getUserAuctions(container, loader){
    
    const profile = local.storageLoad("profile");
    const fetchOption = header.auth;
    const auctionsUrl = url.api + `profiles/${profile.name}/listings`;

    try {
        const listingsArray = await getListings(auctionsUrl, fetchOption);
        if (listingsArray) {
            loader.style.display = "none";
        };
        container.append(...listingsArray.map(displayPost));

    } catch(error) {
        console.log(error);
    };
};