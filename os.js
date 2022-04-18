'use strict';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d', {alpha: false});

const WIDTH = canvas.width;
const HEIGHT = canvas.height;

// Canvas drawing
function draw() {
    // Background
    context.fillStyle = '#008080';
    context.fillRect(0, 0, WIDTH, HEIGHT)
    // Task bar
    context.fillStyle = 'gray';
    context.fillRect(0, HEIGHT - 64, WIDTH, 64)
}

draw();

// Element drag
let isDragging = false;
let pos1 = 0;
let pos2 = 0;

function logMouseDown(e) {
    isDragging = true;
    console.log(e);
}

function logMouseUp(e) {
    isDragging = false;
    console.log(e);
}

function logMouseMove(e) {
    if (isDragging) {
        const el = e.target;

        let posX = el.offsetLeft - (pos1 - e.clientX);
        let posY = el.offsetTop - (pos2 - e.clientY);
        pos1 = e.clientX;
        pos2 = e.clientY;

        el.style.left = posX + 'px';
        el.style.top = posY + 'px';
    }
}

function setDraggable(el) {
    el.onmousedown = logMouseDown;
    window.onmouseup = logMouseUp;
    el.onmousemove = logMouseMove;
}

setDraggable(canvas);