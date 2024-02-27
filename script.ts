document.addEventListener("DOMContentLoaded", () => {
    const hamburgerToggle :  HTMLButtonElement = document.querySelector("#hamburger-toggle") as HTMLButtonElement;
    const hamburgerOpen : HTMLElement = document.querySelector("#hamburger-open") as HTMLElement;
    const hamburgerClose: HTMLElement = document.querySelector("#hamburger-close") as HTMLElement;
    const navbar : HTMLElement = document.querySelector("#navbar") as HTMLElement;
    hamburgerToggle.addEventListener("click", () => {
        navbar.classList.toggle("open");
        hamburgerOpen.classList.toggle("d-none");
        hamburgerClose.classList.toggle("d-none");
    });
})

