export function getFormData(form, event) {

    event.preventDefault();

    const data = {
        title: form.title.value,
        description: form.description.value,
        tags: form.tags.value,
        media: [form.url.value],
        endsAt: "2023-05-25T14:32:17.579Z",
    };

    return data;
};

export async function createAuction(user, token, data) {
    try {
        console.log(user, token);

        const auctionBody = {
            "title": data.title,
            "description": data.description,
            "tags": [
              data.tags
            ],
            "media": data.media,
            "endsAt": data.endsAt,
        }
        const postData = {
            method: "POST",
            body: JSON.stringify(auctionBody),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        console.log(postData)
        const response = await fetch(`https://nf-api.onrender.com/api/v1/auction/listings`, postData);
        console.log(response);
    } catch(error) {
        console.log(error);
    };
};