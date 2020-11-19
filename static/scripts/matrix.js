'use strict';

var add_to_row,
    add_to_column,
    game_interval;

function start_game() {
    init_game();
    ball.draw();
    move_ball();
}

function init_game() {
    add_to_row = 1;
    add_to_column = 1;
    ball.init();
    score.init();
}

function move_ball() {
    if (ball.column == 0)
        add_to_column = 1;
    if (ball.column == cols - 1)
        add_to_column = -1;
    if (ball.row == 0)
        add_to_row = 1;
    if (ball.row == rows - 1) {
        if (base.column == ball.column) {
            add_to_row = -1;
            score.add_points(1);
        } else {
            end_game();
            return;
        }
    }

    ball.row += add_to_row;
    ball.column += add_to_column;
    //console.log('move_ball');
    ball.draw();
    game_interval = setTimeout(move_ball, 300);
}

function left_pressed() {
    base.move_left();
}


function right_pressed() {
    base.move_right();
}

function end_game() {
    game_interval = null;
    ball.failed();
    //alert('Game Over');
}