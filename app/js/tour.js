// window.addEventListener('load', function () {

//  ДЛИТЕЛЬНОСТЬ ПОЛЁТА!
    const reservationTimeIcon = document.querySelector('.reservation-helicopter__time-icon');
    const reservationTimeList = document.querySelector('.reservation-helicopter__time-list');
    document.querySelector('.reservation-helicopter__time-btn').addEventListener('click', function() {
        reservationTimeIcon.classList.toggle('reservation-helicopter__time-icon--active');
        reservationTimeList.classList.toggle('reservation-helicopter__time-list--active');
    });
    document.querySelectorAll('.reservation-helicopter__time-item').forEach(item => {
        item.addEventListener('click', function () {
            let valueItem = item.textContent;
            document.querySelector('.reservation-helicopter__time-value').innerHTML = valueItem;
            document.querySelector('.reservation-helicopter__time-btn').value = valueItem;
            reservationTimeIcon.classList.toggle('reservation-helicopter__time-icon--active');
            reservationTimeList.classList.toggle('reservation-helicopter__time-list--active');
        });
    });

//  Количество человек
    document.querySelector('.reservation-helicopter__counter').addEventListener('click', function(e){
        let closest = e.target.closest('.reservation-helicopter__counter');
        let number = closest.querySelector('.reservation-helicopter__number');
        let numberValue = parseInt(number.innerHTML);
        if(e.target.dataset.action === 'plus') {
            number.innerHTML = numberValue + 1;
        }

        else if(e.target.dataset.action === 'minus') {
            if(numberValue >= 2) {
                number.innerHTML = numberValue - 1;
            }
        }
    });

// });  