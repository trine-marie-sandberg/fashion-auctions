export function displayResults(list) {

    const id = list.id;
    let tag = list.tags;
    const title = list.title;
    const description = list.description;
    const image = list.media[0];

    const html = `<a href="./product-details/?id=${id}">
                        <div class="border-btm-primary search-results-wrap padding-xs">
                            <div>
                                <h2>${title}</h2>
                                <p>${description}</p>
                                <image src="${image}" alt="Product ilustration of ${title}" class="img-auto-reverse border-radious-xs" style="max-height: 100px;">
                                <p>Tags: ${tag}</p>
                            </div>
                        </div>
                  </a>`;
    return html;
};