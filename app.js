let myVar;
let timer = document.getElementById("userInput");
let timerText = document.getElementById("timer");
let countDownSeconds;
let minutes;
let seconds;

setTimer = () => {
  myVar = setInterval(startTimer, 1000);
  timerText.classList.remove("finished");
  timerText.classList.add("active");
  timerText.innerHTML = `${timer.value} seconds left`;
  countDownSeconds = timer.value;
};

startTimer = () => {
  console.log(countDownSeconds);

  minutes = Math.floor(countDownSeconds / 60);
  seconds = countDownSeconds % 60;
  console.log("minutes: ", minutes);
  console.log("seconds: ", seconds);
  countDownSeconds--;

  if (countDownSeconds > 60) {
    if (seconds < 10) {
      timerText.innerHTML = `${minutes}:0${seconds}`;
    }
    if (seconds >= 10) {
      timerText.innerHTML = `${minutes}:${seconds}`;
    }
  }
  if (countDownSeconds < 60) {
    timerText.innerHTML = `${countDownSeconds} seconds left`;
  }
  if (countDownSeconds == 0) {
    stopTimer();
    timerText.innerHTML = `${timer.value}`;
  }
};

stopTimer = () => {
  console.log(countDownSeconds);
  clearInterval(myVar);
  timerText.classList.remove("active");
  timerText.classList.add("finished");
};

resumeTimer = () => {
  timer.value = countDownSeconds;
  setTimer();
};
