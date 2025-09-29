// Navigation Active State Logic (Scroll Spy)
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    let current = "";

    sections.forEach(section => {
        // Offset scroll position to account for the fixed header
        const sectionTop = section.offsetTop - 150; 
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
};


// Typing Text Animation Logic
const typingElement = document.querySelector(".typing-text span");
const textArray = ["Web Developer", "Java Programmer", "Front-End Designer", "Full Stack Aspirant", "Problem Solver"];
let textArrayIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentText = textArray[textArrayIndex];
    const delay = isDeleting ? 50 : 150; // Faster deletion

    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
        // Text fully typed, start deleting after a pause
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && charIndex === 0) {
        // Text fully deleted, move to the next word
        isDeleting = false;
        textArrayIndex = (textArrayIndex + 1) % textArray.length;
    }

    setTimeout(type, delay);
}

// Start the typing animation when the script loads
document.addEventListener("DOMContentLoaded", type);