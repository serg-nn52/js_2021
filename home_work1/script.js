let greeting = "Hello World!"; // создал переменную, тип - строка

console.log(greeting); // вывел Hello World!

const myName = "Sergey"; //строка
let age = 36; // число
let isMan = true; //булеан
let myDog = null; //null
let undef; //undefind
let product = {
  //объект
  title: "ball",
  weight: 0.5,
};
let id = Symbol("id"); //символ
let bigint = 25456866956n; //бигинт

console.log(myName, age, isMan, myDog, undef, product, id, bigint); //вывожу переменные

console.log(typeof myName, typeof myName); //получаю типы данных
console.log(typeof age, typeof age);
console.log(typeof isMan, typeof isMan);
console.log(typeof myDog, typeof myDog); // наблюдаем ошибку языка
console.log(typeof undef, typeof undef);
console.log(typeof product, typeof product);
console.log(typeof id, typeof id);
console.log(typeof bigint, typeof bigint);

//myName='Igor'; // пытаюсь изменить переменную, заданную через константу

// const user = {                        // задаю объект через константу
//     userName: 'Igor',
//     userAge: 18
// };
// console.log(user);
// user = {                        // пытаюсь изменить объект на другой объект
//     userName: 'Vasya',
//     userAge: 25
// };

// user = 25;   // пытаюсь изменить объект на число

let user = {
  // задаю объект через let
  userName: "Igor",
  userAge: 18,
};
console.log(user);
user = {
  // пытаюсь изменить объект на другой объект
  userName: "Vasya",
  userAge: 25,
};
console.log(user);
user = 25; // пытаюсь изменить объект на число
console.log(user); 

//то же самое через var

var dog = {
    // задаю объект через var
    dogName: "Rex",
    dogAge: 5,
  };
  console.log(dog);

  dog = {
    // пытаюсь изменить объект на другой объект
    userName: "Sharik",
    userAge: 2,
  };
  console.log(dog);
  dog = 30;   // пытаюсь изменить объект на число
  console.log(dog); 

  //VSCode установил
  //На GitHub аккаунт есть