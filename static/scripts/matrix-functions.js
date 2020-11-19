'use strict';

var cols = 31,
    rows = 30,
    baseLocation = 5,
    ball = new Ball(),
    base = new Base(5, rows, cols),
    score = new Score();

$(function() {
    fillTable();
    base.move_right();
});

function fillTable() {
    var html = '',
        className;
    html += `<tr>`;
    for (let c = 0; c < cols + 2; c++) {
        if (c == 0 || c == cols + 1) {
            html += `<td class="header-cell">&nbsp;</td>`;
        } else {
            html += `<td class="header-cell header-top">${c - 1}</td>`;
        }
    }
    html += `</tr>`;
    for (let r = 0; r < rows + 1; r++) {
        html += `<tr>`;
        for (let c = 0; c < cols + 2; c++) {
            if (c == 0 && r != rows) {
                html += `<td class="header-cell header-right">${r}</td>`;
            } else {
                className = r == rows || c == cols + 1 ? 'header-cell' : 'game-cell';
                className += r != rows && c == cols + 1 ? ' header-left' : ' game-cell';
                html += `<td class="${className}" id="${r}_${c - 1}">&nbsp;</td>`;
            }
        }
        html += `</tr>`;
    }
    $('#matrix-table').html(html);
}

document.onkeydown = function(e) {
    switch (e.which) {
        case 37: // left
            left_pressed();
            // move_base(1);
            break;

            // case 38: // up
            //     break;

        case 39: // right
            right_pressed();
            // move_base(-1);
            break;

            // case 40: // down
            //     break;

        default:
            return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
};