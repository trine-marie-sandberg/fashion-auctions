import { getListings } from "./get-listings.mjs";
import { displayPost } from "./create-listing-cards.mjs";
import { displayProduct } from "./create-single-product.mjs";
import * as endpoint from "../api-endpoints.mjs";
import * as options from "../headers/index.mjs";
import { bidHandler } from "./bid.mjs";

export async function listingsHandler(listingsContainer, loader) {
    try {
        if(listingsContainer) {
            const listingsArray = await getListings(endpoint.api + endpoint.listings + endpoint.sortByTag + "&_active=true", options.allListings);
            if(listingsArray) {
                loader.style.display = "none";
            };
            listingsContainer.append(...listingsArray.map(displayPost));
        };

        if(window.location.href.includes("/product-details/")) {

            const queryString = document.location.search;
            const param = new URLSearchParams(queryString);
            const id = param.get("id")

            const productContainer = document.querySelector(".product-container");
            const productObject = await getListings(endpoint.api + endpoint.listings + id + endpoint.options);
            if(productObject) {
                loader.style.display = "none";
            };
            productContainer.append(displayProduct(productObject));
            bidHandler(id, productObject);
        };

    } catch(error) {
        console.log(error);
    };
};