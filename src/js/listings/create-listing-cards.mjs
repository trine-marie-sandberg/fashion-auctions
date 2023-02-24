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

    const id = listing.id;
    const href = "./product-details/?id=" + id;
    cardWrap.innerHTML = `<a class="card even-columns bg-white padding-sm">
                            <div class="listing-info-wrap padding-left-right-sm">
                              <h2 class="listing-name">${listing.title}</h2>
                              <p>Auction ends: ${listing.endsAt}</p>
                              <p>Seller: ${listing.seller.name}</p>
                              <p>Description: ${listing.description}</p>
                            </div>
                            <div>
                              <img src="" class="listing-img img-auto border-grey-contrast-slight border-radius-sm auto-img" alt="${listing.title}"  onerror="this.onerror=null; this.src='./src/assets/img/placeholder-img.jpg';">
                            </div>
                            <p class="padding-left-right-sm">Tags: ${listing.tags}</p>
                          </a>`;
  
    cardWrap.querySelector("img").src = media;
    cardWrap.querySelector("img").style.maxHeight = "250px";
    cardWrap.querySelector("img").style.maxWidth = "350px";
    //cardWrap.querySelector("span").innerText = listing.body;
    cardWrap.querySelector("a").href = href;
    
    return cardWrap
  }