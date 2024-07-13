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


document.getElementById('project-link').addEventListener('click', function(event) {
  event.preventDefault(); // Empêche le lien de suivre immédiatement
  
  // Affiche l'icône de chargement
  document.getElementById('loading-icon').style.display = 'inline-block';
  
  // Attends un court délai avant de rediriger
  setTimeout(() => {
      window.location.href = this.href;
  }, 1000); // Délai de 1 seconde (1000 ms)
});