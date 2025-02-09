const startDate = new Date(2023, 4, 9); // 8 de Mayo de 2023
const today = new Date();
const timeDifference = today - startDate;
const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
      
document.getElementById('days-count').textContent = daysDifference;
        
function openSong() {
    // Cambia esta URL por la de la canción que quieras
    const songLink = "https://open.spotify.com/playlist/6BfcPpvQ6u8Jg3uOGNUO7B?si=d289aeec64da4479&pt=9f3993a2f5c93691eaff828258eacf9b";  // Este es solo un ejemplo (¡pero puedes poner cualquier otra canción!)
    window.open(songLink, '_blank');  // Abre el enlace en una nueva ventana o pestaña
    }


const messages = [
    "Tu y yo 🌹",
    "Yo y tu ☀️",
    "Nosotras en cualquier pareja de gatitos que exista 💐"
    ];
    
function showMessage(index) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = messages[index];
    messageElement.classList.remove('hidden');
}