// Récupération de l'élément footer
var footer = document.querySelector('footer');

// Récupération de la hauteur totale de la page
var totalHeight = document.body.scrollHeight - window.innerHeight;

// Écouteur d'événement de défilement de la page
window.addEventListener('scroll', function() {
  // Calcul du pourcentage de défilement
  var scrollPercent = (window.pageYOffset / totalHeight) * 100;

  // Mise à jour de la couleur du footer en fonction du pourcentage de défilement
  footer.style.backgroundColor = 'hsl(0, 0%, ' + scrollPercent + '%)';
});