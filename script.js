document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reservationForm');

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
});