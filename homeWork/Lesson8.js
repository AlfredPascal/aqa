////////////////////////////////////////////////////////////1/////////////////////////////////////////////////////
class car {
    constructor(model, color, year) {
        this.model = model;
        this.color = color;
        this.year = year;
    }
};

class lada extends car {
    constructor(model, color, year, country, speed) {
        super(model, color, year);
        this.country = country;
        this.speed = speed;
    };
}

const lada1 = new lada("Granta", "red", 2020, "Russia", 180);
console.log(lada1);
/////////////////////////////////////////////////////////////2/////////////////////////////////////////////////////
/*
import pkg from './Lesson7.js';
const { Shape } = pkg;
class Square extends Shape {
    constructor(sideLength) {
        super("Square", 4, sideLength);
    }
    get calcArea() {
        console.log(this.sideLength * this.sideLength);
        return this.sideLength * this.sideLength;
    }
}
const square1 = new Square(5);
square1.calcArea; // Output: 25
square1.calcPerimeter; // Output: 20
*/
/////////////////////////////////////////////////////////////3/////////////////////////////////////////////////////
class Human {
    constructor(name, age, interest) {
        this.name = name;
        this.age = age;
        this.interest = interest;
    }
    get info() { 
        console.log(`Human ${this.name} with age of ${this.age} interested in ${this.interest}.`);
        return `Human ${this.name} with age of ${this.age} interested in ${this.interest}.`;
    }
}
const human1 = new Human("Alice", 30, "programming");
human1.info; // Output: Human Alice with age of 30 interested in programming
//////////////////////////////////////////////////////////////5/////////////////////////////////////////////////////
class Person {
    #socialSecurityNumber;

    #calculateTaxBracket() {
    }
}

class User {
    username;
    #password;
    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }
    #updatePassword(newPassword) {
        this.#password = newPassword;
    }

    set resetPassword(newPassword) {
        this.#updatePassword(newPassword);
    }
}

class Admin extends User {
    constructor(username, password, isAdmin = true) {
        super(username, password, isAdmin = true);
    }

    set deleteUser(user) {
        console.log(`User ${user} has been deleted.`);
    }
}

const admin1 = new Admin("adminUser", "adminPass");
admin1.resetPassword = "newAdminPass"; // Password updated
admin1.deleteUser = "user123";
//////////////////////////////////////////////////////////////4/////////////////////////////////////////////////////
class getFood {
    foodType;
    constructor(foodType) {
        this.foodType = foodType;  
    }

    foodInfo() {
        console.log(`All dogs love to eat!`);
        return `All dogs love to eat!`;
    }

    foodInfo(foodType) {
        console.log(`All ${this.foodType} love to eat!`);
        return `All ${this.foodType} love to eat!`;
    }
}

const dogFood = new getFood("dogs");
dogFood.foodInfo();
console.log(dogFood.foodInfo("cats"));