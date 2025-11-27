document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Gestion de la Navbar (Transparente -> Blanche) ---
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // --- 2. Animation "Scroll Reveal" ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optionnel : arrêter d'observer une fois apparu (plus performant)
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Déclenche quand 15% de l'élément est visible
        rootMargin: "0px 0px -50px 0px" // Décale légèrement la zone de déclenchement
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // --- 3. Effet Parallaxe léger sur Hero ---
    const heroText = document.querySelector('.hero-text');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        // Désactivé sur mobile pour la performance
        if (window.innerWidth > 768 && scrollPosition < 600 && heroText) {
            heroText.style.transform = `translateY(${scrollPosition * 0.2}px)`;
            heroText.style.opacity = 1 - (scrollPosition / 700);
        }
    });

    // --- 4. Smooth Scroll pour les ancres ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
