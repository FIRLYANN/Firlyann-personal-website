// DARK / LIGHT MODE

function toggleTheme() {
    document.body.classList.toggle("light");

    const button = document.querySelector(".theme-btn");

    if (document.body.classList.contains("light")) {
        button.textContent = "🌙";
    } else {
        button.textContent = "☀️";
    }
}


// MOBILE MENU

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}


// TYPING EFFECT

const texts = [
    "Student",
    "Future Medical Student",
    "Future Doctor"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    const typing = document.querySelector(".typing");
    const currentText = texts[textIndex];

    if (!deleting) {
        typing.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            deleting = true;

            setTimeout(typingEffect, 1500);
            return;
        }
    } else {
        typing.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            textIndex++;

            if (textIndex >= texts.length) {
                textIndex = 0;
            }
        }
    }

    setTimeout(typingEffect, deleting ? 60 : 110);
}

typingEffect();


// PAGE NAVIGATION

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.style.display = "none";
    });

    const selectedPage = document.getElementById(pageId);

    selectedPage.style.display = "flex";

    selectedPage.style.an// DARK / LIGHT MODE

function toggleTheme() {

    document.body.classList.toggle("light");

    const button = document.querySelector(".theme-btn");

    if (document.body.classList.contains("light")) {
        button.textContent = "🌙";
    } else {
        button.textContent = "☀️";
    }

}


// MOBILE MENU

function toggleMenu() {

    document
        .querySelector(".nav-links")
        .classList.toggle("active");

}


// TYPING EFFECT

const texts = [
    "Student",
    "Future Medical Student",
    "Future Doctor"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    const typing = document.querySelector(".typing");

    const currentText = texts[textIndex];

    if (!deleting) {

        typing.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;
        }

    } else {

        typing.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            textIndex++;

            if (textIndex >= texts.length) {
                textIndex = 0;
            }

        }

    }

    setTimeout(
        typingEffect,
        deleting ? 60 : 110
    );

}

typingEffect();


// PAGE NAVIGATION

function showPage(pageId) {

    const pages =
        document.querySelectorAll(".page");

    pages.forEach(page => {
        page.style.display = "none";
    });

    const selectedPage =
        document.getElementById(pageId);

    selectedPage.style.display = "flex";

    selectedPage.style.animation = "none";

    setTimeout(() => {

        selectedPage.style.animation =
            "fadeIn 0.7s ease";

    }, 10);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    document
        .querySelector(".nav-links")
        .classList.remove("active");

}imation = "none";

    setTimeout(() => {
        selectedPage.style.animation = "fadeIn 0.7s ease";
    }, 10);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    document.querySelector(".nav-links").classList.remove("active");
}