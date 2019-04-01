
var circle = document.querySelector("#circle-background");
var zeros = "0000000";

circle.addEventListener("click", changeColor, false);

function changeColor(e) {
    var color = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
    var colorLength = color.length;

    if (colorLength < 7) {
        color += zeros.substring(0, zeros.length - colorLength);
    }
    circle.style.backgroundColor = color;
}

//

var circle3 = document.querySelector("#circle3");

var button = document.querySelector("#move");
button.addEventListener("click", animate, false);

var x = 0;

function animate() {
    x += 10;

    circle3.style.transform = `translate3d(${x}px, 0, 0)`;

    if (Math.abs(x) >= 900) {
        x = -500;
    }

    requestAnimationFrame(animate);
}

animate();