import { createClient } from '@supabase/supabase-js';

// Initialize Supabase with environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Code d'admin
const ADMIN_CODE = '123NKMloveLagertha';

// Gestion du formulaire d'inscription
document.getElementById('signup-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          firstname,
          lastname
        }
      }
    });

    if (error) throw error;
    
    alert('Inscription réussie !');
    document.getElementById('signup-form').reset();
  } catch (error) {
    alert('Erreur lors de l\'inscription : ' + error.message);
  }
});

// Gestion du Panel Discord
document.getElementById('discord-panel').addEventListener('click', async function() {
  const modal = document.getElementById('login-modal');
  modal.style.display = 'block';
});

// Gestion de la connexion
document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) throw error;
    
    document.getElementById('login-modal').style.display = 'none';
    window.location.href = "https://discord.gg/votre-serveur";
  } catch (error) {
    alert('Erreur de connexion : ' + error.message);
  }
});

// Gestion du Panel Admin
document.getElementById('admin-panel').addEventListener('click', () => {
  const code = prompt('Entrez le code administrateur :');
  if (code === ADMIN_CODE) {
    localStorage.setItem('isAdmin', 'true');
    alert('Accès administrateur accordé !');
    // Ici vous pouvez ajouter la logique pour afficher le panneau d'administration
  } else {
    alert('Code incorrect !');
  }
});
<script>
// SPAM "ayden je t'aime"
function spawnLoveText() {
  const text = document.createElement('div');
  text.textContent = "ayden je t'aime";
  text.style.position = 'fixed';
  text.style.left = Math.random() * 100 + 'vw';
  text.style.top = Math.random() * 100 + 'vh';
  text.style.fontSize = Math.random() * 20 + 10 + 'px';
  text.style.color = '#ff69b4';
  text.style.fontWeight = 'bold';
  text.style.fontFamily = 'monospace';
  text.style.opacity = Math.random();
  text.style.zIndex = 999;
  text.style.pointerEvents = 'none';
  document.body.appendChild(text);

  setTimeout(() => {
    text.remove();
  }, 4000);
}

// Feu d'artifice (simple avec des cercles colorés qui explosent)
function launchFireworks() {
  for (let i = 0; i < 30; i++) {
    const firework = document.createElement('div');
    firework.style.position = 'fixed';
    firework.style.left = Math.random() * 100 + 'vw';
    firework.style.top = Math.random() * 100 + 'vh';
    firework.style.width = '10px';
    firework.style.height = '10px';
    firework.style.borderRadius = '50%';
    firework.style.background = `hsl(${Math.random() * 360}, 100%, 60%)`;
    firework.style.zIndex = 9999;
    firework.style.animation = 'explode 1s ease-out forwards';
    document.body.appendChild(firework);

    setTimeout(() => {
      firework.remove();
    }, 1000);
  }
}

// Animation CSS pour les feux d'artifice
const style = document.createElement('style');
style.innerHTML = `
@keyframes explode {
  0% { transform: scale(0.5); opacity: 1; }
  100% { transform: scale(3); opacity: 0; }
}`;
document.head.appendChild(style);

// Gérer le clic sur le love-bubble
document.getElementById('love-bubble').addEventListener('click', () => {
  const interval = setInterval(spawnLoveText, 50); // spam toutes les 50ms
  setTimeout(() => {
    clearInterval(interval);
    launchFireworks(); // boom 💥
  }, 5000); // après 5s, stop spam et feu d’artifice
});
</script>
