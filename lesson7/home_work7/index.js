// 1. Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.

// var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

// let vegetableLength = vegetables.map(el => el.length);

// console.log(vegetableLength); // 7,4,7,8



// 2. Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.

// const numbers = [2, 3, 5, 7, 11, 13, 17];

// let currentSums = (numbers) => {
//     let newArr = [];
//     for(let i = 0; i<numbers.length; i+=1) {
//         newArr.push(numbers.slice(0, i+1).reduce((accum, current) => accum + current));
//     }
//     return newArr;
// }

// console.log(currentSums(numbers));
 // [2, 2+3, 2+3+5, 2+3+5+7, 2+3+5+7+11, 2+3+5+7+11+13, 2+3+5+7+11+13+17] = [ 2,5,10,17,28,41,58]


// 3. Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.

// var arr = [0, 1, 2, 3, 4, 5, 6, 7];
// function sumSeven(arr) {
// let newArr = [];
//  for (let i of arr) {
//      for (let j of arr) {
//          if(i+j===7) {
//             newArr.push(`${i}:${j}`);
//          }
//      }
//  }
//  return newArr;
// }
// console.log(sumSeven(arr));


// 4. Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из первых букв слов строки str. 

//вариант 1
// var str = "Каждый охотник желает знать, где сидит фазан."; 
// let foo = (str) => {
//    return str.match(/(?<=(\s|^))[a-zа-я]/gi);
// }
// console.log(foo(str));  // [К,о,ж,з,г,с,ф]

//вариант 2
// var str = "Каждый охотник желает знать, где сидит фазан.";

// let foo = (str) => {
//   let newArr = [];
//   for (let i of str.split(/\s/)) {
//     newArr.push(i.substr(0, 1));
//   }
//   return newArr;
// };

// console.log(foo(str));


// 5. Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str. 


// var str = "JavaScript"; 

// let foo = (str) => {
//     newArr = ['Ja'];
//     for(let i=0; i<str.length-1; i+=1) {
//         newArr.push(str.substr(i, 3));
//     }
//     return newArr;
// }

// console.log(foo(str)); // [Ja,Jav,ava,vaS,aSc,Scr,cri,rip,ipt,pt] 

// 6.Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений.

// var numerics = [5, 7, 2, 9, 3, 1, 8];

// let sortArr = (numerics) => {
//     return numerics.sort((a,b) => b-a);
// }

// console.log(sortArr(numerics)); // [9,8,7,5,3,2,1]


// 7. Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений через пробел.

// var a = [1,2,3];
// var b = [4,5,6];
// c = [7,8,9];
// function getArr(a, b, c) {
// console.log(a.concat(b).concat(c).sort((a,b) => b-a).join(' ').split());
// }

// getArr(a, b, c); // [9 8 7 6 5 4 3 2 1]


// 8. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. Показать решение.

// const arr = [[1, 2, 3], [4, 5], [6]];

// console.log(arr.join().split(',').reduce((a,b) => +a + +b));


// 9. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
// const arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// console.log(arr.join().split(',').reduce((a,b) => +a + +b));


// 10. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

// const arr = [1, 2, 3, 4, 5];
// const newArr = [];
// for (let i of arr) {
//     newArr.unshift(i);
// }
// console.log(newArr);


// 11. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
// const arr = [8, 2, 0, 0, 1];
// let qElem = (arr) => {
//     let newArr = [];
//     let n=1;
//     for(let i = 0; i<arr.length; i+=1) {
//         newArr.push(arr[i]);
//         // console.log(newArr);
//         if (newArr.reduce((accum, current) => accum + current) > 10) {
//             break;
//         }
//         n+=1;
//     }
//     if (n>arr.length) {
//         return `сумма элементов массива не больше 10`;
//     } else {
//         return `чтобы получилась сумма элементов больше 10, необходимо сложить ${n} элементов`
//     }
// }
// console.log(qElem(arr));

// 12. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

let arrayFill = (value, num) => {
    let arr = [];
    for(let i = 0; i<num; i+=1) {
        arr.push(value);
    }
    return arr;
}

console.log(arrayFill('x', 5));