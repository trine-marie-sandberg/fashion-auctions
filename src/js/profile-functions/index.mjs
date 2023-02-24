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

    const htmlAvatar = `<div class="flex flex-wrap padding-xs">
                          <h2 class="margin-xs">Welcome ${userName}</h2>
                          <div>
                             <img src="${avatarUrl}" alt="Avatar placeholder" class="avatar bg-white">
                          </div> 
                        </div>`;

    avatarWrap.innerHTML = htmlAvatar;
    console.log(avatarUrl)

    const form = document.createElement("form");
    form.innerHTML = `<div class="bg-white border-grey-contrast-light border-radius-xs padding-xs">
                         <form>
                             <label for="url">Avatar url:</label>
                             <input type="text" id="url">
                             <button type="submit" class="btn bg-primary color-white border-grey-contrast-dark">Submit</button>
                         </form>
                      </div>`;

    const clickDiv = avatarWrap.querySelector("div");
    clickDiv.addEventListener("click", () => {
        avatarWrap.append(form);
    });
    const profileContainer = document.querySelector(".my-profile");
    profileContainer.innerHTML = `<div class="padding-left-right-med">
                                     <p>My credits: $ ${profile.credits}</p>
                                     <p>My e-mail: ${profile.email}</p>
                                  </div>`;
};
profileHandler();