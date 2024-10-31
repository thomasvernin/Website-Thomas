<script>
    document.addEventListener('DOMContentLoaded', function () {
        const aboutLink = document.querySelector('.about-link');
        const arrow = document.querySelector('.arrow');

        // Ajout des événements de survol pour faire tourner la flèche
        aboutLink.addEventListener('mouseenter', function () {
            arrow.classList.add('rotate');
        });

        aboutLink.addEventListener('mouseleave', function () {
            arrow.classList.remove('rotate');
        });
    });
</script>

