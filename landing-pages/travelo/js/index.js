const showMenu = () => {
  let element = document.querySelector(".main-menu");
  element.classList.toggle("collapse");
};

document.querySelector(".toggler").addEventListener("click", showMenu);
