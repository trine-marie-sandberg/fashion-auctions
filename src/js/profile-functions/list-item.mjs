import * as html from "./html.mjs";

export function getFormData(form, event) {
    event.preventDefault();
    const data = {
        title: form.title.value,
        description: form.description.value,
        tags: form.tags.value,
        media: form.url.value,
        endsAt: form.ends.value,
    };
    return data;
};

export async function createAuction(user, token, data) {
    try {
        const tag = data.tags.split(",");
        let media = data.media.split(",");
        let mediaArray = [];
        mediaArray.push(...media);
        if(mediaArray.length = 0) {
            mediaArray = "";
        };

        const auctionBody = {
            "title": data.title,
            "description": data.description,
            "tags": tag,
            "media": mediaArray,
            "endsAt": data.endsAt,
        }
        console.log(auctionBody)
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
        if(response.ok) {
            window.location.reload();
        } else {
            alert("Something went wrong. Please try again");
        };
    } catch(error) {
        console.log(error);
    };
};

export function listItem(container, profile, token) {
    const createForm = document.createElement("form");
    container.append(createForm)
    const form = container.querySelector("form");
    console.log(form)
    form.innerHTML = html.auctionForm();
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const tags = form.tags.value;
        console.log(tags)
        if(tags.includes(" ")) {
            alert("Please do not ad spaces in the tags field. Instead,separate,words,with,comma");
            console.log("alert")
        } else {
            createAuction(profile, token, getFormData(form, event));
        };
    });
};