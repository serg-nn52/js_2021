// const myFavoriteFilm = {
//   nameFilm: "Ирония судьбы, или с легким паром",
//   year: 1970,
//   rez: "Эльдар Рязанов",
//   country: "СССР",
// };

// myFavoriteFilm.pay = 200000;
// myFavoriteFilm.method = () => console.log(myFavoriteFilm.nameFilm);

// myFavoriteFilm.method();
// // delete myFavoriteFilm.year;
// console.log(myFavoriteFilm.year, typeof myFavoriteFilm.year);

// console.log(myFavoriteFilm);

//возврат случайных чисел в заданном диапазоне
// const getRandom = (min, max) => {
//     let result = Math.round(max * Math.random());
//     while(result < min || result > max) {
//         result = Math.round(max * Math.random());
//     }
//     console.log(result);     
// }
// getRandom(100, 1000);
// getRandom(1, 2);

//Реализовать функцию которая будет определять, в каком регистре записан n элемент переданной строки, если в верхнем то вернуть true, в противном случае вернуть false.
// const isUpper = (string, n) => {
//   if (string[n] === string[n].toUpperCase()) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };
// isUpper("frTy", 2);
// let string = 'fddfhdf';
// console.log(string[3].toUpperCase());

const str = 'dffgftoddgfgto';
const find = 'to';
const replace = 'TO';

console.log(str.indexOf(find, 0));
