// let userName = 'Сергей';

// function hiUser(user = 'Гость') {
//     console.log(`Привет, ${user}`);
// }

// hiUser(userName);

// function step(a, b=1) {
//     console.log(a ** b);
// }
// step(2,);

// function sred(massiv) {
//     let result = 0;
//     for (let j of arr) {
//         result+=j;
//     }
//     console.log(`Среднее значение равно ${result/massiv.length}`);
// }

// let arr = [3, 5, 2, 14];
// sred(arr);


// const getString = (str, count) => {
//     for (let i = 0; i < count; i += 1){
//         console.log(str);
//     }
// }
// getString ('fdgdfg', 5);

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

