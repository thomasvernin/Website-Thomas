/*=====menu icon navbar======*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


/*=====scroll section active link======*/
let sections =  document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });

    };
  });


/*=====sticky navbar======*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


/*=====remove menu icon navbar when click scroll======*/

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

/*=====swiper======*/
var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 50,
      loop: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 20000, 
        disableOnInteraction: false,
      },
  });
  


/*=====scroll reveal======*/
ScrollReveal({
  //reset:true,
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', {
  origin: 'top'
});

ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', {
  origin: 'bottom'
});

ScrollReveal().reveal('.home-content h1, .about-img img', {
  origin: 'left'
});

ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', {
  origin: 'right'
});



// dark-mode.js

// Fonction pour appliquer le mode sombre
function applyDarkMode() {
  document.body.classList.add('dark-mode');
  darkModeIcon.classList.add('bx-sun');
}

// Fonction pour retirer le mode sombre
function removeDarkMode() {
  document.body.classList.remove('dark-mode');
  darkModeIcon.classList.remove('bx-sun');
}

let darkModeIcon = document.querySelector('#darkMode-icon');

// Vérifier le mode stocké dans le localStorage au chargement de la page
if (localStorage.getItem('dark-mode') === 'enabled') {
  applyDarkMode();
} else {
  // Assurez-vous que le mode clair est appliqué par défaut
  removeDarkMode();
}

// Ajouter un événement au clic sur l'icône de mode sombre
darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
  // Enregistrer le mode dans le localStorage
  if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('dark-mode', 'enabled');
  } else {
      localStorage.setItem('dark-mode', 'disabled');
  }
};




document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission du formulaire pour le test
    
    var email = document.getElementById('email').value;
    var responseMessage = document.getElementById('response-message');
    
    if (validateEmail(email)) {
        // Simuler une requête d'inscription (remplacer par une vraie requête API ou autre logique)
        responseMessage.textContent = 'Merci pour votre inscription, nous vous enverrons les dernières tendances tech !';
        responseMessage.style.color = '#28a745'; // Couleur du message de succès
        document.getElementById('newsletter-form').reset(); // Réinitialise le formulaire
    } else {
        responseMessage.textContent = 'Veuillez entrer une adresse email valide.';
        responseMessage.style.color = '#dc3545'; // Couleur du message d'erreur
    }
});

// Fonction pour valider l'adresse email
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}























































