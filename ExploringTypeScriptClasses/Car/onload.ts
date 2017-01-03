﻿window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();

    var truck = new Truck(42000, new Engine(402, 'V8'), 'Ford', 'F350', '2014', 'Long bed', true);
    truck.addAccessories(new Accessory(1234, 'bed liner'), new Accessory(54322, 'sun roof'));
    truck.engine.start((startStatus: boolean, engineType: string) => {
        alert(engineType + ' was started!');
    });
};
