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

export function edit() {
  const html = `<form id="edit-auction" class="bg-secondary border-grey-contrast-light border-radius-xs padding-xs">
                  <div>
                    <div class="margin-left-right-xs flex flex-right">
                    <i class="close-form fa-solid fa-x border-black border-radius-xs padding-xs color-black bg-white"></i>
                    </div>
                  </div>
                  <div>
                    <label for"input">Input</label>
                    <input id="input">
                  </div>
                </form>`;
  return html;
};