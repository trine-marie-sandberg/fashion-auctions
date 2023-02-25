export async function createAuction(user, token, form) {
    try {
        console.log(user, token);

        const auctionBody = {
            "title": "string",
            "description": "string",
            "tags": [
              "string"
            ],
            "media": "string",
        }
        const postData = {
            method: "POST",
            body: JSON.stringify(auctionBody),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        //const response = await fetch(`https://nf-api.onrender.com/api/v1/auction/listings`, postData);
    } catch(error) {
        console.log(error);
    };
};