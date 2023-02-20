import { getListings } from "./get-listings.mjs";
import { displayPost } from "./html-temlate.mjs";
import * as endpoint from "../api-endpoints.mjs";

export async function listingsHandler() {
    try {
        
        const listingsArray = await getListings(endpoint.api + endpoint.listings);
        displayPost(listingsArray);
        const container = document.getElementById("listings-container");
        container.append(...listingsArray.map(displayPost));

    } catch(error) {};
};