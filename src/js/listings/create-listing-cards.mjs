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

    const description = listing.description;
    let shortDescription;
    if(!description) {
      shortDescription = "";
    } else if(description.length > 30) {
      shortDescription = description.substring(0, 30) + " ...";
    } else {
      shortDescription = description.substring(0, 30);
    };

    const id = listing.id;
    const href = "./product-details/?id=" + id;
    cardWrap.innerHTML = `<a class="card even-columns bg-white padding-xs">
                            <div class="listing-info-wrap padding-left-right-sm">
                              <p class="margin-no">Start at: $ ${highestBid}</p>
                              <h2 class="listing-name margin-xs">${listing.title}</h2>
                            </div>
                            <div>
                              <img class="card-img listing-img img-auto auto-img" onerror="this.onerror=null; this.src='./src/assets/img/placeholder-img.jpg';">
                              <p class="padding-left-right-sm">${shortDescription}</p>
                              <p class="padding-left-right-sm">Tags: ${listing.tags}</p>
                              <p class="padding-left-right-sm">Ends: ${listing.endsAt}</p>
                            </div>
                          </a>`;
  
    cardWrap.querySelector("img").src = media;
    cardWrap.querySelector("img").alt = listing.title;
    //cardWrap.style.height = "350px";
    //cardWrap.querySelector("img").className = "card-img";
    //cardWrap.querySelector("span").innerText = listing.body;
    cardWrap.querySelector("a").href = href;
    
    return cardWrap
  }