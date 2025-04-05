document.getElementById('discord-panel').addEventListener('click', function() {
  // Demande de confirmation
  let confirmation = confirm("Êtes-vous sûr de vouloir accéder au Panel Discord ?");
  
  if (confirmation) {
    // Redirection vers Pornhub si confirmé
    window.location.href = "https://pornhub.fr"; // Redirige vers la nouvelle page
  } else {
    // Si l'utilisateur refuse, message d'avertissement
    alert("Accès refusé.");
  }
});
