// Sélection de la navbar
const navbar = document.getElementById('navbar')

// Fonction pour détecter le défilement
window.onscroll = function() {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};
