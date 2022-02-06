let stopButton = document.getElementById('stopButton');
let readyButton = document.getElementById('readyButton');
let goButton = document.getElementById('goButton');
let stopLight = document.getElementById('stopLight');
let readyLight = document.getElementById('readyLight');
let goLight = document.getElementById('goLight');

function stop() {
    stopButton.style.backgroundColor = "#cf1124";
    stopLight.style.backgroundColor = "#cf1124";
    readyLight.style.backgroundColor = "#4b5069";
    goLight.style.backgroundColor = "#4b5069";
    readyButton.style.backgroundColor = "#4b5069";
    goButton.style.backgroundColor = "#4b5069";
}

function ready() {
    readyButton.style.backgroundColor = "#f7c948";
    readyLight.style.backgroundColor = "#f7c948";
    stopLight.style.backgroundColor = "#4b5069";
    goLight.style.backgroundColor = "#4b5069";
    stopButton.style.backgroundColor = "#4b5069";
    goButton.style.backgroundColor = "#4b5069";
}

function go() {
    goButton.style.backgroundColor = "#199473";
    goLight.style.backgroundColor = "#199473";
    stopLight.style.backgroundColor = "#4b5069";
    readyLight.style.backgroundColor = "#4b5069";
    stopButton.style.backgroundColor = "#4b5069";
    readyButton.style.backgroundColor = "#4b5069";
}