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

window.addEventListener('load', function() {
    if (window.innerWidth <= 768) {
        document.querySelector('.element_nav').classList.add('element-nav_hidden');
    }
});

window.addEventListener('scroll', function() {
    var headerHeight = document.querySelector('nav').offsetHeight;
    if (window.scrollY > headerHeight) {
        document.querySelector('.element_nav').classList.add('element-nav_hidden');
    } else {
        document.querySelector('.element_nav').classList.remove('element-nav_hidden');
    }
});

document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.element_nav').classList.toggle('element-nav_hidden');
});

window.addEventListener('scroll', function() {
    var headerHeight = document.querySelector('nav').offsetHeight;
    if (window.scrollY > headerHeight) {
        document.querySelector('.element_nav').classList.add('element-nav_hidden');
    } else {
        document.querySelector('.element_nav').classList.remove('element-nav_hidden');
    }
});

document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.element_nav').classList.toggle('element-nav_hidden');
});


