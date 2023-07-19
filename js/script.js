// Alert

//?var again = true;

//while (again === true) {
//var nama = prompt("Insert your namee");
//alert("Hello " + nama);
//again = confirm("try again");

//?}

var number = prompt("Insert number");
if (number % 2 === 0) {
  alert(number + " is even number");
} else if (number % 2 === 1) {
  alert(number + " is odd number");
} else {
  alert(number + " is not a number");
}

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

function isoscelesTriangle(line) {
  var maxLength = line + (line - 1);
  var pattern = "";

  for (var a = 1; a <= line; a = a + 1) {
    var nStars = a + (a - 1);
    var numSpaces = (maxLength - nStars) / 2;
    // Spaces
    for (var c = 1; c <= numSpaces; c++) {
      pattern += " ";
    }
    // Stars
    for (var b = 1; b <= nStars; b++) {
      pattern += "*";
    }
    pattern += "\n";
  }

  return pattern;
}

console.log(isoscelesTriangle(3));
