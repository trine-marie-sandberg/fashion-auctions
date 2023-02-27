import * as local from "../storage/localstorage.mjs";
export function bidHandler(id) {
console.log(id)
    const html = `<form class="margin-xs">
                    <label for="amount">Amount: </label>
                    <input id="amount" type="number" name="amount" required>
                    <button>Bid</button>
                  </form>`;

    const bidContainer = document.querySelector(".bid-and-seller");
    const formWrap = document.createElement("div");
    formWrap.innerHTML = html;
    const token = local.storageLoad("accessToken")

    const bidBtn = document.querySelector(".bid-btn");
    bidBtn.addEventListener("click", (event) => {
        bidContainer.append(formWrap);
        const form = bidContainer.querySelector("form");
        form.addEventListener("submit", async (event) => {
            event.preventDefault();

            const amount = parseFloat(form.amount.value);
            console.log(typeof(amount))
            const body = {
                "amount": amount,
            };
            console.log("body: ", body)
            try {
                const postData = {
                    method: "POST",
                    body: JSON.stringify(body),
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                };
                console.log("postdata: ", postData)
                const response = await fetch(`https://nf-api.onrender.com/api/v1/auction/listings/${id}/bids`, postData);
                console.log(response);
            } catch(error) {
                console.log(error);
            };
        });
    });
};