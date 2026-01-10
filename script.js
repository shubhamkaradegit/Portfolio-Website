// Mobile Navbar Toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

//Download Resume
document.getElementById("downloadBtn").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "assets/resume.pdf";         // file path
    link.download = "Shubham_Resume.pdf";    // force download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});


// Dark/Light Theme Toggle

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains('dark')) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});

// About Me 
const roles = [
    "Frontend Developer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Backend Developer"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
let speed = 120;

function typeEffect() {
    currentText = roles[index];

    if (isDeleting) {
        charIndex--;
        speed = 60;
    } else {
        charIndex++;
        speed = 120;
    }

    document.getElementById("typing-text").textContent = currentText.substring(0, charIndex);

    // When full word typed
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        speed = 1000; // small pause
    }
    // When deleting done
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % roles.length;
        speed = 150;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// Project Details 

function openProject(projectUrl) {
    window.location.href = projectUrl;
}


// Smooth Scrolling for Nav Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Project Slider

// function slideLeft(sliderId) {
//     const slider = document.getElementById(sliderId);
//     slider.scrollLeft -= 300;
// }

// function slideRight(sliderId) {
//     const slider = document.getElementById(sliderId);
//     slider.scrollLeft += 300;
// }

function slideLeft(sliderId) {
    const slider = document.getElementById(sliderId);
    slider.scrollBy({
        left: -320,
        behavior: "smooth"
    });
}

function slideRight(sliderId) {
    const slider = document.getElementById(sliderId);
    slider.scrollBy({
        left: 320,
        behavior: "smooth"
    });
}

