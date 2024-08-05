document.addEventListener('DOMContentLoaded', () => {
    // Form validation
    const form = document.getElementById('reservationForm');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const nom = document.getElementById('nom').value;
            const email = document.getElementById('email').value;
            const telephone = document.getElementById('telephone').value;
            const arrivee = document.getElementById('arrivee').value;
            const depart = document.getElementById('depart').value;

            if (!nom || !email || !telephone || !arrivee || !depart) {
                alert('Veuillez remplir tous les champs.');
            } else {
                alert('Réservation réussie!');
                form.submit();
            }
        });
    }

    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            lightbox.style.display = 'block';
            lightboxImg.src = item.src;
        });
    });

    document.querySelector('.close').addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});