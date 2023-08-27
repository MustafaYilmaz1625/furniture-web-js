const mobileMenuButton = document.getElementById("mobile-menu-button");

const mobileMenu = document.getElementById("mobile-menu");


mobileMenuButton.addEventListener("click",function () {
    mobileMenuButton.classList.toggle("bx-x")
    mobileMenu.classList.toggle("hidden")
})