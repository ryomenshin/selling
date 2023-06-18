// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");

// When Menu clicked

document.querySelector("#goodsMenu");
onclick = () => {
  navbarNav.classList.toggle("active");
};

// Click on the outside to remove menu

const menu = document.querySelector("#goodsMenu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e, target))
    navbarNav.classList.remove("active");
});
