class Ball {
    constructor() {
        this.row;
        this.column;
        this.init();
    }

    init() {
        this.row = 0;
        this.column = Math.floor(Math.random() * cols - 1);
    }

    draw() {
        $(`.active-cell`).text('');
        $(`.active-cell`).removeClass('active-cell');

        $(`#${this.row}_${this.column}`).text('*');
        $(`#${this.row}_${this.column}`).addClass('active-cell');
    }

    failed() {
        $(`#${this.row+1}_${this.column}`).addClass('fail-cell');
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

class Score {
    constructor() {
        this.points;
    }

    init() {
        this.points = 0;
        this.add_points(0);
    }

    add_points(points) {
        this.points += points;
        $(`#points`).text(this.points);
    }

}