// script.js
let timer;
let elapsedTime = 0;
let isRunning = false;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

// Start the stopwatch
startButton.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTime, 1000);
    }
});

// Stop the stopwatch
stopButton.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
});

// Reset the stopwatch
resetButton.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    displayTime(0);
});

// Update the time display
function updateTime() {
    elapsedTime++;
    displayTime(elapsedTime);
}

function displayTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    display.textContent = `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}

function pad(unit) {
    return unit < 10 ? '0' + unit : unit;
}
