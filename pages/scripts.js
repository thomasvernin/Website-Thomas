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






