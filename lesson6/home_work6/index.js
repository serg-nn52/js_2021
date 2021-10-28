// 1. Преобразовать строку в массив слов
// Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

// var str = 'Каждый охотник желает знать';
// function stringToarray(str) {
//     return str.split(' ');
// };
//  var arr = stringToarray(str);
//  console.log(arr);

// 2. Удаление указанного количества символов из строки
// Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

// var str = 'Каждый охотник желает знать';
// function delete_characters(str, length) {

// return str.substr(0, length);

// };
// console.log(delete_characters(str, 5));

// 3. Вставить тире между словами строки
// Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.

// var str = "HTML JavaScript PHP";
// function insert_dash(str) {
//     let newStr = '';
//     for (let i = 0; i < str.length; i+=1) {
//         if (str[i] !== " ") {
//             newStr = newStr + str[i].toUpperCase();
//         } else {
//             newStr = newStr + '-';
//         }
//     }
//     return newStr;
// }
// console.log(insert_dash(str));

// 4. Сделать первую букву строки прописной
// Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.

// var str = "string not starting with capital";

// function cursive_letter(str) {
//   let newStr = str[0].toUpperCase() + str.slice(1);
//   return newStr;
// }

// console.log(cursive_letter(str));



// 5. Первая буква каждого слова заглавная
// Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.


// var str = "каждый охотник желает знать";

// function capitalize(str) {
//     let newStr = '';
//     for (let i = 0; i < str.length; i+=1){
//         if (str[(i-1)] === " " || i ===0 ) {
//             newStr = newStr + str[i].toUpperCase();
//         } else {
//             newStr = newStr + str[i];
//         }
//     }
//     return newStr;
// }
// console.log(capitalize(str));



// 6. Смена регистра символов строки
// Напишите функцию change_register(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

// var str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";
// function change_register(str) {
//     let newStr = '';
//     for (let i = 0; i < str.length; i +=1) {
//         if (str[i] === str[i].toLowerCase()) {
//             newStr = newStr + str[i].toUpperCase();
//         } else {
//             newStr = newStr + str[i].toLowerCase();
//         }
//     }
//     return newStr;
// }

// console.log(change_register(str));


// 7. Удалить все не буквенно-цифровые символы
// Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.


// var str = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";

// function remove_char(str) {
//   let newStr = str.replace(/[^A-Za-z0-9]/g,'');
//   return newStr;
// };
// console.log(remove_char(str));



// 8. Нулевое заполнение строки
// Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение с дополнительным знаком «+» или « -« в зависимости от передаваемого аргумента.

// function zeros(num, len, sign) {
//     if (sign === '+'|| sign === '-') {
//         let newNum = +(sign + num  *  10 ** (len - (String(num).length)));
//         return newNum;
//     } else {
//         return 'Ввведите + или - в качестве параметра sign!';
//     }
// };
// console.log(zeros(52, 10, '-'));


// 9. Сравнение строк без учёта регистра
// Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.

// const str1 = 'TeSt';
// const str2 = 'tEst';
// function comparison(str1, str2) {
//     if (str1.toUpperCase() === str2.toUpperCase()) {
//         return true;
//     } else {
//         return false;
//     }
// };
// console.log(comparison(str1, str2));


// 10. Поиск без учета регистра
// Напишите функцию insensitive_search(str1, str2), которая осуществляет поиск подстроки str2 в строкеstr1 без учёта регистра символов.
const str1 = 'TesTt';
const str2 = 't';
function insensitive_search(str1, str2) {
    let n = 0;
    if (str1.toLowerCase().indexOf(str2.toLowerCase()) === -1) {
        console.log('Вхождений нет!');
        return;
    }
    for (let i = 0; i < str1.length; i +=1){
        if (i !== 0 && str1.toLowerCase().indexOf(str2.toLowerCase(), i) === str1.toLowerCase().indexOf(str2.toLowerCase(), (i-1))) continue;
        n+=1;
        console.log(`${n}-е вхождение подстроки на позиции ${str1.toLowerCase().indexOf(str2.toLowerCase(), i)+1}`);
}
}
insensitive_search(str1, str2);

// 11. ВерблюжийРегистр (CamelCase)
// Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.

// let str = "hEllo woRld dftRbvh Frgh";
// function initCap(str) {
//     let newStr = '';
//     for (let i = 0; i < str.length; i +=1){
//         if (str.toLowerCase()[i-1] === " " && str.toLowerCase()[i] !== ' ') {
//             newStr = newStr + str[i].toUpperCase();
//         } else {
//             newStr = newStr + str[i].toLowerCase();
//         }
// }
// return newStr.replace(/\s/g, '');
// };
// console.log(initCap(str));

