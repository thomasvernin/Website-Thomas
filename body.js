// Fonction pour animer les boules de manière aléatoire
function animateBall(ball, maxWidth, maxHeight) {
    const newLeft = Math.random() * maxWidth + 'px';
    const newTop = Math.random() * maxHeight + 'px';

    ball.style.left = newLeft;
    ball.style.top = newTop;
}

const balls = document.querySelectorAll('.background-blur-ball');
const maxWidth = window.innerWidth - 100; // Ajustez pour éviter les débordements
const maxHeight = window.innerHeight - 100;

balls.forEach(ball => {
    setInterval(() => {
        animateBall(ball, maxWidth, maxHeight);
    }, 5000); // Change de position toutes les 5 secondes
});
