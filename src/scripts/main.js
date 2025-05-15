const contactPage = document.getElementById("contact-page"),
    success_page = document.getElementById("success_page"),
    overly = document.getElementById("overly"),
    form = document.getElementById("form"),
    errorMsg = document.querySelectorAll(".error-text");

function openContact() {
    contactPage.classList.add("cnt-opn"), contactPage.classList.remove("cnt-cls")
}

function closeContact() {
contactPage.classList.add("cnt-cls");
 contactPage.classList.remove("cnt-opn");
}
const thumbnail = document.getElementById("thumbnail"),
    overlay = document.getElementById("overlay"),
    fullscreenImage = document.getElementById("fullscreenImage");

function closeSuccess() {
success_page.style.display = "none";
contactPage.classList.add("cnt-cls");
 form.reset();
}
thumbnail.addEventListener("click", () => {
    overlay.style.display = "flex"
}), overlay.addEventListener("click", () => {
    overlay.style.display = "none"
});



console.log('Design and development by - https://www.github.com/pawanhirumina')