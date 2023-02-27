import { getListings } from "./get-listings.mjs";
import { displayPost } from "./create-listing-cards.mjs";
import { displayProduct } from "./create-single-product.mjs";
import * as endpoint from "../api-endpoints.mjs";
import * as options from "../headers/index.mjs";
import { bidHandler } from "./bid.mjs";

export async function listingsHandler(listingsContainer) {
    try {

        if(listingsContainer) {

            const listingsArray = await getListings(endpoint.api + endpoint.listings + endpoint.sortByTag, options.allListings);
            listingsContainer.append(...listingsArray.map(displayPost));
        };

        if(window.location.href.includes("/product-details/")) {

            const queryString = document.location.search;
            const param = new URLSearchParams(queryString);
            const id = param.get("id")

            const productContainer = document.querySelector(".product-container");
            const productObject = await getListings(endpoint.api + endpoint.listings + id + endpoint.options);
            productContainer.append(displayProduct(productObject));

            bidHandler(id);
        };

    } catch(error) {
        console.log(error);
    };
};