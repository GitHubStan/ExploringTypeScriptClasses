window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
    var truck = new Truck({
        year: '2014',
        make: 'Ford',
        model: 'F350',
        engine: new Engine(402, 'V12'),
        basePrice: 42000,
        bedLength: 'Long bed',
        fourByFour: true
    });
    truck.addAccessories(new Accessory(1234, 'bed liner'), new Accessory(54322, 'sun roof'));
    truck.engine.start(function (startStatus, engineType) {
        alert(engineType + ' was started!');
    });
};
//# sourceMappingURL=onload.js.map