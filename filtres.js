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