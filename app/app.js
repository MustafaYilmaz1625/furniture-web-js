const mobileMenuButton = document.getElementById("mobile-menu-button");

const mobileMenu = document.getElementById("mobile-menu");


mobileMenuButton.addEventListener("click",function () {
    mobileMenuButton.classList.toggle("bx-x")
    mobileMenu.classList.toggle("hidden")
})

const header= document.querySelector("header");
window.addEventListener("scroll", function() {
    if(this.window.scrollY > 100){
        header.classList.toggle("sticky", window.scrollY > 0);
        header.style.backgroundColor = "white";
        header.classList.add("shadow");
    }else {
        header.classList.remove("shadow");
    }
})
