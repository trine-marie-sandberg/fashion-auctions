import * as local from "../storage/localstorage.mjs";

function profileHandler() {

    const avatarWrap = document.querySelector(".my-avatar");
    avatarWrap.style.cursor = "pointer"
    const profile = local.storageLoad("profile");
    let avatarUrl = profile.avatar;
    const userName = profile.name;

    if(avatarUrl === null) {
        avatarUrl = "../src/assets/img/avatar-placeholder.png";
    };

    const htmlAvatar = `<h2 class="margin-xs">Welcome ${userName}</h2>
                  <div>
                     <img src="${avatarUrl}" alt="Avatar placeholder" class="avatar bg-white">
                  </div>`;

    avatarWrap.innerHTML = htmlAvatar;
    console.log(avatarUrl)

    const form = document.createElement("form");
    form.innerHTML = `<div class="bg-white border-grey-contrast-light padding-xs">
                         <label for="url">Avatar url:</label>
                         <input type="text" id="url">
                         <button class="btn bg-primary color-white border-grey-contrast-dark">Submit</button>
                      </div>`;

    avatarWrap.addEventListener("click", () => {
        avatarWrap.append(form);
    });
};
profileHandler();