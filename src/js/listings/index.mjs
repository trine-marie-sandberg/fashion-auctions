import { getListings } from "./get-listings.mjs";
import { displayPost } from "./create-listing-cards.mjs";
import * as endpoint from "../api-endpoints.mjs";
import * as options from "../headers/index.mjs";

export async function listingsHandler(listingsContainer) {
    try {

        if(listingsContainer) {

            const listingsArray = await getListings(endpoint.api + endpoint.listings + endpoint.sortDesc, options.allListings);
            //displayPost(listingsArray);
            //const container = document.getElementById("listings-container");
            listingsContainer.append(...listingsArray.map(displayPost));
        };

        if(window.location.href.includes("/product-details/")) {

            const queryString = document.location.search;
            const param = new URLSearchParams(queryString);
            const id = param.get("id")
            console.log("hi")
            const productObject = await getListings(endpoint.api + endpoint.listings + id);
            console.log(productObject)
        };

    } catch(error) {
        console.log(error);
    };
};