const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");

menu.addEventListener("click", () => {
  nav.classList.add("nav--active");
  menu.style.display = "none";
  close.style.display = "block";
});

close.addEventListener("click", () => {
  nav.classList.remove("nav--active");
  close.style.display = "none";
  menu.style.display = "block";
});

onscroll = () => {
  if (window.scrollY > 1) {
    nav.classList.remove("nav--active");
    close.style.display = "none";
    menu.style.display = "block";

  }
}
