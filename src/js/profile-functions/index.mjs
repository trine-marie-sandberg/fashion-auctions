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

    avatarWrap.innerHTML = `<h2 class="margin-xs">Welcome ${userName}</h2>
                            <div>
                              <img src="${avatarUrl}" alt="Avatar placeholder" class="avatar bg-white">
                            </div>`;
    console.log(avatarUrl)
    avatarWrap.addEventListener("click", (event) => {
        console.log(event)
    });
};
profileHandler();