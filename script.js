// 1. Mouse Glow Tracking
const glow = document.getElementById('cursor-glow');
window.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

// 2. Scroll Reveal Logic
const revealElements = document.querySelectorAll('.reveal');

const scrollReveal = () => {
    revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 50) {
            el.classList.add('active');
        }
    });
};

// Listen for scroll
window.addEventListener('scroll', scrollReveal);

// Run once on load to show elements already in view
window.addEventListener('DOMContentLoaded', scrollReveal);

console.log("Apex Studio Script Loaded Successfully.");
