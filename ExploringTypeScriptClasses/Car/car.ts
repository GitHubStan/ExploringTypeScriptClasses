interface IEngine {
    start(callback: (startStatus: boolean, engineType: string) => void): void;
    stop(callback: (startStatus: boolean, engineType: string) => void): void;
}

interface IAutoOptions {
    engine: IEngine;
    basePrice: number;
    make?: string;
    model?: string;
    year?: string;
}

class Engine implements IEngine {
    constructor(public horsePower: number, public engineType: string) { }

    start(callback: (startStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }

    stop(callback: (stopStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(false, this.engineType);
        }, 1000);
    }
}

class CustomEngine implements IEngine {
    constructor(public horsePower: number, public engineType: string) { }

    start(callback: (startStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }

    stop(callback: (stopStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(false, this.engineType);
        }, 1000);
    }
}

class Accessory {
    constructor(public accessoryNumber: number, public title: string) { }
}

class Auto implements IAutoOptions {
    private _basePrice: number;
    private _engine: IEngine;
    make: string;
    model: string;
    accessoryList: string;

    constructor(basePrice: number, engine: IEngine, make: string, model: string) {
        this.basePrice = basePrice;
        this.engine = engine;
        this.make = make;
        this.model = model;
    }

    calculateTotal(): number {
        const taxRate = .08;
        return this.basePrice + (taxRate * this.basePrice);
    }

    addAccessories(...accessories: Accessory[]) {
        this.accessoryList = '';
        for (let i = 0; i < accessories.length; i++) {
            var accessory = accessories[i];
            this.accessoryList += accessory.accessoryNumber + ' ' + accessory.title + '<br />';
        }
    }

    getAccessoryList(): string {
        return this.accessoryList;
    }

    get basePrice(): number {
        return this._basePrice;
    }

    set basePrice(value: number) {
        if (value <= 0) throw 'price must be >= 0';
        this._basePrice = value;
    }

    get engine(): IEngine {
        return this._engine;
    }

    set engine(value: IEngine) {
        if (value === undefined) throw 'Please supply an engine';
        this._engine = value;
    }
}

class Car extends Auto {

    constructor(basePrice: number,
        engine: Engine,
        make: string,
        model: string,
        bedLength: string,
        fourByFour: boolean) {

        super(basePrice, engine, make, model);
    }
}

class Truck extends Auto {
    bedLength: string;
    fourByFour: boolean;

    constructor(basePrice: number,
        engine: IEngine,
        make: string,
        model: string,
        bedLength: string,
        fourByFour: boolean) {

        super(basePrice, engine, make, model);

        this.bedLength = bedLength;
        this.fourByFour = fourByFour;

    }

}
