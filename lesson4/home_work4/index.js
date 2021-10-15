// Решение оставшихся задач из классной работы

// Способ1
// let N=1000;
// let M=900;
// let i=1;
// for (N=N; N >= M; N=N/2) {
//     console.log(i);
//     i+=1;
// }
// console.log(`Количество машин станет меньше в ${i}-й день продаж`);


// Способ2
// let N=1000;
// let M=900;
// while (N > M)
//  {
//     i+=1;
//     N = N/2;   
// };
// console.log(`Количество машин станет меньше в ${i}-й день продаж`);


// let start = 1800;
// let finish = 2020;
// let i = 0;
// let n = 0;
// let dataCosmos;
// for (let a = start; a <= finish; a = a + 1) {
//     if (a % 4 === 0) {
//         i+=1
//         console.log(a);
//     }
//     if (a <= 1961) {
//         n+=1;
//         dataCosmos = a;
//     }

// }
// console.log(`Потребовалось ${i} итераций для вычисления всех високосных годов промежутка, всего ${i} високосных годов`);
// console.log(`Потребовалось ${n} итераций для поиска ${dataCosmos} года - года первого полета человека в космос`);


// Работа с if-else

// const a=0; // и 1, -3

// пример 1

// if (a === 0) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

//пример 2

// if (a>0) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

//пример 3

// if (a<0) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

//пример 4

// if (a>=0) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

//пример 5

// if (a<=0) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

//пример 6
// if (a!=0) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

//пример 7
// let a='test';
// if (a==='test') {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

//Пример 8
// let a='1';

// if (a==='1') {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// Работа с логическими переменными

//Задача 1, способ 1
// let test = true;
// if (test) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

//Задача 1, способ 2
// let test = false;

// console.log(test===true ? "Верно" : "Неверно" );

//Задача 2, способ 1
// let test = false;
// if (test != true) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

//Задача 2, способ 2
// let test = true;
// console.log(test != true ? "Верно" : "Неверно");

//Работа с &&   ||

//Задача 1
// let a = 2;
// if (a > 0 && a < 5) {
//     console.log("Верно");
// } else {
//     console.log('Неверно');
// }

//Задача 2
// let a = -3;
// if (a === 0 || a===2) {
//     console.log(a+=7);
// } else {
//         console.log(a/=10);
//     }

//Задача 3
// let a = 3;
// let b = 5;
// if (a <= 1 && b >= 3) {
//     console.log(a + b);
// } else {
//     console.log(a - b);
// }

//Задача 4
// let a = 5;
// let b = 10;
// if (a > 2 && a < 11 || b >=6 && b < 14) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }

//на switch-case
// let a = 1;
// switch (a) {
//     case 1:
//         console.log('Зима');
//         break;
//     case 2:
//         console.log('Весна');
//         break;
//     case 3:
//         console.log('Лето');
//         break;
//     case 4:
//         console.log('Осень');
//         break;
//     default:
//         console.log('Некорректное значение');
// }

// Общие задачи
//  В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

// let day=15;
// if (day <= 10) {
//     console.log(`Число ${day} попадает в первую декаду месяца`);
// } else if (day <= 20) {
//     console.log(`Число ${day} попадает во вторую декаду месяца`);
// } else if (day <= 31) {
//     console.log(`Число ${day} попадает в третью декаду месяца`);
// } else {
//     console.log(`Число ${day} не является числом месяца, в месяце 31 день`); 
// }


//  В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
// let month = 22;
// if (month <=2 || month === 12) {
//     console.log(`Месяц ${month} попадает в зиму`);
// } else if (month < 6) {
//     console.log(`Месяц ${month} попадает в весну`);
// }else if (month < 9) {
//     console.log(`Месяц ${month} попадает в лето`);
// }else if (month < 12) {
//     console.log(`Месяц ${month} попадает в осень`);
// } else {
//     console.log(`В году 12 месяцев`);
// }



//  Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.

// let str = "abcde";
// if (str[0] === 'a') {
//     console.log('Да');
// } else {
//     console.log('Нет');
// }

//  Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.

// let str = '12345';
// if (str[0] == 1 || str[0] == 2 || str[0] == 3) {
//     console.log('Да');
// } else {
//     console.log('Нет');
// }

