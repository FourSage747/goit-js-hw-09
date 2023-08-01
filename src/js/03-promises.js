import Notiflix from 'notiflix';
const form = document.querySelector(".form");

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random();
      if (shouldResolve > 0.3) {
        res(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        rej(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    },delay);
  });
}

form.addEventListener('submit', submitPromise);

function submitPromise (event) {
  event.preventDefault();
  const delay = event.currentTarget.delay;
  const step = event.currentTarget.step;
  const amount = event.currentTarget.amount;

  let timerId;
  let amountInter = amount.value;
  let positionP = 1;
  let delayP = Number(delay.value);

  timerId = setInterval(() => {
    createPromise(positionP, delayP)

    .then((value) => {
      Notiflix.Notify.success(value,{timeout: 4000,},);
    })
    .catch((value) => {
      Notiflix.Notify.failure(value,{timeout: 4000,},);
    });

    positionP += 1;
    amountInter -= 1;
    delayP += Number(step.value);

    if (!amountInter) {
      clearInterval(timerId);
    }
  }, 1000);
}