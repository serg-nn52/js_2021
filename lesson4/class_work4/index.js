// Задача 1
// let a = 3;
// let b = 4;
// let c = 5;
// let max;

// if (a > b) {
// max = a;
// } else 
// {max =b;}

// if  (c > max) {
//     max = c;
// } else {
//     max = max;
// }


// console.log(max);


// Задача 2
// let temp = 40;

// if (temp < -30) {
//     console.log('Оставайтесь дома!');
// } else if (temp <= -10) {
//     console.log('Очень холодно!');
// } else if (temp <= 5) {
//     console.log('Сегодня холодно!');
// } else if (temp <= 15) {
//     console.log('Не холодно!');
// } else if (temp <= 25) {
//     console.log('Тепло!');
// } else if (temp <= 35) {
//     console.log('очень тепло!');
// } else {
//     console.log('Пекло');
// };


// задача 3
// let role = 'admin'; 
//admin, manager, user


// switch (role) {
//     case "admin": 
//     console.log('Инфо про админа');
//     break;
//     case "user": 
//     console.log('Инфо про юзера');
//     break;
//     case "manager": 
//     console.log('Инфо про менеджера');
//     break;
//     default:
//     console.log('Роль не обнаружена');
//     break;
// };

// let i=0;
// while (i < 10) {
//     i +=1;
//     console.log(`Итерация ${i}`);
// }


// let i;
// for (i =1; i <= 10; i += 1) {
//     console.log(`Итерация ${i}`);
// }

// let N = 1000;
// let M = 300;
// let i=1;

// while (N > M)
//  {
//     i+=1;
//     N = N/2;   
// };
// console.log(`Количество машин станет меньше в ${i}-й день продаж`);

// for (N=N; N>M; N=N/2) {
//     i+=1;
// }
// console.log(`Количество машин станет меньше в ${i}-й день продаж`);

// let N=1000;
// let M=900;
// let i=1;
// for (N=N; N >= M; N=N/2) {
//     console.log(i);
//     i+=1;
// }
// console.log(`Количество машин станет меньше в ${i}-й день продаж`);

// let start = 1800;
// let finish = 2020;
// let i = 0;
// for (let a = start; a <= finish; a = a + 1) {
//     if (a % 4 === 0) {
//         i+=1
//         console.log(a);
//     }
// }
// console.log(`Потребовалось ${i} итераций для вычисления всех високосных годов промежутка`);