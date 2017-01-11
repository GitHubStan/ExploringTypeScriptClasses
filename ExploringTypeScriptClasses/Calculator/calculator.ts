/// <reference path="../scripts/typings/toastr.d.ts" />

//For build errors, I updated the proj file to not build TypeScript files. See the following links.
//https://github.com/Microsoft/TypeScript/issues/2294
//https://github.com/Microsoft/TypeScript/issues/7091

window.onload = () => {
    var calc: ICalculator = new NumberTools.Calculator('X', 'Y', 'Output');
    calc.toast("Calculator is ready to use.");
}


export interface ICalculator {
    add(x: number, y: number);
    subtract(x: number, y: number);
    toast(message: string);
}

namespace NumberTools {

    export class Calculator implements ICalculator {

        private x: HTMLInputElement;
        private y: HTMLInputElement;
        private output: HTMLSpanElement;

        constructor(xId: string, yId: string, outputId: string) {
            this.x = <HTMLInputElement>document.getElementById(xId);
            this.y = <HTMLInputElement>document.getElementById(yId);
            this.output = <HTMLSpanElement>document.getElementById(outputId);
            this.wireEvents();
        }

        wireEvents() {
            document.getElementById('Add').addEventListener('click',
                event => {
                    this.output.innerHTML = this.add(parseInt(this.x.value), parseInt(this.y.value)).toString();
                });

            document.getElementById('Subtract').addEventListener('click',
                event => {
                    this.output.innerHTML = this.subtract(parseInt(this.x.value), parseInt(this.y.value)).toString();
                });
        }

        add(x: number, y: number) {
            return x + y;
        }

        subtract(x: number, y: number) {
            return x - y;
        }

        toast(message: string) {
            toastr.info(message);
        }
    }
}
