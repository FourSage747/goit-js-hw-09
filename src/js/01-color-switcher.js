const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');

start.addEventListener('click', startChangingColor);
stop.addEventListener('click', stopChangingColor);
let intervalId;
function startChangingColor() {
    clearInterval(intervalId);
    intervalId = setInterval(backgrounColor, 1000);
    start.disabled = true;
    stop.disabled = false;
}
function stopChangingColor() {
    clearInterval(intervalId);
    stop.disabled = true;
    start.disabled = false;
}
function backgrounColor () {
    document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}