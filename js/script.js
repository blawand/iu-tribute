document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Navigation Toggle ---
    const navToggle = document.querySelector('.nav-toggle');
    const mainNavUl = document.querySelector('.main-nav ul');

    if (navToggle && mainNavUl) {
        navToggle.addEventListener('click', () => {
            mainNavUl.classList.toggle('nav-active');
            // Optional: Change toggle icon (e.g., hamburger to X)
             if (mainNavUl.classList.contains('nav-active')) {
                navToggle.setAttribute('aria-expanded', 'true');
                // navToggle.textContent = '✕'; // Example: Change icon to X
            } else {
                navToggle.setAttribute('aria-expanded', 'false');
                // navToggle.textContent = '☰'; // Example: Change icon back to hamburger
            }
        });

        // Close mobile nav if clicking outside of it (optional)
        document.addEventListener('click', (event) => {
            const isClickInsideNav = mainNavUl.contains(event.target);
            const isClickOnToggle = navToggle.contains(event.target);

            if (!isClickInsideNav && !isClickOnToggle && mainNavUl.classList.contains('nav-active')) {
                 mainNavUl.classList.remove('nav-active');
                 navToggle.setAttribute('aria-expanded', 'false');
                 // navToggle.textContent = '☰';
            }
        });
    }

    // --- Smooth Scrolling for internal links (optional) ---
    // Example: If you have links like <a href="#sectionId">...</a>
    // const internalLinks = document.querySelectorAll('a[href^="#"]');
    // internalLinks.forEach(link => {
    //     link.addEventListener('click', function(e) {
    //         e.preventDefault();
    //         const targetId = this.getAttribute('href');
    //         const targetElement = document.querySelector(targetId);
    //         if (targetElement) {
    //             targetElement.scrollIntoView({ behavior: 'smooth' });

    //              // If using mobile nav, close it after clicking a link
    //             if (mainNavUl && mainNavUl.classList.contains('nav-active')) {
    //                  mainNavUl.classList.remove('nav-active');
    //                  navToggle.setAttribute('aria-expanded', 'false');
    //                  // navToggle.textContent = '☰';
    //             }
    //         }
    //     });
    // });


    // --- Add other simple interactions here ---
    // Example: Maybe a simple fade-in effect for sections on scroll
    // (Requires more complex Intersection Observer setup)

    // NOTE: The album detail page has its own specific script embedded in its HTML
    // for toggling content sections. For a larger site, you'd consolidate
    // this logic here, likely using data-attributes to link buttons to content.

});