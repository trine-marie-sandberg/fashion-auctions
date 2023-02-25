export function avatar(userName, avatarUrl) { 
    const html = `<div class="flex flex-wrap padding-xs">
                      <h2 class="margin-xs">Welcome ${userName}</h2>
                      <div>
                         <img src="${avatarUrl}" alt="Avatar placeholder" class="avatar bg-white">
                      </div> 
                   </div>`;
    return html;
};

export function form() {
    const html =   `<form class="transparent-white border-grey-contrast-light border-radius-xs padding-xs" id="edit-avatar" onsubmit="return false">
                      <label for="url">Avatar url:</label>
                      <input type="text" id="url" name="url" required>
                      <button type="submit" class="btn bg-primary color-white border-grey-contrast-dark">Submit</button>
                    </form>`;
 return html;
};

export function auctionForm() {
    const html =   `<form class="transparent-white border-grey-contrast-light border-radius-xs padding-xs" id="edit-avatar" onsubmit="return false">
                      <label for="title">Title:</label>
                      <input type="text" id="title" name="title" required>
                      <label for="description">Description:</label>
                      <input type="text" id="description" name="description" required>
                      <label for="tags">Tags (separate,with,comma): </label>
                      <input type="text" id="tags" name="tags" multiple arial-label="tags">
                      <label for="media">Image url:</label>
                      <input type="text" id="media" name="url">
                      <button type="submit" class="btn bg-primary color-white border-grey-contrast-dark">Submit</button>
                    </form>`;
 return html;
};