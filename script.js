/* script.js */
// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        event.preventDefault(); // Prevent form submission
    }
});

// Typing Animation for Name
const nameElement = document.querySelector('.animate-name');
const nameText = "Gourav";
let index = 0;

// Clear the text before starting
nameElement.innerHTML = "";

function typeEffect() {
    if (index < nameText.length) {
        nameElement.innerHTML += nameText.charAt(index);
        index++;
        setTimeout(typeEffect, 200);
    }
}
typeEffect();

// Hero Image Hover Effect (Optional)
document.querySelector(".hero-image").addEventListener("mouseover", function () {
    this.style.transform = "scale(1.05)";
});
document.querySelector(".hero-image").addEventListener("mouseout", function () {
    this.style.transform = "scale(1)";
});

// Social Media Icons - Open Links in New Tab
document.querySelectorAll('.social-links a').forEach(link => {
    link.setAttribute('target', '_blank');
});

// Project Button Click - Redirect to GitHub
document.querySelectorAll('.project-card .code-btn').forEach(button => {
    button.addEventListener('click', function() {
        const projectLink = this.getAttribute('data-link');
        if (projectLink) {
            window.open(projectLink, '_blank');
        }
    });
});
