// Initialisation de l'effet de feu d'artifice
const fireworks = new Fireworks();
fireworks.start();

// Fonction qui crée une fenêtre avec le texte "Ayden je t'aime"
function createVirusWindow() {
  const win = document.createElement('div');
  win.classList.add('virus-window');
  win.style.top = `${Math.random() * window.innerHeight}px`;
  win.style.left = `${Math.random() * window.innerWidth}px`;
  win.innerText = 'Ayden je t\'aime';
  document.body.appendChild(win);

  // Animation de fermeture des fenêtres
  setTimeout(() => {
    win.remove();
  }, 5000);
}

// Ajouter l'effet de clic sur le rond en mouvement
document.getElementById('love-bubble').addEventListener('click', () => {
  // Afficher les fenêtres pop-up
  for (let i = 0; i < 5; i++) {
    createVirusWindow();
  }

  // Ajouter un message de "Ayden je t'aime"
  const message = document.getElementById('love-message');
  message.style.opacity = 1;
  setTimeout(() => {
    message.style.opacity = 0;
  }, 2000);
});