//  Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.

// let str = '355';
// console.log(`Сумма трех цифр будет равна ${+str[0] + +str[1] + +str[2]}`);

//  Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

// let str = '123325';
// let sumFirst = +str[0] + +str[1] + +str[2];
// let sumLast = +str[3] + +str[4] + +str[5];
// if (sumFirst === sumLast) {
//     console.log('Да');
// } else {
//     console.log('Нет');
// }

// Циклы while и for
// Решите эти задачи сначала через цикл while, а затем через цикл for.

//  Выведите столбец чисел от 1 до 100.

// let i=0;  //через while
// while (i < 100) {
//     i+=1;
//     console.log(i);
// }

// for (let i = 1; i <= 100; i+=1) {   //через for
//     console.log(i);
// }


//  Выведите столбец чисел от 11 до 33.
// let i = 10;
// while (i < 33) {
//     i+=1;
//     console.log(i);
// }

// for (let i = 11; i <= 33; i+=1) {   //через for
//     console.log(i);
// }

//  Выведите столбец четных чисел в промежутке от 0 до 100.

// for (let i = 1; i <= 100; i+=1) { //через for
//     i+=1;
//     if(i % 2 != 0) continue;
//     console.log(i);
// }

// let i = 0;
// while (i < 100) { //через for
//     i+=1;
//     if(i % 2 != 0) continue;
//     console.log(i);
// }

//  С помощью цикла найдите сумму чисел от 1 до 100.

// let i = 1;   // через while
// let sum = 0;
// while (i <= 100) {
//     sum = sum + i;
//     i+=1;
// }
// console.log(sum); //получаем 5050

// let sum = 0; // через for
// for (let i = 1; i <= 100; i+=1) {
//     sum = sum + i;
// }
// console.log(sum); //получаем 5050

// Работа с for для массивов
//  Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.

// let arr = [1, 2, 3, 4, 5];
// for(i = 0; i <= (arr.length - 1); i+=1) {   //способ 1
//     console.log(arr[i]);
// }

// for (let j of arr) {    //способ 2
//     console.log(j);
// }

//  Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.
// let arr = [1, 2, 3, 4, 5];
// let result = 0;
// for (let j of arr) {
//     result = result + j;
// }
// console.log(result);



// Задачи общие.
//  Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.
// let arr = [2, 5, 9, 15, 0, 4];
// for (let j of arr) {
//     if(j <= 3 || j >= 10) continue;
//     console.log(j);
// }


//  Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
// let arr = [2, -5, -9, 15, 0, 4];
// let sum = 0;
// for (let j of arr) {
//     if(j <= 0) continue;
//     sum = sum + j;
// }
// console.log(sum);


//  Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

// let arr = [1, 2, 5, 9, 4, 13, 4, 10];
// for (let j of arr) {
//     if (j===4) {
//         console.log('Есть');
//         break;}
// }


//  Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
// let arr = [10, 20, 30, 50, 235, 3000];
// for (let j of arr) {
//     if(+String(j)[0] != 1 && +String(j)[0] != 2 && +String(j)[0] != 5) continue;
//     console.log(j);
// }

//  Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let str = '-';
// for (let j of arr) {
//     str = str + j + '-';
// }
// console.log(str);

//  Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.
// let arr = [
//     'понедельник',
//     'вторник',
//     'среда',
//     'четверг',
//     'пятница',
//     'суббота',
//     'воскресенье'
// ];
// for (let j of arr) {
//     if (j === 'суббота' || j === 'воскресенье') {
//         j = j.bold();
//     }
//     console.log(j);
// }

//  Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Текущий день должен храниться в переменной day.
// let arr = [
//     'понедельник',
//     'вторник',
//     'среда',
//     'четверг',
//     'пятница',
//     'суббота',
//     'воскресенье'
// ];
// let day = 'пятница';
// for (let j of arr) {
//     if (j === day) {
//         j = j.italics();
//     }
//     console.log(j);
// }


//  Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.
// let num = 0;
// let n;
// for (n=1000; n > 50; n /= 2) {
// num += 1;
// }
// console.log(`Количество итераций ${num}, получится число ${n}`); //Количество итераций 5, получится число 31.25