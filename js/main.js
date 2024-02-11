// MOBILE MENU

var burgerMenu = document.querySelector('.burger-menu');

burgerMenu.addEventListener('click', (event) => {
    burgerMenu.classList.toggle('burger-menu--active');
    document.querySelector('.mobile-menu').classList.toggle('display-none');
    document.body.classList.toggle('overflow-hidden');
    document.querySelector('.header__logo').classList.toggle('hidden-logo');
});

document.querySelectorAll('.mobile-menu__wrapper > nav > ul > li > a').forEach(element => {
    element.addEventListener('click', () => {
        burgerMenu.classList.toggle('burger-menu--active');
        document.querySelector('.mobile-menu').classList.toggle('display-none');
        document.body.classList.toggle('overflow-hidden');
        document.querySelector('.header__logo').classList.toggle('hidden-logo');
    });
});

// PRICING CARDS

var pricingCards = document.querySelectorAll('.pricing__card');

pricingCards.forEach((card) => {
    card.addEventListener('click', () => {
        pricingCards.forEach((card) => {
            card.classList.remove('pricing__card--active');
        });
        card.classList.add('pricing__card--active');
    });
});