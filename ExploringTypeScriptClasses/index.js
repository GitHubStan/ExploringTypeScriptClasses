window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();

    var engine = new Engine(300, 'V8');
    var car = new Car(engine);
    alert(`Loaded the app with a car with engine ${car.engine.engineType}. Starting car.`);
    car.start();
};
