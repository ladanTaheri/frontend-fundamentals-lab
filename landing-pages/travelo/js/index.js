const menu = document.querySelector(".main-menu");
const toggler = document.querySelector(".toggler");

const showMenu = () => {
  menu.classList.toggle("collapse");
};
if (toggler && menu) {
  toggler.addEventListener("click", showMenu);
}
