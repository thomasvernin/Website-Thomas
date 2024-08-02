document.addEventListener('DOMContentLoaded', (event) => {
    var popup = document.getElementById('legal-popup');
    var openBtn = document.getElementById('open-legal');
    var closeBtn = document.getElementById('close-popup');

    openBtn.onclick = function() {
        popup.style.display = 'block';
    }

    closeBtn.onclick = function() {
        popup.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    }
});



// Obtenir les éléments de la modale
var modal = document.getElementById("image-modal");
var modalImg = document.getElementById("modal-image");
var captionText = document.getElementById("caption");

// Obtenir l'image de la rubrique Responsive
var img = document.querySelector(".image-container img");

// Quand l'utilisateur clique sur l'image, ouvrir la modale
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src; // Définir la source de l'image modale
    captionText.innerHTML = this.alt; // Définir le texte de la légende
}

// Quand l'utilisateur clique sur (x), fermer la modale
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}



document.addEventListener('DOMContentLoaded', () => {
    const bubble = document.getElementById('background-bubble');

    // Fonction pour générer un nombre aléatoire dans une plage
    function getRandomValue(min, max) {
        return Math.random() * (max - min) + min;
    }

    // Fonction pour animer la boule floue
    function animateBubble() {
        setInterval(() => {
            // Définir les valeurs de déplacement aléatoires
            const moveX = getRandomValue(-100, 100); // Déplacement horizontal
            const moveY = getRandomValue(-100, 100); // Déplacement vertical
            const scale = getRandomValue(0.8, 1.2); // Échelle de la boule

            // Appliquer les transformations CSS
            bubble.style.transform = `translate(-50%, -50%) translate(${moveX}px, ${moveY}px) scale(${scale})`;
        }, 3000); // Changer les valeurs toutes les 3 secondes
    }

    // Appeler la fonction d'animation
    animateBubble();
});




