document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.card');

    // Fonction pour appliquer le filtre
    function applyFilter(filter) {
        cards.forEach(card => {
            // Récupérer les catégories de la carte et les convertir en tableau
            const categories = card.getAttribute('data-category').split(' ');

            // Vérifier si le filtre est 'all' ou si les catégories incluent le filtre
            if (filter === 'all' || categories.includes(filter)) {
                card.style.display = 'block'; // Affiche la carte si elle correspond au filtre
            } else {
                card.style.display = 'none'; // Cache la carte sinon
            }
        });
    }

    // Ajouter des événements de clic pour chaque bouton de filtre
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            applyFilter(filter);
            // Retirer la classe 'active' de tous les boutons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Ajouter la classe 'active' au bouton actuellement sélectionné
            button.classList.add('active');
        });
    });

    // Activer le filtre "Tous" par défaut
    const defaultFilter = 'all';
    applyFilter(defaultFilter);
    // Marquer le bouton "Tous" comme actif par défaut
    document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');

});
























