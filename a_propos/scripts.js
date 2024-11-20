document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');  // Boutons des filtres principaux
    const subFilterContainer = document.querySelector('.sub-filter-container');  // Conteneur des sous-filtres
    const subFilterButtons = document.querySelectorAll('.sub-filter-btn');  // Boutons des sous-filtres
    const cards = document.querySelectorAll('.card');  // Cartes de certification

    let activeFilter = 'all'; // Filtre actif par défaut

    // Fonction pour appliquer le filtre
    function applyFilter(filter) {
        // Appliquer le filtre aux cartes
        cards.forEach(card => {
            const categories = card.getAttribute('data-category').split(' ');

            if (filter === 'all' || categories.includes(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        // Réinitialiser l'état des filtres principaux
        filterButtons.forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
        if (activeBtn) activeBtn.classList.add('active');  // Ajouter la classe active au filtre sélectionné

        // Si le filtre est "Data", afficher les sous-filtres
        if (filter === 'data') {
            subFilterContainer.style.display = 'block';
        } else {
            subFilterContainer.style.display = 'none';
        }

        activeFilter = filter; // Mettre à jour le filtre actif
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

    // Lorsqu'on clique sur un sous-filtre (par exemple "Data Scientist")
    subFilterButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();  // Empêche la propagation pour ne pas fermer les sous-filtres

            const filter = button.getAttribute('data-filter');

            // Applique "Data" pour garder le sous-filtre visible
            applyFilter('data');

            // Appliquer le sous-filtre (par exemple, Data Scientist)
            button.classList.add('active');  // Ajouter la classe active au bouton du sous-filtre
        });
    });

    // Marquer le filtre "all" comme actif par défaut
    applyFilter('all');
    document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
});

// Fonction pour ouvrir un popup
function openPopup(popupId) {
    // Trouver le popup avec l'ID donné
    var popup = document.getElementById(popupId);
    
    // Afficher le popup
    popup.style.display = 'block';
    
    // Afficher l'overlay (fond sombre)
    document.getElementById('popupOverlay').style.display = 'block';
}

// Fonction pour fermer un popup
function closePopup(popupId) {
    // Trouver le popup avec l'ID donné
    var popup = document.getElementById(popupId);
    
    // Cacher le popup
    popup.style.display = 'none';
    
    // Cacher l'overlay (fond sombre)
    document.getElementById('popupOverlay').style.display = 'none';
}

// Ajout d'un événement pour fermer le popup quand l'utilisateur clique en dehors de la fenêtre
document.getElementById('popupOverlay').addEventListener('click', function() {
    var popups = document.querySelectorAll('.popup');
    popups.forEach(function(popup) {
        closePopup(popup.id);
    });
});

































































































































