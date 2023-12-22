const display = document.getElementById('display');
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if(!isRunning){
        //startTime is the time when the start button was clicked
        //Date.now() is the current time in milliseconds since 1970
        //elapsedTime is the time since the start button was clicked
        startTime = Date.now() - elapsedTime;
        //timer is a setInterval function that calls update every 10 milliseconds
        timer = setInterval(update, 10);
        //isRunning is a boolean that is true when the timer is running
        isRunning = true;
    }
}

function stop() {
    if(isRunning){
        //clearInterval stops the timer
        clearInterval(timer);
        //isRunning is a boolean that is false when the timer is not running
        isRunning = false;
    }
}

function reset() {
if(isRunning){
    clearInterval(timer);
    isRunning = false;
}
    //elapsedTime is the time since the start button was clicked
    elapsedTime = 0;
    display.textContent = '00:00:00:00';
}

function update() {
    //currentTime is the current time in milliseconds since 1970
    const currentTime = Date.now();
    //elapsedTime is the time since the start button was clicked
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / 3600000); //3600000 milliseconds in an hour or 60 * 60 * 1000 is the same
    let minutes = Math.floor(elapsedTime / 60000) % 60; //60000 milliseconds in a minute or 60 * 1000 is the same
    let seconds = Math.floor(elapsedTime / 1000) % 60; //1000 milliseconds in a second
    let milliseconds = Math.floor(elapsedTime % 1000 / 10); //we want the milliseconds to be 2 digits so we divide by 10

    //padStart is a string function that adds a 0 to the beginning of the string if it is less than 2 characters
    //slice is a string function that returns a portion of the string

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
    milliseconds = milliseconds.toString().padStart(2, '0');

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
