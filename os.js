'use strict';

const canvas = document.getElementById('canvas-os');
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
    context.fillRect(0, HEIGHT - 32, WIDTH, 32)
}

draw();

// Element drag
let isDragging = false;

function logMouseDown(e) {
    isDragging = true;
}

function logMouseUp(e) {
    isDragging = false;
}

function logMouseMove(e) {
    if (isDragging) {
        const el = e.target;

        let posX = e.clientX - (el.offsetLeft / 2);
        let posY = e.clientY - (el.offsetTop / 2);

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