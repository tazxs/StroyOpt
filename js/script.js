let MobileButton = document.querySelector(".mobile__btn-item");
let MobileContent = document.querySelector(".mobile__list");

const MobileFunc = function () {
    if (MobileContent.style.display === "block") {
        MobileContent.style.display = "none";
    } else {
        MobileContent.style.display = "block";
    }
};

MobileButton.addEventListener("click", MobileFunc);

const modal = document.querySelector(".aside_mobile");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".open-modal");
const closeBtn = document.querySelector(".close-btn");

openModalBtn.addEventListener("click", function () {
    modal.classList.remove("none");
    overlay.classList.remove("none");
});

closeBtn.addEventListener("click", function () {
    modal.classList.add("none");
    overlay.classList.add("none");
});

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("none")) {
        modal.classList.add("none");
        overlay.classList.add("none");
    }
});
