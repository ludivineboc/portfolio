document.addEventListener("DOMContentLoaded", () => {

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const closeBtn = document.querySelector(".close");

    const images = document.querySelectorAll(".image-projet");

    images.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

});


const burgerBtn = document.getElementById("burgerBtn");
const navMenu = document.getElementById("navMenu");

burgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    // changer l'icône
    if (navMenu.classList.contains("show")) {
        burgerBtn.classList.remove("ph-list");
        burgerBtn.classList.add("ph-x");
    } else {
        burgerBtn.classList.remove("ph-x");
        burgerBtn.classList.add("ph-list");
    }
});