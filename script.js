// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const words = document.querySelectorAll('.hero-content h1 span');
    words.forEach((word, index) => {
        word.style.setProperty('--i', index);
    });
});

document.querySelectorAll('.feature h3').forEach(item => {
    item.addEventListener('click', () => {
        const content = item.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// JavaScript for Toggle with Show/Hide Animation
document.querySelectorAll('.feature-title').forEach((title) => {
    title.addEventListener('click', () => {
        const feature = title.parentElement;
        feature.classList.toggle('active'); // Toggle the active class to show/hide content
    });
});