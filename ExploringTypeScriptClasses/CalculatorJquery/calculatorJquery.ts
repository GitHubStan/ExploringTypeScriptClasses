/// <reference path="jquery.d.ts" />

$(document).ready(() => {
    var calc = new CalculatorJquery('X', 'Y', 'Output');
});

class CalculatorJquery
{
    private x: JQuery;
    private y: JQuery;
    private output: JQuery;

    constructor(xId: string, yId: string, outputId) {
        this.x = $("#" + xId);
        this.y = $("#" + yId);
        this.output = $("#" + outputId);
        this.wireEvents();
    }

    private wireEvents() {
        $('#Add').click(
            event => {
                let x = parseInt(this.x.val());
                let y = parseInt(this.y.val());
                var result = this.add(x, y);
                this.output.html(result.toString());
            });
        $('#Subtract').click(
            event => {
                let x = parseInt(this.x.val());
                let y = parseInt(this.y.val());
                var result = this.subtract(x, y);
                this.output.html(result.toString());
            }
        );
    };

    add(x: number, y: number) {
        return x + y;
    }

    subtract(x: number, y: number) {
        return x - y;
    }
}