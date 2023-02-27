import { singleProduct } from "./html.mjs";

export function displayProduct(product) {

    let bidArray = [];
    const bids = product.bids;
    for (let i = 0; i < bids.length; i++) {
        const bid = bids[i].amount;
        bidArray.push(bid);
    };
    
    let highestBid = Math.max(...bidArray);
    if(bidArray.length === 0) {
        highestBid = 0;
    };

    const productWrap = document.createElement("div");
    const productWrapClasses = ["card-wrap", "bg-grey-bg-card", "border-white", "border-radius-xs", "margin-med"];
    productWrap.classList.add(...productWrapClasses);
    const title = product.title;
    const description = product.description;
    const sellerName = product.seller.name;
    const sellerAvatar = product.seller.avatar;
    const amountOfBids = bids.length;
    const created = product.created;
    const tags = product.tags;
    const endsAt = product.endsAt;

    productWrap.innerHTML = singleProduct(title, description, sellerName, sellerAvatar, highestBid, amountOfBids, created, tags, endsAt);

    const imgContainer = productWrap.querySelector(".imgContainer");
    const img = document.createElement("img");
    img.style.maxHeight = "35vh";
    const imgClasses = ["img-auto", "img-contain", "border-white", "border-radius-xs", "bg-grey-contrast-slight"];
    let media = product.media;

    if(media.length === 0) {
        img.src = "../src/assets/img/placeholder-img.jpg";
        imgContainer.append(img);
    } else {
        media.forEach(() => {
            img.src = media;
            img.classList.add(...imgClasses);
            imgContainer.append(img);
        });
    };

    return productWrap;
};