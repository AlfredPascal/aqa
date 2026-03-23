///////////////////////////////////1//////////////////////////////////
    class Song {
        #_author;

        constructor(name, author) {
            this.name = name;
            this.author = author;
        }

        get author() {
            return this.#_author;
        }

        set author(writer) {
            this.#_author = writer;
        }
    }

    const song1 = new Song('Shape of You', 'Ed Sheeran');
    console.log(song1.name); // Output: Shape of You
    console.log(song1.author); // Output: Ed Sheeran
////////////////////////////////////////////////2//////////////////////////////////
class Shape {
    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }
    get calcPerimeter() {
        console.log(this.sides * this.sideLength);
        return this.sides * this.sideLength;        
    }

}
const square = new Shape('Square', 4, 5);
square.calcPerimeter; // Output: 20
const triangle = new Shape('Triangle', 3, 4);
triangle.calcPerimeter; // Output: 12
/////////////////////////////////3//////////////////////////////////
class Employee {
    constructor(name, age, position, salary) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.salary = salary;
    }
    get getSalary() {
        console.log(this.salary);
        return this.salary;
    }
    get getPosition() {
        console.log(this.position);
        return this.position;
    }
    get getAge() {
        console.log(this.age);
        return this.age;
    }
    set setSalary(newSalary) {
        this.salary = newSalary;
    }
    set setPosition(newPosition) {
        this.position = newPosition;
    }
    set setAge(newAge) {
        this.age = newAge;
    }
}
///////////////////////////////////4//////////////////////////////////
class Person {
    constructor(firstName = "Jonh", lastName = "Doe", age = 0, gender = "Male") {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }
    get fullName() {
        console.log(`${this.firstName} ${this.lastName}`);
        return `${this.firstName} ${this.lastName}`;
    }
    greetExtraTerrestrials(raceName) {
        console.log(`Welcome to Planet Earth ${raceName}`);
        return `Welcome to Planet Earth ${raceName}`;
    }
}

const person = new Person();
person.greetExtraTerrestrials('Martians'); // Output: Welcome to Planet Earth Martians
////////////////////////////////5//////////////////////////////////
