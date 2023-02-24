function logout() {
    
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    localStorage.removeItem("profile");

    window.location.reload();
};

export function logInOutHandler(btn, token) {
    if(token) {
        logout();
        btn.innerText = "Logout";
    }
    else {
        
        if((window.location.href.includes("/login/")) || (window.location.href.includes("/register/"))) {
            window.location.reload();
        } else if((window.location.href.includes("/product-details/")) || (window.location.href.includes("/about/"))) {
            window.location.href = "../login/";
        }
        else {
            window.location.href = "./login/";
        }
    }
};

export function loginOutStyles(loginOutBtn, token) {
    if((window.location.href.includes("/login/")) || (window.location.href.includes("/register/"))) {
        loginOutBtn.style.textDecoration = "underline";
    };
    if(token) {
        loginOutBtn.innerText = "Logout";
    } else {
        loginOutBtn.innerText = "Login";
    };
};