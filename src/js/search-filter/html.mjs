export function displayResults(list) {

    const id = list.id;
    const title = list.title;
    const description = list.description;
    const image = list.media;

    const html = `<a href="./product-details/?id=${id}">
                        <div class="border-btm-primary search-results-wrap padding-xs">
                            <div>
                                <h2>${title}</h2>
                                <p>${description}</p>
                                <image src="${image}" alt="Product ilustration of ${title}" class="img-auto-reverse border-radious-xs" style="max-height: 100px;">
                            </div>
                        </div>
                  </a>`;
    return html;
};