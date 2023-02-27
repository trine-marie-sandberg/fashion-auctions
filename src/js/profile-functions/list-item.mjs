import * as html from "./html.mjs";

export function getFormData(form, event) {

    event.preventDefault();

    const data = {
        title: form.title.value,
        description: form.description.value,
        tags: form.tags.value,
        media: form.url.value,
        //endsAt: "2023-05-25T14:32:17.579Z",
    };

    return data;
};
let media = [];
export async function createAuction(user, token, data) {
    try {
        const tag = data.tags.split(",");
        media.push(data.media);
        const auctionBody = {
            "title": data.title,
            "description": data.description,
            "tags": tag,
            "media": media,
            "endsAt": "2023-05-25T14:32:17.579Z",
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

export function listItem(container, profile, token) {
    const createForm = document.createElement("form");
    container.append(createForm)
    const form = container.querySelector("form");
    form.innerHTML = html.auctionForm();
    form.addEventListener("submit", (event) => {
        const tags = form.tags.value;
        console.log(tags)
        event.preventDefault();
        if(tags.includes(" ")) {
            alert("Please do not ad spaces in the tags field. Instead,separate,words,with,comma");
        } else {
            createAuction(profile, token, getFormData(form, event));
        }
    });
};