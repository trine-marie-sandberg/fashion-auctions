export function displayProduct(product) {

    console.log(product);
    const productWrap = document.createElement("div");
    const productWrapClasses = ["card-wrap", "bg-grey-bg-card", "border-white", "border-radius-xs", "margin-med"];
    productWrap.classList.add(...productWrapClasses);

    productWrap.innerHTML = `<div class="padding-sm">
                                <div class="flex flex-wrap flex-between">
                                  <div>
                                      <h1>${product.title}</h1>
                                      <h2>Product description</h2>
                                      <p>${product.description}</p>
                                  </div>
                                  <div class="border-radius-xs bg-white padding-sm border-xl fit-content-h">
                                      <div class="flex flex-wrap padding-xs">
                                          <h3>${product.seller.name}</h3>
                                          <div>
                                              <img src="${product.seller.avatar}" class="avatar margin-left-right-xs">
                                          </div>
                                      </div>
                                      <p>Current bid: ${product.bids}</p>
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
    const imgClasses = ["img-auto", "border-grey-contrast-slight", "border-radius-xs"];
    let media = product.media;

    if(media.length === 0) {
        img.src = "../src/assets/img/placeholder-img.jpg";
        imgContainer.append(img);
    } else {
        media.forEach(() => {
            img.src = media;
            img.onerror = "this.onerror=null";
            img.onerror = "./src/assets/img/placeholder-img.jpg";
            img.classList.add(...imgClasses);
            imgContainer.append(img);
        });
    };

    return productWrap;
};