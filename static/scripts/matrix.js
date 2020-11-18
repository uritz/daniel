'use strict';


function main() {
    ball.draw();
    setInterval(function() {
        ball.row++;
        ball.column++;
        ball.draw();
    }, 1000);
}

function left_pressed() {
    base.move_left();
}


function right_pressed() {
    base.move_right();
}