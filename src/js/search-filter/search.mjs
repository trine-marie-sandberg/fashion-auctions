import { getListings } from "../listings/get-listings.mjs";
import { allListings } from "../headers/index.mjs";
import * as endpoint from "../api-endpoints.mjs";
import { closeSearch } from "./close-search.mjs";
import { displayResults } from "./html.mjs";

export async function searchHandler(container, searchBar) {

    const data = allListings;
    const listings = await getListings(endpoint.api + endpoint.listings + endpoint.sortByTag, data);
    container.style.display = "none";

    searchBar.addEventListener("keyup", (event) => {

        const searchCharacters = event.target.value;
        console.log(event.target.value)
        const searchString = searchCharacters.toLowerCase();
        
        let filteredList = listings.filter(listings => {

            const title = listings.title.toLowerCase();
            const includeTitle = title.includes(searchString);

            const idArray = [listings.id];
            let id = idArray.toString();
            const includeId = id.includes(searchString);

            const description = [listings.description].toString();
            const includeDescription = description.includes(searchString);

            return includeTitle + includeId + includeDescription;
        });
        container.style.display = "block";
        
        const displayList = (filteredListings, searchListContainer) => {
            const htmlString = filteredListings.map((listings) => {
                return displayResults(listings);
                }).join("");   
            searchListContainer.innerHTML = htmlString;
        };
        displayList(filteredList, container)
    });
    closeSearch(container, searchBar);
};