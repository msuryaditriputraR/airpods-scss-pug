const toggle = document.getElementById("nav-toggle");
const nav = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
    nav.classList.toggle("show");
});
