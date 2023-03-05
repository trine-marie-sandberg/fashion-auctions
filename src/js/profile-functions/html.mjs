export function avatar(userName, avatarUrl) { 
    const html = `<div class="flex flex-wrap padding-xs">
                      <h2 class="margin-xs color-primary">Welcome ${userName}</h2>
                      <div>
                         <img src="${avatarUrl}" alt="Avatar placeholder" class="avatar bg-white">
                      </div> 
                   </div>`;
    return html;
};

export function avatarForm() {
    const html =   `<form class="bg-grey-contrast-slight border-radius-xs padding-xs color-black" id="edit-avatar" onsubmit="return false">
                      <div class="flex flex-column">
                        <div class="margin-left-right-xs flex flex-right">
                          <i class="close fa-solid fa-x border-black border-radius-xs padding-xs color-black bg-white"></i>
                        </div>
                        <div class="flex flex-column padding-xs">
                          <label class="padding-top-btm-xs" for="url">Avatar url:</label>
                          <input class="padding-xs border-radius-xs border-grey-contrast-slight box-shaddow-grey-contrast-slight" type="text" id="url" name="url" required>
                        </div>
                        <div class="flex flex-column"></div>
                        <button type="submit" class="btn bg-primary color-white border-grey-contrast-dark padding-xs margin-xs fit-content-w">Submit</button>
                      </div>
                    </form>`;
 return html;
};

export function userDetails(profile) {
  const html = `<div class="padding-left-right-med">
                  <p>My credits: $ ${profile.credits}</p>
                  <p>My e-mail: ${profile.email}</p>
                </div>`;
  return html;
};

export function auctionForm() {
    const html =   `<form>
                      <div class="margin-left-right-xs flex flex-right cursor-pointer" aria-label="cancel create auction">
                        <i class="close-form fa-solid fa-x border-black border-radius-xs padding-xs color-black bg-white"></i>
                      </div>
                      <div class="flex flex-column">
                        <label for="title" class="padding-top-btm-xs">Title:</label>
                        <input id="title" type="text" name="title" class="border-grey-contrast-slight box-shaddow-grey-contrast-slight border-radius-xs padding-xs" placeholder="Auction name" required>
                      </div>
                      <div class="flex flex-column">
                        <label for="description" class="padding-top-btm-xs">Description</label>
                        <input id="description" name="description" type="text" class="border-grey-contrast-slight box-shaddow-grey-contrast-slight border-radius-xs padding-xs" placeholder="Item quality, brand, etc.">
                      </div>
                      <div class="flex flex-column">
                        <label for="tags" class="padding-top-btm-xs">Tags(separate,with,comma. fashion added by default):</label>
                        <input id="tags" name="tags" type="text" class="border-grey-contrast-slight box-shaddow-grey-contrast-slight border-radius-xs padding-xs" placeholder="example,leather,jacket">
                      </div>
                      <div class="flex flex-column">
                        <label for="media" class="padding-top-btm-xs">Image url (ad multiple url's by separating,them,with,comma): </label>
                        <input id="media" name="url" type="text" class="border-grey-contrast-slight box-shaddow-grey-contrast-slight border-radius-xs padding-xs" placeholder="https://image.jpg">
                      </div>
                      <div class="flex flex-wrap margin-xs">
                        <label for="ends" class="padding-xs">Auction ends: </label>
                        <input id="ends" type="datetime-local" name="ends" class="border-radius-xs padding-xs" required>
                      </div>
                      <div id="form-error-create"></div>
                      <button type="submit" class="btn bg-primary color-white border-grey-contrast-dark">Submit</button>
                    </form>`;
 return html;
};

export function edit() {
  const html = `<form id="edit-auction" class="bg-secondary border-dashed-grey-contrast-light padding-med border-radius-xs">
                  <div>
                    <div class="margin-left-right-xs flex flex-right cursor-pointer" aria-label="cancel edit this auction">
                      <i class="close-form fa-solid fa-x border-black border-radius-xs padding-xs color-black bg-white"></i>
                    </div>
                  </div>
                  <div class="flex flex-column">
                    <label for="title">Title:</label>
                    <input id="title" type="text" name="title" class="border-grey-contrast-slight box-shaddow-grey-contrast-slight border-radius-xs padding-xs" placeholder="Auction name">
                  </div>
                  <div class="flex flex-column">
                    <label for="description">description</label>
                    <textarea id="description" name="description" type="text" class="border-grey-contrast-slight box-shaddow-grey-contrast-slight border-radius-xs padding-xs" placeholder="Item quality, brand, etc.">
                    </textarea>
                  </div>
                  <div class="flex flex-column">
                    <label for="tags">Tags: (separate,with,comma)</label>
                    <input id="tags" name="tags" type="text" class="border-grey-contrast-slight box-shaddow-grey-contrast-slight border-radius-xs padding-xs" placeholder="example,leather,jacket">
                  </div>
                  <div class="flex flex-column">
                    <label for="media">Image url (ad multiple url's by separating,them,with,comma): </label>
                    <input id="media" name="url" type="text" class="border-grey-contrast-slight box-shaddow-grey-contrast-slight border-radius-xs padding-xs" placeholder="https://image.jpg">
                  </div>
                  <button name="submit" type="submit" class="btn bg-primary border-grey-contrast-slight color-white margin-xs">Submit</button>
                </form>`;
  return html;
};

export function dialog() {
  const html = `<p class="padding-xs">Are you sure you want to delete this auction?</p>
                <div class="flex flex-between padding-xs">
                  <button class="yes-btn btn bg-red border-grey-contrast-slight color-white cursor-pointer">Yes</button>
                  <button class="no-btn btn bg-primary border-grey-contrast-slight color-white cursor-pointer">No</button>
                </div>`;
  return html;
};