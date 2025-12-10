console.log("Hello world");

const headerEl = document.querySelector(".header");
const btnMenu = headerEl.querySelector("button");

console.log(btnMenu);

btnMenu.addEventListener("click", (ev) => {
  headerEl.classList.toggle("open");
  if (headerEl.classList.contains("open")) {
    document.body.classList.add("no-scroll");
    return;
  }
  document.body.classList.remove("no-scroll");
});
