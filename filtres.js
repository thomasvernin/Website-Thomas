document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const carouselItems = document.querySelectorAll('.carousel-item-link');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            // Get filter category from data attribute
            const filter = button.getAttribute('data-filter');

            // Show/Hide carousel items
            carouselItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Trigger default filter
    document.querySelector('.filter-btn[data-filter="all"]').click();
});









// Sélectionner tous les boutons de filtre et les éléments du carrousel
const boutonsFiltre = document.querySelectorAll('.filter-btn');
const itemsCarousel = document.querySelectorAll('.carousel-item-link');

// Fonction pour gérer l'effet de flou lors du survol
function appliquerFlou() {
    const filtre = this.getAttribute('data-filter');
    itemsCarousel.forEach(item => {
        const categories = item.getAttribute('data-category').split(' ');
        if (!categories.includes(filtre) && filtre !== 'all') {
            item.classList.add('flou');
        } else {
            item.classList.remove('flou');
        }
    });
}

// Fonction pour retirer l'effet de flou lorsque le bouton de filtre n'est plus survolé
function retirerFlou() {
    itemsCarousel.forEach(item => {
        item.classList.remove('flou');
    });
}

// Ajouter des écouteurs d'événements pour les boutons de filtre
boutonsFiltre.forEach(bouton => {
    bouton.addEventListener('mouseover', appliquerFlou);
    bouton.addEventListener('mouseout', retirerFlou);
});

