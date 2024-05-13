let reservations = [];

function submitReservation() {
  const dateInput = document.getElementById('date');
  const timeInput = document.getElementById('time');
  const date = dateInput.value;
  const time = timeInput.value;

  const reservation = {
    date: date,
    time: time
  };

  reservations.push(reservation);
  renderReservations();
}

function renderReservations() {
  const reservationList = document.getElementById('reservation-list');
  reservationList.innerHTML = '';

  reservations.forEach(reservation => {
    const listItem = document.createElement('li');
    listItem.textContent = `Datum: ${reservation.date}, Čas: ${reservation.time}`;
    reservationList.appendChild(listItem);
  });
}