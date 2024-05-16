
const validation = document.querySelector(".reserva-form").addEventListener('submit', function(event) {

    const date = document.querySelector("#fecha").value;
    const hour = document.querySelector("#hora").value;

    const today = new Date();
    let tomorrow = new Date();

    const open_hour = '18:00';
    const close_hour = '23:00';

        tomorrow.setDate(today.getDate() + 1); 

    const year = tomorrow.getFullYear();
    const month = ('0' + (tomorrow.getMonth() + 1)).slice(-2); 
    const day = ('0' + tomorrow.getDate()).slice(-2); 

        const validation_date = `${year}-${month}-${day}`;
    

        if (date < validation_date) {
            alert('La fecha debe ser a partir de mañana.');
            event.preventDefault();
            return;
        }


        if (hour < open_hour || hour > close_hour) {
            alert('La hora debe estar entre las 6 pm y las 11 pm.');
            event.preventDefault();
            return;
        }

    });