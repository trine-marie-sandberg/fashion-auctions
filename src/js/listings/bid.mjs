import * as local from "../storage/localstorage.mjs";
export function bidHandler(id, product) {

    const html = `<form class="margin-xs">
                    <label for="amount">Amount: </label>
                    <input id="amount" class="border-grey-contrast-slight box-shaddow-grey-contrast-slight border-radius-xs padding-xs" type="number" name="amount" required>
                    <button class="btn bg-primary color-white border-grey-contrast-dark cursor-pointer">Bid</button>
                  </form>`;

    const bidContainer = document.querySelector(".bid-and-seller");
    const formWrap = document.createElement("div");
    formWrap.innerHTML = html;
    const token = local.storageLoad("accessToken")
    const bidBtn = document.querySelector(".bid-btn");

    bidBtn.addEventListener("click", (event) => {
        bidBtn.style.display = "none";
        bidContainer.append(formWrap);

        const form = bidContainer.querySelector("form");
        const bids = product.bids;
        let bidArray = [];
        for(let i = 0; i < bids.length; i++) {
            bidArray.push(bids[i].amount);
        };

        const highestBid = Math.max(...bidArray)
        form.amount.value = highestBid + 1;
        form.amount.min = highestBid + 1;

        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            const amount = parseFloat(form.amount.value);
            const body = {
                "amount": amount,
            };

            try {
                const postData = {
                    method: "POST",
                    body: JSON.stringify(body),
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                };
                const response = await fetch(`https://nf-api.onrender.com/api/v1/auction/listings/${id}/bids`, postData);
                if(response.ok) {
                    window.location.reload();
                } if(!response.ok) {
                    if(response.status === 403) {
                        alert("Biding on your own auctions is not allowed");
                    };
                    alert("Something went wrong. Please try again later.")
                };
            } catch(error) {
                console.log(error);
            };
        });
    });
};