$(function() {
    fillTable();
});

function fillTable() {
    var cols = 10,
        rows = 10;
    var html = '';
    html += `<tr>`;
    for (let c = 0; c < cols + 2; c++) {
        if (c == 0 || c == cols + 1) {
            html += `<td class="header-cell">&nbsp;</td>`;
        } else {
            html += `<td class="header-cell">${c - 1}</td>`;
        }
    }
    html += `</tr>`;
    for (let r = 0; r < rows + 1; r++) {
        html += `<tr>`;
        for (let c = 0; c < cols + 2; c++) {
            if ((c == 0 || c == cols + 2) && r != rows) {
                html += `<td class="header-cell">${r}</td>`;
            } else {
                html += `<td class="${r == rows || c == cols + 1 ? 'header-cell' : 'game-cell'}">&nbsp;</td>`;
            }
        }
        html += `</tr>`;
    }
    $('#matrix-table').html(html);
}