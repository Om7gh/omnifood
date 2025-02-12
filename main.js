const nav = document.querySelector(".hero--nav");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const menu = document.querySelectorAll(".menu li");

console.log(menu);

openMenu.addEventListener("click", function () {
  if (!nav.classList.contains("menu--active"))
    nav.classList.add("menu--active");
});

closeMenu.addEventListener("click", function () {
  if (nav.classList.contains("menu--active"))
    nav.classList.remove("menu--active");
});

menu.forEach((element) => {
  element.addEventListener("click", function () {
    if (nav.classList.contains("menu--active"))
      nav.classList.remove("menu--active");
  });
});
