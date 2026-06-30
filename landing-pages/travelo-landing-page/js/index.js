const menu = document.querySelector(".main-menu");
const toggler = document.querySelector(".toggler");
const selectTravelType = document.querySelector(".travel-type");

const showMenu = () => {
  menu.classList.toggle("collapse");
};

const changeColor = () => {
  selectTravelType.classList.add("text-white");
};
if (toggler && menu) {
  toggler.addEventListener("click", showMenu);
}
if (selectTravelType) {
  selectTravelType.addEventListener("change", changeColor);
}
