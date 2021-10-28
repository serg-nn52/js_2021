//Задачи из классной работы
// задача - проверка буквы на гласность (анлгийские)

// let isGlas = (buk) => {
//     let arr = ['e', 'y', 'u', 'i', 'o', 'a'];
//     let isTrue = false;
//             for (let j of arr) {
//                 if (buk === j) {
//                     isTrue = true;
//                     break;
//                 }
//         }
//         console.log(isTrue);
//     }
// isGlas('o');

//задача на палиндром
// let isPalin = (string) => {
//     let oldString = '';
//     let newString = '';
//     for (let i = 0; i <= (string.length - 1); i+=1){//формируем прямую строку без пробелов
//         if (string[i] === " ") continue; //убираю пробелы из прямой строки
//         oldString = oldString + string[i];
//     }
//     console.log(oldString); //проверяю для себя прямую строку
//     for (let i = (string.length - 1); i >= 0; i-=1){//формирую перевернутую строку без пробелов
//         if (string[i] === " ") continue; //убираю пробелы из перевернутой строки
//         newString = newString + string[i];
//     }
//     console.log(newString); //проверяю для себя перевернутую строку
//     if (oldString === newString) { //сравниваю прямую и перевернутую строку без пробелов
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }

// isPalin('лазер боре хер обрезал'); //проверяем, true
// isPalin('просто выражение'); //проверяем, false

// Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

// function squareNumber(num) {
//     return num**2;
// }
// console.log(squareNumber(5));

// Сделайте функцию, которая возвращает сумму двух чисел.

// let sum = function(num1, num2) {
//     return num1 + num2;
// }
// console.log(sum(5,2))

// Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

// let expression = (num1, num2,num3) => {return (num1 - num2)/num3};
// console.log(expression(8,2,3));

// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
// let dayOfWeek = (day) => {
//     switch (day) {
//         case 1: console.log('Понедельник');
//         break;
//         case 2: console.log('Вторник');
//         break;
//         case 3: console.log('Среда');
//         break;
//         case 4: console.log('Четверг');
//         break;
//         case 5: console.log('Пятница');
//         break;
//         case 6: console.log('Суббота');
//         break;
//         case 7: console.log('Воскресенье');
//         break;
//         default: console.log(`Введите целое число от 1 до 7`);
//         break;
//     }
// }
// dayOfWeek(6);

// Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

// let isTrue = (num1, num2) => {
//     if (num1 === num2) return true;
//     else return false;
// }
// console.log(isTrue(3,5));

//  Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма
// больше 10 - пусть вернет true, а если нет то - false.

// function isTrue(num1, num2) {
//     if (typeof(num1) !== 'number' || typeof(num2) !== 'number'){
//         console.log('Введите числа');
//     } else if (num1 + num2 >10) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
// isTrue(1, 15);

//  Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.

// let isTrue = (num) => {
//     if (typeof(num) !== 'number') {
//         return 'Введите число!';
//     } else if (num < 0){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isTrue(5));

//  Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

// let isNumberInRange = (num) => {
//   if (typeof num !== "number") {
//     return "Введите число!";
//   } else if (num > 0 && num < 10) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(isNumberInRange(20));

//  Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.

// let arr = [1, 20, 30, 5, 7, 8, 40];
// let newArr = [];
// let n=0;
// for (let i of arr){
//     if (isNumberInRange(i) === false) continue;
//     newArr[n] = i;
//     n+=1;
// }
// console.log(newArr);

//  Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

// let getDigitsSum = (num) => {
//     let sum = 0;
//     for(let i = 0; i < String(num).length; i+=1){
//         sum = sum + +String(num)[i];

//     }
//     return sum;
// }
// console.log(getDigitsSum(101));

let getDigitsSum = (num) => {
    let sum = 0;
    for(let i = 0; i < String(num).length; i+=1){
        sum = sum + +String(num)[i];

    }
    if (sum > 9) {
      return getDigitsSum(sum);
    } else {
      return sum;
    }   
}
console.log(getDigitsSum(596));

//  Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
// let n = 0;
// for (i = 1; i <= 2020; i += 1){
//     if (getDigitsSum(i) === 13) {
//         n+=1;
//         console.log(`${n}-й в списке годов с суммой цифр 13: ${i}`);
//     }
// }

//  Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

// let isEven = (num) => {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// // console.log(isEven(3));

//  Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
// let arr = [1, 20, 30, 5, 7, 8, 40];
// let newArr = [];
// let n = 0;
// for (let j of arr) {
//     if (isEven(j)){
//         newArr[n] = j;
//         n+=1;
//     }
// }
// console.log(newArr, newArr.length);



//  Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число)

// let getDivisors = (num) => {
//     let arr = [];
//     let n = 0;
//     for (i = 1; i <= num; i+=1) {
//         if (num % i === 0) {
//             arr[n] = i;
//             n+=1;
//         }
//     }
//     return arr;
// }
// console.log(getDivisors(100));

//  Дан массив с числами. Выведите последовательно его элементы.


// let funcSortArr = (arr) => {
//     let newArr = [];
//     for (let n = 0; n < arr.length; n += 1) {
//         let min = arr[0];
//         for (let i = 0; i <= arr.length; i += 1) {  //поиск минимального элемента массива
//             if (min >= arr[i]) {
//                 min = arr[i];
//             }
//         }
//         for (let j = 0; j <= arr.length; j += 1) {
//             if (min === arr[j]) {
//                 arr[j] = Infinity; //умышленно не вырезаю элемент из массива, до этой темы мы не дошли. При следующем проходе он уже не минимальный
//                 break; // чтобы не присвоил значение 2 одинаковым элементам одновременно
//             }
//         }
//         newArr[n] = min; //запись минимального элемента в новый массив, с минимальным индексом
//     }
//     return newArr;
// }
// let arr = [1, 20, 30, 5, 7, 8, 5, 40, -5];

// console.log(funcSortArr(arr)); // выводим упорядоченные элементы, используя нашу функцию


//  Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).

// let myFunc = (num) => {
//   for (let n = 0; ; n += 1) {
//     let sum = 0;
//     for (let i = 0; i < String(num).length; i += 1) {
//       sum = sum + +String(num)[i];
//     }
//     if (sum > 9) {
//       num = sum;
//       sum = 0;
//     } else {
//       return sum;
//     }
//   }
// };

// console.log(myFunc(89));