// ==========================
// Loader
// ==========================

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 500);
});


// ==========================
// Dark Mode
// ==========================

const themeBtn = document.getElementById("themeBtn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    } else {

        localStorage.setItem("theme", "light");

        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

    }

});


// ==========================
// Scroll To Top
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};


// ==========================
// Mobile Menu
// ==========================

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    } else {

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    }

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});


// ==========================
// Scroll Animation
// ==========================

const sections = document.querySelectorAll("section");

sections.forEach(section => {

    section.classList.add("hidden");

});

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

sections.forEach(section => {

    observer.observe(section);

});


// ==========================
// Active Navbar
// ==========================

const navItems = document.querySelectorAll(".nav-links a");

const pageSections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    pageSections.forEach(sec => {

        const sectionTop = sec.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = sec.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==========================
// Navbar Shadow
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow = "none";

    }

});


// ==========================
// Typing Effect
// ==========================

const title = document.querySelector(".hero-text h1");

const words = [
    "Frontend Developer",
    "Web Designer",
    "UI Developer"
];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect() {

    let currentWord = words[wordIndex];

    if (!deleting) {

        title.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        title.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();

const swiper = new Swiper(".mySwiper", {

    slidesPerView:3,

    spaceBetween:30,

    loop:true,

    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },

    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },

    breakpoints:{

        320:{
            slidesPerView:1
        },

        768:{
            slidesPerView:2
        },

        1024:{
            slidesPerView:3
        }

    }

});

 
// ==========================
// End
// =========================