const user = {
    name: 'Lily',
    age: 23,
    'fav-color': 'niebieski',
    car: {
        brand: 'Audi',
    }
}

function wypisz() {
    console.log(`${this.name} ma ${this.age} lata, a jej ulubiony kolor to ${this["fav-color"]}.`);
};

function wypiszAuto(koloru) {
    console.log(`Jeździ samochodem marki ${this.car.brand}. Samochód jest koloru ${koloru}.`);
};

wypisz.bind(user)();
wypiszAuto.call(user, 'czarnego');
