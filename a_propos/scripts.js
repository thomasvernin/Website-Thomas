document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');  // Boutons des filtres principaux
    const subFilterContainer = document.querySelector('.sub-filter-container');  // Conteneur des sous-filtres
    const subFilterButtons = document.querySelectorAll('.sub-filter-btn');  // Boutons des sous-filtres
    const cards = document.querySelectorAll('.card');  // Cartes de certification

    let activeFilter = 'all'; // Filtre actif par défaut
    let activeSubFilter = null; // Aucun sous-filtre actif par défaut

    // Fonction pour appliquer un filtre
    function applyFilter(filter) {
        // Appliquer le filtre aux cartes
        cards.forEach(card => {
            const categories = card.getAttribute('data-category').split(' ');

            if (filter === 'all' || categories.includes(filter)) {
                card.style.display = 'block';  // Afficher la carte si elle correspond au filtre
            } else {
                card.style.display = 'none';  // Masquer la carte sinon
            }
        });

        // Réinitialiser l'état des filtres principaux
        filterButtons.forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
        if (activeBtn) activeBtn.classList.add('active');  // Ajouter la classe active au filtre sélectionné

        activeFilter = filter;  // Mettre à jour le filtre actif

        // Si le filtre est "Data", afficher les sous-filtres
        if (filter === 'data') {
            subFilterContainer.style.display = 'block';
        } else {
            subFilterContainer.style.display = 'none';
        }
    }

    // Ajouter des événements de clic pour chaque bouton de filtre principal
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Appliquer le filtre principal
            applyFilter(filter);

            // Si on clique sur un autre filtre que "Data", cacher les sous-filtres
            if (filter !== 'data') {
                subFilterContainer.style.display = 'none';  // Cache les sous-filtres
            }
        });
    });

    // Fonction pour appliquer un sous-filtre
    function applySubFilter(subFilter) {
        activeSubFilter = subFilter;  // Mettre à jour le sous-filtre actif

        // Réinitialiser l'état des sous-filtres
        subFilterButtons.forEach(btn => btn.classList.remove('active'));

        // Ajouter la classe active au bouton du sous-filtre sélectionné
        const activeBtn = document.querySelector(`.sub-filter-btn[data-filter="${subFilter}"]`);
        if (activeBtn) activeBtn.classList.add('active');

        // Appliquer ou masquer les cartes en fonction du sous-filtre
        cards.forEach(card => {
            const categories = card.getAttribute('data-category').split(' ');

            if (activeFilter === 'data' && categories.includes(subFilter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Ajouter des événements de clic pour chaque sous-filtre
    subFilterButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();  // Empêche la propagation pour ne pas fermer les sous-filtres

            const subFilter = button.getAttribute('data-filter');

            // Appliquer le sous-filtre sélectionné
            applySubFilter(subFilter);
        });
    });

    // Marquer le filtre "all" comme actif par défaut
    applyFilter('all');
    document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
});

// Fonction pour ouvrir un popup
function openPopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = 'block';
    document.getElementById('popupOverlay').style.display = 'block';
}

// Fonction pour fermer un popup
function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = 'none';
    document.getElementById('popupOverlay').style.display = 'none';
}

// Fermer les popups lorsqu'on clique en dehors
document.getElementById('popupOverlay').addEventListener('click', function() {
    var popups = document.querySelectorAll('.popup');
    popups.forEach(function(popup) {
        closePopup(popup.id);
    });
});





































































































































