export function listingCards(highestBid, title, shortDescription, sortedTags, endsAt) {
    const html = `<div>
                    <a class="card even-columns bg-white padding-xs">
                      <div class="listing-info-wrap padding-left-right-sm">
                        <p class="margin-no">${highestBid}</p>
                        <h2 class="listing-name margin-xs">${title}</h2>
                      </div>
                      <div>
                        <img class="card-img" onerror="this.onerror=null; this.src='./src/assets/img/placeholder-img.jpg';">
                        <p class="padding-left-right-sm">${shortDescription}</p>
                        <p class="padding-left-right-sm">Tags: ${sortedTags}</p>
                        <p class="padding-left-right-sm">Ends: ${endsAt}</p>
                      </div>
                    </a>
                    <button class="edit-card-btn"><i class="fa-solid fa-pen-to-square"></i></button>
                  </div>`;
  return html;
};

export function singleProduct(title, description, sellerName, sellerAvatar, highestBid, amountOfBids, created, tags, endsAt) {
    const html = `<div class="padding-sm">
                    <div class="flex flex-wrap flex-between">
                      <div>
                         <h1>${title}</h1>
                         <h2>Product description</h2>
                         <p class="max-width-500">${description}</p>
                      </div>
                        <div class="bid-and-seller border-radius-xs bg-white padding-sm border-xl fit-content-h margin-xs">
                          <div class="flex flex-wrap padding-xs">
                              <h3>${sellerName}</h3>
                          <div>
                              <img src="${sellerAvatar}" class="avatar margin-left-right-xs">
                          </div>
                           </div>
                             <p>Current highest bid: $ ${highestBid}</p>
                             <p>Bids: ${amountOfBids}</p>
                             <button class="bid-btn btn bg-primary color-white border-grey-contrast-dark">Make a bid</button>
                           </div> 
                        </div>
                        <div class="imgContainer margin-top-btm-sm"></div>
                        <div class="flex flex-between flex-wrap padding-left-right-xs bg-white border-radius-xs">
                        <div>
                        <p>Created: ${created}</p>
                        <p>Tags: ${tags}</p>
                        </div>
                        <p>Auction ends: ${endsAt}</p>
                    </div>
                  </div>`;
    return html;
};