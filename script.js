// Function to update the active link based on scroll position
function updateActiveLink() {
    const sections = document.querySelectorAll('.section');
    const navbarLinks = document.querySelectorAll('.geometric-navbar a');

    let currentActive = null;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
            currentActive = section.getAttribute('id'); // Get the current active section id
        }
    });

    navbarLinks.forEach(link => {
        if (link.getAttribute('href') === '#' + currentActive) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink); // Ensure it runs on page load

// JavaScript to add animation on scroll
document.addEventListener('DOMContentLoaded', () => {
    const aboutParts = document.querySelectorAll('.about-part');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    aboutParts.forEach(part => {
        observer.observe(part);
    });
});

// Prevent scrolling on page refresh
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);


