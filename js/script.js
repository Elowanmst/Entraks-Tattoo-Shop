const menuButton = document.querySelector('.menu-icon');
const navigation = document.querySelector('.element_nav');

if (menuButton && navigation) {
    if (window.matchMedia('(max-width: 700px)').matches) {
        navigation.classList.add('element-nav_hidden');
    }
    menuButton.setAttribute('aria-expanded', 'false');

    menuButton.addEventListener('click', () => {
        const isOpen = !navigation.classList.toggle('element-nav_hidden');
        menuButton.setAttribute('aria-expanded', String(isOpen));
    });

    navigation.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navigation.classList.add('element-nav_hidden');
            menuButton.setAttribute('aria-expanded', 'false');
        });
    });
}
