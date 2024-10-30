const track = document.querySelector('.carousel-track');
const items = Array.from(document.querySelectorAll('.carousel-item'));
const containerWidth = document.querySelector('.carousel-container').offsetWidth;
let itemWidth = items[0].offsetWidth + 20; // Largeur de chaque icône avec marge
let visibleItemsCount = Math.ceil(containerWidth / itemWidth);

// Duplique les éléments pour remplir l’espace visible et assurer un défilement infini
for (let i = 0; i < visibleItemsCount; i++) {
  items.forEach(item => {
    const clone = item.cloneNode(true);
    track.appendChild(clone);
  });
}

// Ajuste la largeur de la piste pour éviter des espaces
track.style.width = `${items.length * itemWidth * 2}px`;

let currentPosition = 0;

function moveCarousel() {
  currentPosition += 0.5; // Ajustez la vitesse pour un meilleur effet

  // Réinitialise la position lorsque la moitié du carrousel est passée
  if (currentPosition >= items.length * itemWidth) {
    currentPosition = 0;
  }

  // Déplace le carrousel pour un défilement fluide
  track.style.transform = `translateX(-${currentPosition}px)`;
}

// Défilement automatique toutes les 16ms pour un effet fluide à 60fps
setInterval(moveCarousel, 16);

