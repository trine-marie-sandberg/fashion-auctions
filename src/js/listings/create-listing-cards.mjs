import * as html from "./html.mjs";
import { editAuction } from "../profile-functions/edit-auction.mjs";

export function displayPost(listing) {

    const cardWrap = document.createElement("div");
    const cardWrapClasses = ["card-wrap", "bg-grey-bg-card", "border-white", "border-radius-xs", "padding-top-btm-med"];
    cardWrap.classList.add(...cardWrapClasses);
    let media = [listing.media];

    if(media.length === 0) {
        media = ["./src/assets/img/placeholder-img.jpg"];
    } else {
        media = media[0];
    };

    let bidArray = [];
    let bids = listing.bids;
    let bid;
    let totalBids;
    if(bids) {
      bids = listing.bids;
    for (let i = 0; i < bids.length; i++) {
        bid = bids[i];
        bidArray.push(bid.amount);        
    }
    } else {
      bid = listing._count;
      totalBids = bid.bids;
      bidArray.push(totalBids);
    };
    
    let highestBid;
    if(window.location.href.includes("/my-account/")) {
        highestBid = "Total bids: " + totalBids;
    } else if(bidArray.length === 0) {
      highestBid = "No bids";
    } else {
      highestBid = "Current bid: $ " + Math.max(...bidArray);
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
    let href;
    if(window.location.href.includes("/my-account/")) {
      href = "../product-details/?id=" + id;
    } else {
      href = "./product-details/?id=" + id;
    };
    const title = listing.title;
    const endsAt = listing.endsAt;
    cardWrap.innerHTML = html.listingCards(highestBid, title, shortDescription, sortedTags, endsAt);

    if(window.location.href.includes("/my-account/")) {
      const editButton = cardWrap.querySelector(".edit-card-btn");
      const delBtn = cardWrap.querySelector(".delete-btn");
      const editFormWrap = cardWrap.querySelector(".edit-form");
      const highlightBtns = cardWrap.querySelector(".highlight-btns")
      editButton.style.display = "block";
      editAuction(editButton, editFormWrap, delBtn, highlightBtns);
      if(editButton.style.display = "block") {
        delBtn.style.display = "block";
      };
    };
    cardWrap.querySelector("img").src = media;
    cardWrap.querySelector("img").alt = listing.title;
    cardWrap.querySelector("a").href = href;
    
    return cardWrap
  };