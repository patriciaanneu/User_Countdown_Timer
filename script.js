let countdown;
let countdownDisplay = document.getElementById('timerDisplay');
let timeInput=document.getElementById('timeInput');
let startButton = document.getElementById('startButton');
let resetButton = document.getElementById('resetButton');

startButton.addEventListener('click', startCountdown);
resetButton.addEventListener('click', resetTimer);

function startCountdown() {
    let time = Number(timeInput.value);
    if (isNaN(time) || time <= 0) {
        alert('Please enter a valid number of seconds.');
        return;

}
clearInterval(countdown);
    updateDisplay(time);

    countdown = setInterval(() => {
        time--;
        updateDisplay(time);

        if (time <= 0) {
            clearInterval(countdown);
            alert("Time's up!");
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(countdown);
    countdownDisplay.textContent = '00:00:00';
    timeInput.value = '';
}

function updateDisplay(time) {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;

    countdownDisplay.textContent = 
    `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}