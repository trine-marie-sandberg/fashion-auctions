import * as url from "../api-endpoints.mjs";
import * as local from "../storage/localstorage.mjs";
import * as header from "../headers/index.mjs";
import * as html from "../listings/html.mjs";
import { getListings } from "../listings/get-listings.mjs";
import { displayPost } from "../listings/create-listing-cards.mjs";

export async function getUserAuctions(container){
    
    const profile = local.storageLoad("profile");
    const fetchOption = header.auth;
    const auctionsUrl = url.api + `profiles/${profile.name}/listings`;
    console.log(auctionsUrl, fetchOption);

    try {
        const listingsArray = await getListings(auctionsUrl, fetchOption);
        console.log(listingsArray)

        container.append(...listingsArray.map(displayPost));

    } catch(error) {
        console.log(error);
    };
};