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
