/////////////////////////1/////////////////////////////////
const cars = {
    bmw: {
        name: 'BMW',
        model: 'X5',
        year: 1916,
        color: 'black'
    },
    audi: {
        name: 'Audi',
        model: 'A6',
        year: 1910,
        color: 'white'
    },
    mercedes: {
        name: 'Mercedes',
        model: 'S500',
        year: 1920,
        color: 'grey'
    }
};
console.log(cars);
////////////////////////////2/////////////////////////////////
const room = {
    height: 3,
    tv: "samsung",
    big: true
}
/*
console.log(room);
console.log(typeof room.big);
console.log(room.tv.length-1);
console.log(room.tv.toUpperCase());
room.furniture = ["table", "chair", "sofa"];
console.log(room);
delete room.big;
console.log(room);
*/
////////////////////////////3/////////////////////////////////
const animal = {
    name: "dog",
    legs: 4,
    color: "yellow"
};
const str =  (obj) => `This ${obj.name} has ${obj.legs} legs and is ${obj.color}.`;
console.log(str(animal));
/////////////////////////////4/////////////////////////////////
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(key);
    console.log(person[key]);
}
//////////////////////////////5/////////////////////////////////
const person2 = {
name: "John",
age: 30,
occupation: "Engineer",
sayHello: function() {
  		console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
};

person2.sayHello();
////////////////////////////6/////////////////////////////////
 var developers = [
     { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', age: 29, language: 'Ruby' },
     { firstName: 'Peter', lastName: 'B.', country: 'Poland', age: 48, language: 'Javascript' },
     { firstName: 'Natasha', lastName: 'P.', country: 'Mexico', age: 25, language: 'C#' },
     { firstName: 'Josh', lastName: 'A.', country: 'USA', age: 26, language: 'C#' },
     { firstName: 'Augusto', lastName: 'C.', country: 'Spain', age: 32, language: 'Java' },
     { firstName: 'Lei Mi', lastName: 'S.', country: 'China', age: 52, language: 'Fortran' },
     { firstName: 'Mikey', lastName: 'L.', country: 'New Zealand', age: 30, language: 'Node' }
 ];
result = false;
for (let i = 0; i < developers.length; i++) {
    if (developers[i].language === 'Javascript') {
        result = true;
        break;
    }
}
console.log(result);
//////////////////////////////////7/////////////////////////////////
    const desserts = [
        { name: "Пирожное", price: 65 },
        { name: "Мороженое", price: 35 },
        { name: "Торт Наполеон", price: 250 },
        { name: "Песочное Печенье", price: 50 },
        { name: "Пудинг", price: 80 },
        { name: "Фруктовый Тарт", price: 40 },
        { name: "Желе Земляничное", price: 40 },
        { name: "Вафли Шоколадные", price: 36 },
        { name: "Булочка с Изюмом", price: 28 }
    ];
const MaxPriceDesserts = (desserts) => {
    let maxPrice = 0;
    let maxPriceDessert = null;
    for (let i = 0; i < desserts.length; i++) {
        if (desserts[i].price > maxPrice) {
            maxPrice = desserts[i].price;
            maxPriceDessert = desserts[i];
        }
    }
    return maxPriceDessert.name;
};
console.log(MaxPriceDesserts(desserts));
///////////////////////////////8/////////////////////////////////
