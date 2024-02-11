const pricingCards = document.querySelectorAll('.pricing__card');

pricingCards.forEach((card) => {
    card.addEventListener('click', (event) => {
        pricingCards.forEach((card) => {
            card.classList.remove('pricing__card--active');
        });
        card.classList.add('pricing__card--active');
    });
});