// 12. Змеиный_регистр (snake_case)
// Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.

// let str = "helloWorldPrivet";
// function initSnake(str) {
//     let newStr = '';
//     for (let i = 0; i < str.length; i +=1 ){
        
//         if (str[i].toUpperCase() === str[i]) {
//             newStr = newStr + '_' + str[i].toLowerCase() ;
//         } else {
//             newStr = newStr + str[i].toLowerCase();
//         }
// }
// return newStr;
// };
// console.log(initSnake(str));

// 13. Повторить строку n раз
// Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую определённое количество раз.

// function repeatStr(str, n) {
//     let newStr = '';
//     for(let i=0; i<n; i+=1) {
//         newStr = newStr + str;
//     }
//     return newStr;
// };
// console.log(repeatStr('Test', 5));

// 14. Получить имя файла
// Напишите функцию path(pathname), которая возвращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.

// var pathname = "/home/user/dir/file.txt";

// function path(pathname) {
//     let maxPos = 0;
//     for (let i=0; i<pathname.length; i+=1){
//         if (maxPos === pathname.indexOf('/', i) || pathname.indexOf('/', i) === -1 ) continue;
//         maxPos = pathname.indexOf('/', i);
//     }
//     return pathname.slice(maxPos+1);
// };
// console.log(path(pathname));


// 15. Заканчивается ли строка символами другой строки
// Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.

// var str = "Каждый охотник желает знать";
// var str1 = "скрипт";
// var str2 = "знать";

// String.prototype.endsWith = function(substring) {
//     if (this.slice(this.length - substring.length) === substring) return true;
//     else return false;
// };

// console.log(str.endsWith(str2));

// 16. Подстрока до/после указанного символа
// Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную после или до указанного символа char в зависимости от параметра pos.

// var str = 'Астрономия — Наука о небесных телах';
// function getSubstr(str, char, pos) { //пусть pos принимает значения < или >
//     if (pos !== '<' && pos !== '>') {
//         return 'введите параметр < или > для корректной обрезки строки';
//     } else if (pos === '<') {
//         return str.slice(0, char-1);
//     } else if (pos === '>') {
//         return str.slice(char);
//     }
// };
// console.log(getSubstr(str,2,'<'));



// 17. Вставить подстроку в указанную позицию строки
// Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указанную позицию pos строки str. По умолчанию подстрока вставляется в начало строки.

// function insert(str, substr, pos=1) {
//     return getSubstr(str, pos, '<') + substr + getSubstr(str, pos, '>'); // используем функцию из предыдущей задачи
// };
// console.log(insert(str, 'TesT'));

// 18. Ограничить длину строки
// Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n. Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.

// let str = 'Астрономия — Наука о небесных телах';
// function limitStr(str, n, symb = '...') {
//     if (str.length > n-1) {
//         return str.substr(0, n) + symb;
//     } else return str + ' длины строки недостаточно для обрезки';
// };
// console.log(limitStr(str, 5, ));


// 19. Количество вхождений символа в строке
// Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.

// var symb = "о", str = "Астрономия это наука о небесных объектах";
// function count(str, symb) {
//     let n = 0;
//     if (str.indexOf(symb) === -1) {
//         return 'В строку данные символы не входят';
//     }
//     for (let i=0; i< str.length; i+=1) {
//         if (str.indexOf(symb, i) !== str.indexOf(symb, (i-1))) {
//             n+=1;
//         }
//     }
//     return `${n} вхождений символа в строку`;
// };
// console.log(count(str, symb));



// 21. Удалить лишние пробелы из строки
// Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.

// var str = "    Max is a good      boy     ";

// function strip(str) {
//     let newStr = str.trim().replace(/\s+/g,' ');
//     return newStr;
// };
// console.log(strip(str));

// 23. Удалить лишние слова из строки

// Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.

// var str = "Сила тяжести приложена к центру масс тела";

// function cutString(str, n) {
//     let arr = str.split(' ');
//     let newArr = arr.splice(0, n);
//     let newString = newArr.join(' ');
//     return newString;
// };
// console.log(cutString(str, 5));


// 24. Найти слово в строке
// Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.

var str = 'abc def ghi jkl mno pqr stu';

function findWord(word, str) {
    if (str.indexOf(word) !== -1){
        return 'В строке существует данное слово';
    } else return 'В данной строке слово отсутсвует';
};
console.log(findWord('abc', str));
