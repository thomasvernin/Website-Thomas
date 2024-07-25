document.addEventListener("DOMContentLoaded", function() {
  // Portfolio scrolling
  const container = document.querySelector('.portfolio-container');
  const items = document.querySelectorAll('.portfolio-box');
  const originalContainerWidth = container.scrollWidth / 2; // La largeur réelle sans la duplication

  // Dupliquer le contenu pour un défilement infini
  container.innerHTML += container.innerHTML;

  let start = 0;
  const baseSpeed = 0.5; // Vitesse de défilement de base
  let speed = baseSpeed; // Vitesse actuelle
  let direction = 1; // 1 pour défilement à droite, -1 pour gauche

  // Appliquer des styles CSS pour une transition plus douce
  container.style.transition = 'transform 0.1s linear';

  function scrollPortfolio() {
      start -= speed * direction;
      if (start <= -originalContainerWidth) {
          start = 0;
      } else if (start >= 0) {
          start = -originalContainerWidth;
      }
      container.style.transform = `translateX(${start}px)`;
      requestAnimationFrame(scrollPortfolio);
  }

  // Vérifie que toutes les images sont chargées avant de commencer l'animation
  const images = container.querySelectorAll('img');
  let loadedImages = 0;

  function imageLoaded() {
      loadedImages++;
      if (loadedImages === images.length) {
          requestAnimationFrame(scrollPortfolio);
      }
  }

  images.forEach(image => {
      if (image.complete) {
          imageLoaded();
      } else {
          image.addEventListener('load', imageLoaded);
          image.addEventListener('error', imageLoaded); // Comptabiliser même les erreurs de chargement
      }
  });

  // Gérer la visibilité de la page
  document.addEventListener('visibilitychange', function() {
      if (document.visibilityState === 'visible' && loadedImages === images.length) {
          requestAnimationFrame(scrollPortfolio);
      }
  });

  // Ajouter une variation douce de la vitesse de défilement
  function adjustSpeed() {
      speed = baseSpeed + Math.sin(Date.now() / 1000) * 0.2;
      requestAnimationFrame(adjustSpeed);
  }

  adjustSpeed();

  // Ajouter un effet de mise à l'échelle et de flou sur les éléments au survol
  items.forEach(item => {
      item.style.transition = 'transform 0.3s ease-in-out, filter 0.3s ease-in-out';
      item.addEventListener('mouseover', () => {
          item.style.transform = 'scale(1.1)';
          item.style.filter = 'blur(2px)';
      });
      item.addEventListener('mouseout', () => {
          item.style.transform = 'scale(1)';
          item.style.filter = 'blur(0)';
      });
  });
});












  // Autres animations
  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };

  let sections = document.querySelectorAll('section');
  let navlinks = document.querySelectorAll('header nav a');

  window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navlinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
      }
    });

    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  };

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
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
  });

  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
  ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

  // Dark mode functionality
  function applyDarkMode() {
    document.body.classList.add('dark-mode');
    darkModeIcon.classList.add('bx-sun');
  }

  function removeDarkMode() {
    document.body.classList.remove('dark-mode');
    darkModeIcon.classList.remove('bx-sun');
  }

  let darkModeIcon = document.querySelector('#darkMode-icon');

  if (localStorage.getItem('dark-mode') === 'enabled') {
    applyDarkMode();
  } else {
    removeDarkMode();
  }

  darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
  };

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
});











































