document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.element_nav').classList.toggle('element-nav_hidden');
});

// Sélectionnez tous les liens de navigation
const navLinks = document.querySelectorAll('.element_nav a');

// Parcourez chaque lien et ajoutez un écouteur d'événement au clic
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Récupérez l'attribut href du lien
        const targetId = link.getAttribute('href');

        // Récupérez l'élément cible (la section correspondante)
        const targetElement = document.querySelector(targetId);

        // Faites défiler la page jusqu'à l'élément cible
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth' // Animation fluide
        });
    });
});
