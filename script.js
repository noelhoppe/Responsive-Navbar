document.addEventListener("DOMContentLoaded", function () {
    var hamburgerToggle = document.querySelector("#hamburger-toggle");
    var hamburgerOpen = document.querySelector("#hamburger-open");
    var hamburgerClose = document.querySelector("#hamburger-close");
    var navbar = document.querySelector("#navbar");
    hamburgerToggle.addEventListener("click", function () {
        navbar.classList.toggle("open");
        hamburgerOpen.classList.toggle("d-none");
        hamburgerClose.classList.toggle("d-none");
    });
});
