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