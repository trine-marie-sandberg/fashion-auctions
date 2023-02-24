export function displayPost(listing) {
    //console.log(listing)
    const cardWrap = document.createElement("div");
    const cardWrapClasses = ["card-wrap", "bg-grey-bg-card", "border-white", "border-radius-xs", "padding-top-btm-med", "margin-xs"];
    cardWrap.classList.add(...cardWrapClasses);
    let media = [listing.media];

    if(media.length === 0) {
        media = ["./src/assets/img/placeholder-img.jpg"];
    } else {
        media = media[0];
    }
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

    const id = listing.id;
    const href = "./product-details/?id=" + id;
    cardWrap.innerHTML = `<a class="card even-columns bg-white padding-xs">
                            <div class="listing-info-wrap padding-left-right-sm">
                              <p>Start at: $ ${highestBid}</p>
                              <h2 class="listing-name">${listing.title}</h2>
                              <p>Seller: ${listing.seller.name}</p>
                              <p>Description: ${listing.description}</p>
                            </div>
                            <div>
                              <img class="listing-img img-auto border-grey-contrast-slight border-radius-sm auto-img" alt="${listing.title}" onerror="this.onerror=null; this.src='./src/assets/img/placeholder-img.jpg';">
                            </div>
                            <p class="padding-left-right-sm">Tags: ${listing.tags}</p>
                          </a>`;
  
    cardWrap.querySelector("img").src = media;
    cardWrap.querySelector("img").style.maxHeight = "150px";
    cardWrap.querySelector("img").style.maxWidth = "300px";
    //cardWrap.querySelector("span").innerText = listing.body;
    cardWrap.querySelector("a").href = href;
    
    return cardWrap
  }