// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    darkModeToggle.textContent = body.classList.contains("light-mode") ? "☀️" : "🌙";
});

// Image Slideshow
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}

showSlides();

// Order Popup Functionality
const orderNowBtn = document.getElementById("orderNowBtn");
const orderPopup = document.getElementById("orderPopup");
const closePopup = document.querySelector(".close");

orderNowBtn.addEventListener("click", () => {
    orderPopup.style.display = "flex";
});

closePopup.addEventListener("click", () => {
    orderPopup.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === orderPopup) {
        orderPopup.style.display = "none";
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".count");

    counters.forEach(counter => {
        counter.innerText = "0";
        const target = +counter.getAttribute("data-target");

        const updateCount = () => {
            const current = +counter.innerText;
            const increment = target / 100;

            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});
document.querySelectorAll(".color-options input").forEach((colorInput) => {
    colorInput.addEventListener("change", function () {
        document.getElementById("selected-color").textContent = this.value.toUpperCase();
        document.getElementById("selected-color").style.color = this.value;
    });
});
