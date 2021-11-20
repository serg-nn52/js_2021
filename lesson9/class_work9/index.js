// function getName(){
//     return this.cityName;
// }
// function getNum(){
//     return this.num;
// }
// function setCountry(country){
//     return this.country = country;
// }

// let city = {
//     cityName: 'Minsk',
//     num: 2000000,
//     gNa: getName,
//     gNu: getNum,
//     sCo: setCountry
// }

// let city2 = {
//     cityName2: 'NN',
//     num2: 1300000
// }
// console.log(city.gNa.call(city2));
// // console.log(getName.call(city2));
// console.log(city2);

// city.sCo('Russia');
// console.log(city);

// const bound = city.sCo.bind(city2, 'Russia');
// // getName.call(city);
// bound();
// console.log(city2);

// const getArea = (a) => {
//     return (b) => a * b;
// };
// const areaWithTen = getArea(10);
// console.log(areaWithTen(5));


// const getVol = (height) => (width, length) => height*width*length;
// const getAll = getVol(10);
// console.log(getAll(10,10));

// function CreatePostcard(from, to) {
//     this.from = from,
//     this.to = to
//     // this.getValue = () => `от ${this.from} кому ${this.to}`;
// }
// CreatePostcard.prototype.replace = function(newFrom) {
//     return this.from = newFrom;
// }
// CreatePostcard.prototype.getValue = function() {
//     return `от ${this.from} кому ${this.to}`;
// }

// postcard1 = new CreatePostcard('Минск', 'НН');
// postcard2 = new CreatePostcard('Париж', 'Лондон');
// console.log(postcard2.getValue());
// postcard2.replace('Африка');
// console.log(postcard2);


// let obj1 = {
//     name: 'Serg',
//     sayHi() {
//         console.log(`Hello, ${this.name}`);
//     }
// };
// let obj2 = {
//     name: 'Kolya',
// }
// obj1.sayHi();

// obj1.sayHi.apply(obj2);

// setTimeout(obj1.sayHi, 5000);
// console.log(obj2.__proto__);


// setTimeout(obj1.sayHi.bind(obj2), 3000);

// let counter = function () {
//     let count = 0;
//     return function innerCounter() {
//         count+=1;
//         return count;
//     };
// }();


// let obj2 = {
//     age: 36,
// }

// let obj1 = {
//     name: 'Serg',
//     __proto__: obj2,
// }
// console.log(obj1.age);

// class Parent {
//     constructor(name){
//         this.name = name;
//     }
// sayName(){
//     return `Привет, ${this.name}`;
// }
// }

class People {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
    getFullName(){
        return `Полное имя ${this.name} ${this.surname}`;
    }
}
const firstpeople = new People('Иван', 'Иванов');
console.log(firstpeople.getFullName());

class Worker extends People {
    constructor(name, surname, rate, daysCount){
        super(name, surname);
        this.rate = rate;
        this.daysCount = daysCount;
    }
    getSalary(){
        return `${this.getFullName()}, Зарплата: ${this.rate * this.daysCount}`
    }
}

const firstWorker = new Worker('Semen', 'Semenov', 1500, 20);
console.log(firstWorker.getSalary());