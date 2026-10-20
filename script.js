/* =====================================
   PAGE SYSTEM
===================================== */

const pages = document.querySelectorAll(".page");
const navButtons = document.querySelectorAll(".navbar nav button");
const pageButtons = document.querySelectorAll(".page-button");

let currentPage = 0;


/* =====================================
   SCROLL TO PAGE
===================================== */

function scrollToPage(index) {

    if (index < 0 || index >= pages.length) {
        return;
    }

    pages[index].scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =====================================
   INITIAL PAGE
===================================== */

function updateCurrentPage() {

    const viewportCenter = window.innerHeight / 2;

    pages.forEach((page, index) => {

        const bounds = page.getBoundingClientRect();

        if (bounds.top <= viewportCenter && bounds.bottom > viewportCenter) {
            currentPage = index;
        }

    });

    navButtons.forEach((button, index) => {
        button.classList.toggle("active", index === currentPage);
    });
}

window.addEventListener("scroll", updateCurrentPage, { passive: true });
window.addEventListener("resize", updateCurrentPage);
updateCurrentPage();


/* =====================================
   NAVIGATION
===================================== */

navButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const target =
            Number(button.dataset.page);

        scrollToPage(target);

    });

});


/* =====================================
   PAGE BUTTONS
===================================== */

pageButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const target =
            Number(button.dataset.next);

        scrollToPage(target);

    });

});


/* =====================================
   KEYBOARD NAVIGATION
===================================== */

document.addEventListener("keydown", (event) => {

    if (event.key === "ArrowRight") {

        if (currentPage < pages.length - 1) {
            scrollToPage(currentPage + 1);
        }

    }

    if (event.key === "ArrowLeft") {

        if (currentPage > 0) {
            scrollToPage(currentPage - 1);
        }

    }

});


/* =====================================
   MOUSE PARALLAX
===================================== */

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;


document.addEventListener("mousemove", (event) => {

    mouseX =
        (event.clientX / window.innerWidth - 0.5) * 2;

    mouseY =
        (event.clientY / window.innerHeight - 0.5) * 2;

});


function animateParallax() {

    currentX +=
        (mouseX - currentX) * 0.04;

    currentY +=
        (mouseY - currentY) * 0.04;


    document.documentElement.style.setProperty(
        "--mouse-x",
        `${currentX * 35}px`
    );

    document.documentElement.style.setProperty(
        "--mouse-y",
        `${currentY * 35}px`
    );


    /* Chrome logo */

    const chrome =
        document.querySelector(".chrome-ring");

    if (chrome) {

        chrome.style.transform = `
            perspective(800px)
            rotateX(${currentY * -8}deg)
            rotateY(${currentX * 10}deg)
        `;

    }


    /* Big chrome */

    const bigChrome =
        document.querySelector(".big-chrome");

    if (bigChrome) {

        bigChrome.style.transform = `
            perspective(800px)
            rotateX(${currentY * -7}deg)
            rotateY(${currentX * 10}deg)
        `;

    }


    requestAnimationFrame(
        animateParallax
    );
}

animateParallax();
