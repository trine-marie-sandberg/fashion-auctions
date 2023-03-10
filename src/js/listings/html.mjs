export function listingCards(highestBid, title, shortDescription, sortedTags, endsAt) {
    const html = `<div class="auction-cards-wrapper">
                    <a class="card even-columns bg-white padding-xs">
                      <div class="listing-info-wrap padding-left-right-sm">
                        <p class="margin-no">${highestBid}</p>
                        <h2 class="listing-name margin-xs">${title}</h2>
                      </div>
                      <div>
                        <img class="card-img" onerror="this.onerror=null; this.src='https://gamehub-wp-api.one/gamehub/wp-content/uploads/2023/03/placeholder-img.jpg';">
                        <p class="padding-left-right-sm">${shortDescription}</p>
                        <p class="padding-left-right-sm">Tags: ${sortedTags}</p>
                        <p class="padding-left-right-sm">Ends in ${endsAt}</p>
                      </div>
                    </a>
                    <div class="highlight-btns flex flex-between padding-xs">
                      <button class="edit-card-btn bg-white color-black border-black padding-xs border-radius-xs cursor-pointer" aria-label="edit this listing"><i class="fa-solid fa-pen-to-square"></i></button>
                      <button class="delete-btn bg-white color-black border-black padding-xs border-radius-xs cursor-pointer" aria-label="delete this listing"><i class="fa-solid fa-trash"></i></button>
                    </div>
                    <div class="edit-form"></div>
                  </div>`;
  return html;
};

export function singleProduct(title, description, sellerName, sellerAvatar, highestBid, amountOfBids, created, tags, endsAt) {
    const html = `<div class="padding-sm">
                    <div class="flex flex-wrap flex-between border-btm-white">
                      <div>
                         <h1>${title}</h1>
                         <h2>Product description</h2>
                         <p class="max-width-500">${description}</p>
                      </div>
                        <div class="bid-and-seller border-radius-xs bg-white padding-sm border-xl fit-content-h margin-xs">
                          <div class="flex flex-wrap padding-xs">
                              <h3>Seller: ${sellerName}</h3>
                          <div>
                              <img src="${sellerAvatar}" class="avatar margin-left-right-xs">
                          </div>
                           </div>
                             <p>Current highest bid: $ ${highestBid}</p>
                             <p>Bids: ${amountOfBids}</p>
                             <button class="bid-btn btn bg-secondary color-black border-grey-contrast-dark cursor-pointer">Make a bid</button>
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