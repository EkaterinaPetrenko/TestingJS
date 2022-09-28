const trafficLightE1 = document.querySelector('#trafficLight1');
const trafficLightE2 = document.querySelector('#trafficLight2');
const trafficLightE3 = document.querySelector('#trafficLight3');
let curColor = "cBlack";
trafficLightE1.addEventListener('click', changeColor);
trafficLightE2.addEventListener('click', changeColor);
trafficLightE3.addEventListener('click', changeColor);

function changeColor() {
    if (curColor === "cBlack" || curColor === "cRed") {
        trafficLightE1.style.background = ('green');
        trafficLightE2.style.background = ('black');
        trafficLightE3.style.background = ('black');
        curColor = "cGreen";
    } else if (curColor === "cGreen") {
            trafficLightE1.style.background = ('black');
            trafficLightE2.style.background = ('yellow');
            trafficLightE3.style.background = ('black');
            curColor = "cYellow";
        } else {
            trafficLightE1.style.background = ('black');
            trafficLightE2.style.background = ('black');
            trafficLightE3.style.background = ('red');
            curColor = "cRed";
         }
}


