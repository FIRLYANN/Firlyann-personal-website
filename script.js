/* =====================================
   PAGE SYSTEM
===================================== */

const pages = document.querySelectorAll(".page");
const navButtons = document.querySelectorAll(".navbar nav button");
const pageButtons = document.querySelectorAll(".page-button");

let currentPage = 0;
let changing = false;


/* =====================================
   SHOW PAGE
===================================== */

function showPage(index) {

    if (index < 0 || index >= pages.length) {
        return;
    }

    if (index === currentPage) {
        return;
    }

    if (changing) {
        return;
    }

    changing = true;


    /* Remove current */

    pages[currentPage].classList.remove("active");

    navButtons[currentPage].classList.remove("active");


    /* Small delay for cinematic transition */

    setTimeout(() => {

        currentPage = index;

        pages[currentPage].classList.add("active");

        navButtons[currentPage].classList.add("active");

    }, 100);


    setTimeout(() => {

        changing = false;

    }, 750);
}


/* =====================================
   INITIAL PAGE
===================================== */

pages.forEach((page, index) => {

    page.classList.toggle(
        "active",
        index === 0
    );

});

navButtons[0].classList.add("active");


/* =====================================
   NAVIGATION
===================================== */

navButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const target =
            Number(button.dataset.page);

        showPage(target);

    });

});


/* =====================================
   PAGE BUTTONS
===================================== */

pageButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const target =
            Number(button.dataset.next);

        showPage(target);

    });

});


/* =====================================
   KEYBOARD NAVIGATION
===================================== */

document.addEventListener("keydown", (event) => {

    if (event.key === "ArrowRight") {

        if (currentPage < pages.length - 1) {
            showPage(currentPage + 1);
        }

    }

    if (event.key === "ArrowLeft") {

        if (currentPage > 0) {
            showPage(currentPage - 1);
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
