// 1. Реализовать таймер-функцию используя замыкания. Функция принимает два  аргумента начальное значение и значение завершения. Таймер движется назад.
// Пример:
// foo(start, end). 
// При достижении точки завершения в консоль выводится значение таймера и сообщение о завершении работы таймера.

// let timer = function(start, end) {
//     let time = end;
//     return setTimeout(()=>console.log(time--), 1000);
// }

// timer(1,10);
//способ1
// function timer(start, end) {
//   let time = end;
//   innerTimer = function () {
//     console.log(time--);
//     timer(start, time);
//   };
//   return time >= start
//     ? setTimeout(innerTimer, 1000)
//     : console.log(`Таймер дошел до значения ${start} и остановлен`);
// }
// timer(1, 10);

// //способ2
// function timer(start, end) {
//   let time = end;
//   innerTimer = function () {
//     console.log(time--);
//     if (time < start) {
//       clearInterval(count);
//       console.log(`Таймер дошел до значения ${start} и остановлен`);
//     }
//   };
//   let count = setInterval(innerTimer, 1000);
// }
// timer(1, 5);



// // 2. Что выведет функция? 
// function f() {   
//   alert( this ); // ?
// }

// let user = {
//   g: f.bind(null)
// };

// user.g(); //вызовет метод f.bind(null), выведется в alert null



// 3. Можем ли мы изменить this дополнительным связыванием?
// function f() {
//   alert(this.name);
// }

// f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

// f(); 
// Будет выведено 'Вася', контекстбудет привязан к первому объекту, его нельзя уже будет изменить.


// 4. В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.
// function sayHi() {
//   alert( this.name );
// }
// sayHi.test = 5;

// let bound = sayHi.bind({
//   name: "Вася"
// });

// alert( bound.test ); // что выведет? почему?
//undefined, т.к. у bound нет такого свойства


// 5. Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.

// Однако, его вызов приводит к ошибке. Почему?

// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'Вася',

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },

// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
//произойдет потеря контекста (функция внутри функции), нужно явно привязать контекст через bind(user)

// 6. Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).

// Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?

// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'John',

//   login(result) {
//     alert( this.name + (result ? ' logged in' : ' failed to log in') );
//   }
// };

// askPassword(?, ?); // ?
//askPassword(user.login.bind(user, true), user.login.bind(user, false));


// 8.Напишите в указанном месте конструкцию с методом bind() так, чтобы this внутри функции func всегда указывал на value из переменной elem. 

// var elem = {value: 'Привет'};

// function func(surname, name) {
// 	console.log(this.value + ', ' + surname + ' ' + name);
// }

//Тут напишите конструкцию с bind()


// func.bind(elem, 'Иванов', 'Иван')(); //вариант 1
// func.bind(elem)('Иванов', 'Иван'); //вариант 2 тут должно вывести 'привет, Иванов Иван'
// const funcElem = func.bind(elem); //вариант 3 тут должно вывести 'привет, Петров Петр'
// funcElem('Петров', 'Петр');


// 9. Есть функция которая складывает три числа.
// const sum = (a, b, c) => a + b + c
// Выполните каррирование.

function curry (f) {
    return function(a){
        return function(b){
            return function(c){
                return f(a,b,c);
            }
        }
    }
}
const sum = (a, b, c) => a + b + c;
const currySum = curry(sum);
console.log(currySum(1)(5)(3));