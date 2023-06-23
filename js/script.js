// Var
const navbarNav = document.querySelector(".navbar-nav");
const shoppingBag = document.querySelector(".shopping-bag");
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const menu = document.querySelector("#goods-menu");
const sb = document.querySelector("#search-button");
const sbb = document.querySelector("#shopping-bag-button");

// Toggle class active
// When menu clicked
document.querySelector("#goods-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};
document.querySelector("#shopping-bag-button").onclick = (e) => {
  shoppingBag.classList.toggle("active");
  e.preventDefault();
};

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Click on the outside of sidebar to remove

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sbb.contains(e.target) && !shoppingBag.contains(e.target)) {
    shoppingBag.classList.remove("active");
  }
});
