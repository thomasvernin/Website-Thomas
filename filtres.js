// JavaScript pour filtrer les projets
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const carouselItems = document.querySelectorAll('.carousel-item-link');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            carouselItems.forEach(item => {
                if (filter === 'all') {
                    item.style.display = 'block';
                } else if (item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});