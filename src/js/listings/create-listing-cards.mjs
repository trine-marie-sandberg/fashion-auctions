import * as html from "./html.mjs";

export function displayPost(listing) {

    const cardWrap = document.createElement("div");
    const cardWrapClasses = ["card-wrap", "bg-grey-bg-card", "border-white", "border-radius-xs", "padding-top-btm-med", "margin-xs"];
    cardWrap.classList.add(...cardWrapClasses);
    let media = [listing.media];

    if(media.length === 0) {
        media = ["./src/assets/img/placeholder-img.jpg"];
    } else {
        media = media[0];
    };

    let bidArray = [];
    const bids = listing.bids;
    for (let i = 0; i < bids.length; i++) {
        const bid = bids[i].amount;
        bidArray.push(bid);
    };
    
    let highestBid = Math.max(...bidArray);
    if(bidArray.length === 0) {
        highestBid = 0;
    };

    const description = listing.description;
    let shortDescription;
    if(!description) {
      shortDescription = "";
    } else if(description.length > 30) {
      shortDescription = description.substring(0, 30) + "..";
    } else {
      shortDescription = description.substring(0, 30);
    };

    let sortedTags = [];
    let tags = "";
    if(listing.tags.length === 0) { 
    } else {
      tags = listing.tags;
      for(let i = 0; i < listing.tags.length; i++) {
        sortedTags.push(" " + listing.tags[i]);
      };
      let shortedTags;
      if(sortedTags.length === 0){
        shortedTags = "";
      } else if(sortedTags.length > 3) {
        shortedTags = sortedTags.slice(0, 3) + "..";
        sortedTags = shortedTags;
      };
    };

    const id = listing.id;
    const href = "./product-details/?id=" + id;
    const title = listing.title;
    const endsAt = listing.endsAt;
    cardWrap.innerHTML = html.listingCards(highestBid, title, shortDescription, sortedTags, endsAt);
    cardWrap.querySelector("img").src = media;
    cardWrap.querySelector("img").alt = listing.title;
    cardWrap.querySelector("a").href = href;
    
    return cardWrap
  }