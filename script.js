// Attendre que le contenu soit chargé
document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio d'Arthur chargé avec succès !");

    // Effet Parallaxe léger sur la section Hero
    const heroText = document.querySelector('.hero-text');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        
        // Ne bouge que si on est en haut de page pour la perf
        if (scrollPosition < 600 && heroText) {
            // Déplace le texte légèrement vers le bas quand on scrolle
            heroText.style.transform = `translateY(${scrollPosition * 0.2}px)`;
            // Réduit l'opacité progressivement
            heroText.style.opacity = 1 - (scrollPosition / 500);
        }
    });

    // Smooth Scroll pour les navigateurs plus anciens (fallback)
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
