export function mobileMenu() {

    const nav = document.getElementById("topnav");
    if (nav.className === "topnav flex") {
      nav.className = " responsive";
    } else {
      nav.className = "topnav flex";
    }
  };