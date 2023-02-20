export function displayPost(listing) {
    console.log(listing)
    const cardWrap = document.createElement("div");
    const cardWrapClasses = ["card-wrap", "bg-grey-bg-card", "border-white", "border-radius-xs", "padding-top-btm-med"];
    cardWrap.classList.add(...cardWrapClasses);
    let media = [listing.media];
    //console.log(cardWrap.media)

    if(media.length === 0) {
        media = ["./src/assets/img/placeholder-img.jpg"];
        console.log(media)
    } else {
        media = media[0];
    }

    cardWrap.id = listing.id;
    cardWrap.innerHTML = `<a href="#" class="card even-columns bg-white padding-sm">
                            <div class="listing-info-wrap padding-left-right-sm">
                            <h2 class="listing-name">${listing.title}</h2>
                            <p>Created: ${listing.created}</p>
                            <p>Last updated: ${listing.updated}</p>
                            <p>Auction ends: ${listing.endsAt}</p>
                            <p>Description: ${listing.description}</p>
                            </div>
                            <div>
                              <img src="${media}" class="listing-img img-auto border-grey-contrast-slight border-radius-sm auto-img" alt="${listing.title}"  onerror="this.onerror=null; this.src='./src/assets/img/placeholder-img.jpg';">
                            </div>
                          </a>`;
  
    //cardWrap.querySelector("img").src = listing.media;
    //cardWrap.querySelector("span").innerText = listing.body;
    
    return cardWrap
  }