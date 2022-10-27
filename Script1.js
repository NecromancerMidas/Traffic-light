// JavaScript source code

let red = document.getElementById('red')
let yellow = document.getElementById('yellow')
let green = document.getElementById('green')
const timeout = (traffic(), 5000);

/* function traffic() {
    setTimeout(backgroundred, 5000);
    setTimeout(backgroundyellow, 10000);
    setTimeout(backgroundgreen, 15000);

    console.log(traffic)
}
function backgroundred() {
    red.style.backgroundColor = 'red';
    setTimeout(buttonface, 4000);
}
function backgroundyellow() {
    yellow.style.backgroundColor = 'yellow';
    setTimeout(buttonface, 4000);
}
function backgroundgreen() {
    green.style.backgroundColor = 'green';
    setTimeout(buttonface, 4000);
}
function buttonface() {
    red.style.backgroundColor = 'buttonface';
    yellow.style.backgroundColor = 'buttonface';
    green.style.backgroundColor = 'buttonface';
}*/

function traffic() {
    setTimeout(background, 5000, 'red', '', '');
    setTimeout(background, 10000, '', 'yellow', '');
    setTimeout(background, 15000, '', '', 'green');
    setTimeout(background, 20000, '', '', '');
    setTimeout(traffic, 21000)

    console.log(traffic);
}

function background(color1, color2, color3) {
red.style.backgroundColor = `${color1}`;
yellow.style.backgroundColor = `${color2}`;
green.style.backgroundColor = `${color3}`;
console.log(background);
}