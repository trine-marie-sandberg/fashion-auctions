import { getListings } from "./get-listings.mjs";
import { displayPost } from "./create-listing-cards.mjs";
import * as endpoint from "../api-endpoints.mjs";

export async function listingsHandler() {
    try {
        const listingsArray = await getListings(endpoint.api + endpoint.listings + endpoint.sortDesc);
        displayPost(listingsArray);
        const container = document.getElementById("listings-container");
        container.append(...listingsArray.map(displayPost));

    } catch(error) {
        console.log(error);
    };
};