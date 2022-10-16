const hamburger = document.querySelector(".hamburger-bars")
const mainNavToggle = document.querySelector(".main-nav")
const mainNavItem = document.querySelectorAll(".main-nav__item")

mainNavToggle.addEventListener("click", _ => {
    document.body.classList.toggle("is-open")

})


