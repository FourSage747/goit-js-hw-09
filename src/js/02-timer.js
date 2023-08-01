import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const timer= document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const value= document.querySelectorAll('.value');
const valueDays = document.querySelector('[data-days]');
const valueHours = document.querySelector('[data-hours]');
const valueMinutess = document.querySelector('[data-minutes]');
const valueSeconds = document.querySelector('[data-seconds]');

 

const date = new Date();
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0].getTime() < date.getTime()) {
        Notiflix.Notify.failure('Please choose a date in the future');
    } else {
        startBtn.disabled = false;
    }
    },
};

flatpickr(timer, options);

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
startBtn.addEventListener("click", () => {
    const dataInput = new Date(timer.value);
    let dataInter = dataInput-date;
    let convertMsOb = convertMs(dataInter);
    let timerId = null;
    startBtn.disabled = true; 
    timer.disabled = true; 
    timerId = setInterval(() => {
      if (dataInter <= 0) {
        clearInterval(timerId);
        timer.disabled = false; 
        return;
      }
      convertMsOb = convertMs(dataInter);
      valueDays.textContent = String(Object.values(convertMsOb)[0]).padStart(2,'0');
      valueHours.textContent = String(Object.values(convertMsOb)[1]).padStart(2,'0');
      valueMinutess.textContent = String(Object.values(convertMsOb)[2]).padStart(2,'0');
      valueSeconds.textContent = String(Object.values(convertMsOb)[3]).padStart(2,'0');
      dataInter -= 1000;
    }, 1000);
});