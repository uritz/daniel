class Ball {
    constructor(row, column) {
        this.row = row;
        this.column = column;
    }

    draw() {
        $(`.active-cell`).text('');
        $(`.active-cell`).removeClass('active-cell');

        $(`#${this.row}_${this.column}`).text('*');
        $(`#${this.row}_${this.column}`).addClass('active-cell');
    }
}

class Base {
    constructor(column, max_rows, max_columns) {
        this.column = column;
        this.max_rows = max_rows;
        this.max_columns = max_columns;
    }

    move_right() {
        if (this.column == 0)
            return;
        this.column--;
        $(`.active-base`).removeClass('active-base');
        $(`#${this.max_rows}_${this.column}`).addClass('active-base');
    }

    move_left() {
        if (this.column == this.max_columns - 1)
            return;
        this.column++;
        $(`.active-base`).removeClass('active-base');
        $(`#${this.max_rows}_${this.column}`).addClass('active-base');
    }
}