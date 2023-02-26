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

    productWrap.innerHTML = `<div class="padding-sm">
                                <div class="flex flex-wrap flex-between">
                                  <div>
                                      <h1>${product.title}</h1>
                                      <h2>Product description</h2>
                                      <p class="max-width-500">${product.description}</p>
                                  </div>
                                  <div class="border-radius-xs bg-white padding-sm border-xl fit-content-h margin-xs">
                                      <div class="flex flex-wrap padding-xs">
                                          <h3>${product.seller.name}</h3>
                                          <div>
                                              <img src="${product.seller.avatar}" class="avatar margin-left-right-xs">
                                          </div>
                                      </div>
                                      <p>Current highest bid: $ ${highestBid}</p>
                                      <p>Bids: ${bids.length}</p>
                                      <button class="btn bg-primary color-white border-grey-contrast-dark">Make a bid</button>
                                  </div> 
                                </div>
                                <div class="imgContainer margin-top-btm-sm"></div>
                                <div class="flex flex-between flex-wrap padding-left-right-xs bg-white border-radius-xs">
                                  <div>
                                     <p>Created: ${product.created}</p>
                                     <p>Tags: ${product.tags}</p>
                                  </div>
                                  <p>Auction ends: ${product.endsAt}</p>
                                </div>
                             </div>
                            `;

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