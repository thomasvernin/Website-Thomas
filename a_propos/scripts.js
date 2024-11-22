document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');  // Boutons des filtres principaux
    const subFilterContainerData = document.querySelector('.sub-filter-container');  // Conteneur des sous-filtres Data
    const subFilterContainerRh = document.querySelector('.sub-filter-container-rh');  // Conteneur des sous-filtres RH
    const subFilterButtons = document.querySelectorAll('.sub-filter-btn');  // Boutons des sous-filtres Data
    const subFilterButtonsRh = document.querySelectorAll('.sub-filter-btn.rh-specialist');  // Boutons des sous-filtres RH
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

        // Afficher les sous-filtres en fonction du filtre actif
        if (filter === 'data') {
            subFilterContainerData.style.display = 'block';
            subFilterContainerRh.style.display = 'none';  // Masquer sous-filtres RH
        } else if (filter === 'rh') {
            subFilterContainerRh.style.display = 'block';
            subFilterContainerData.style.display = 'none';  // Masquer sous-filtres Data
        } else {
            subFilterContainerData.style.display = 'none';
            subFilterContainerRh.style.display = 'none';  // Masquer sous-filtres
        }
    }

    // Ajouter des événements de clic pour chaque bouton de filtre principal
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Appliquer le filtre principal
            applyFilter(filter);

            // Si on clique sur un autre filtre que "Data" ou "Rh", cacher les sous-filtres
            if (filter !== 'data' && filter !== 'rh') {
                subFilterContainerData.style.display = 'none';  // Cache les sous-filtres Data
                subFilterContainerRh.style.display = 'none';  // Cache les sous-filtres RH
            }
        });
    });

    // Fonction pour appliquer un sous-filtre
    function applySubFilter(subFilter) {
        activeSubFilter = subFilter;  // Mettre à jour le sous-filtre actif

        // Réinitialiser l'état des sous-filtres
        subFilterButtons.forEach(btn => btn.classList.remove('active'));
        subFilterButtonsRh.forEach(btn => btn.classList.remove('active'));

        // Ajouter la classe active au bouton du sous-filtre sélectionné
        const activeBtn = document.querySelector(`.sub-filter-btn[data-filter="${subFilter}"]`);
        if (activeBtn) activeBtn.classList.add('active');

        // Appliquer ou masquer les cartes en fonction du sous-filtre sélectionné
        cards.forEach(card => {
            const categories = card.getAttribute('data-category').split(' ');

            if (activeFilter === 'data' && categories.includes(subFilter)) {
                card.style.display = 'block';
            } else if (activeFilter === 'rh' && categories.includes(subFilter)) {
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

    // Ajouter des événements de clic pour chaque sous-filtre RH
    subFilterButtonsRh.forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();  // Empêche la propagation pour ne pas fermer les sous-filtres

            const subFilter = button.getAttribute('data-filter');
            // Appliquer le sous-filtre RH sélectionné
            applySubFilter(subFilter);
        });
    });

    // Marquer le filtre "all" comme actif par défaut
    applyFilter('all');
    document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
});




















































































































































































































































































































































































































