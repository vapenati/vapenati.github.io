// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Code here will run once the page has loaded
    
    // Example: Smooth scrolling to anchor links
    const scrollLinks = document.querySelectorAll('a.nav-link');
    scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add more JavaScript functionality here based on your requirements
});
// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const navToggler = document.querySelector('.navbar-toggler');
    const navCollapse = document.querySelector('.navbar-collapse');

    // Toggle the navigation menu on click
    navToggler.addEventListener('click', () => {
        navCollapse.classList.toggle('show');
    });

    // Close the navigation menu when a link is clicked
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navCollapse.classList.remove('show');
        });
    });
});
