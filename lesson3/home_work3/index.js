let firstExample = "кот" > "код"; 
//true, сравнение строк посимвольно. В таблице юникод код "т" больше, чем "д"

let secondExample = "2" + 2 * "2";
//24, сначала число 2 уножается на двойку, преобразованную из строки, 
//потом это число 4 через бинарный плюс объединяется со строкой  2, получаем строку 24

let example3 = undefined == null // true, при нестрогом равенстве true, при строгом false

let example4 = undefined != null  //false, нестрогое сравнение, противоположность предыдущему примеру в лане не равно

let example5 = null == 0; // false, так как при нестрогом сравнении null будет равен только undefind, и никому больше

let example6 = 2 > "3"; //false, при сравнении строка "3" преобразуется в число 3, и оно больше 2

let example7 = null - false + true ;
//выражение преобразуется к числам, 0-0+1, получим число 1

let example8 = 1 / "l";
//вопрос с подвохом, в кавычках буква l, в выражении строка преобразуется в NaN, весь результат будет NaN
//если бы в кавычках была единичка, получили бы число 1, математическое выражение преобразует строки в число

let example9 = "2" * "3";// число 6, мат выражение преобразует строки в числа

let example10 = 4 + 5 + "O"; // строка 9O - сначала выполнится 4+5, потом к 9 через бинарный плюс приклеится 0

let example11 = "l" + 4 + 5;// строка l45, к букве l приклеится сначала 4, став строкой, потом к ним еще 5

let example12 = "4" - 2;  // 2, мат выражение преобразует в числа

let example13 = "4" - "4x"; // NaN, мат выражение преобразует в числа, 4px в NaN, действие с NaN станет NaM

let example14 = "23" == 23; // true, нестрогое сравнение не учитывает разные типы, а значения равны

let example15 = null == false; // false, null==undifined - только такое возможно

let example16 = " -4 "/ 0 + 1; 
// -Infinity (Number), сначала мат выражение преобразует строку к числу, обрежет пробелы, потом математика

let example17 = null + 1; // получим 1, мат выражение преобразует null к числу 0

let example18 = undefined + null; // NaN -  undefined преобразуется в NaN, результат всего выражения NaN 

let example19 = 1 === "1"; // false - строгое неравенство, разные типы данных

let example20 = "2" > 10; // false - сравнение преобразует к числам

let example21 = NaN == undefined; // false - NaN возвращает false при любых сравнениях





console.log(firstExample);
console.log(secondExample, typeof(secondExample));
console.log(example3);
console.log(example4);
console.log(example5);
console.log(example6);
console.log(example7, typeof(example7));
console.log(example8, typeof(example8));
console.log(example9, typeof(example9));
console.log(example10, typeof(example10));
console.log(example11, typeof(example11));
console.log(example12, typeof(example12));
console.log(example13, typeof(example13));
console.log(example14, typeof(example14));
console.log(example15, typeof(example15));
console.log(example16, typeof(example16));
console.log(example17, typeof(example17));
console.log(example18, typeof(example18));
console.log(example19, typeof(example19));
console.log(example20, typeof(example20));
console.log(example21, typeof(example21));











