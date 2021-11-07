// Example1

// const aboutMe = {
//     name: 'Serg',
//     age: 36,
// }
// let newObj = {};
// Object.assign(newObj, aboutMe);
// newObj.name = 'Kolya';
// console.log(aboutMe);

//Example2

// let sum = (...arr) => {
//     let result = 0;
//     for (let i of arr) {
//         if (i%2===0) {
//             result += i;
//         }
//     }
//     return result;
// }
// console.log(sum(1,2,3,4));

//sposob2

// let sum = (...arr) => {
//     return result = arr.filter(el => el % 2 === 0).reduce((a,b) => a+b);
// }
// console.log(sum(1,2,3,4,5,6));


//Example3

// let arr1 = [1,2,3,4,5];
// let arr2 = [3,5,6,7,8];

// let resArr = (arr1, arr2) => {
//    return arr1.filter((el) => arr2.includes(el));
// }
// console.log(resArr(arr1, arr2));

// console.log(global);
function getName(){
    return this.cityName;
}
function getNum(){
    return this.num;
}
function setCountry(){
    this.country = 'Belarus';
}

let city = {
    cityName: 'Minsk',
    num: 2000000,
    gNa: getName,
    gNu: getNum,
    sCo: setCountry
}
city.sCo();
console.log(city);

let b = +'15'+10;
console.log(b);

let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    {name: 'Serg',
    age: 36}
]
// console.log(arr[1][1]);
// console.log(arr[3].age);
arr.pop();
console.log(arr.toString().replace(/\,/g,' - ').split(' - ').map(el=>+el));

let arrTest = [];
let funk = (num) => {

    if (num > 10) {
        num/=2;
        arrTest.push(num);
        funk(num);
    } else {
        return arrTest;
    }
}
funk(100);
console.log(arrTest);
// console.log(arrTest.includes(12.5));
// console.log(arrTest.filter(el => el%5===0))
// console.log(arrTest.map(el=> `цифра равна ${el}`).reverse());
console.log(arrTest.find(el => el%5===0));


const obj1 = {
    name: 'Serg',
    age: 36
}

// const obj2 = Object.assign({}, obj1, {city: 'Minsk'});
const obj2 = {...obj1};

obj1['age'] = 37;
console.log(obj1, obj2);

// const arr = [1,2,3,4,5,6,7,8,9];
// const arr1 = arr.slice();
// arr.splice(2,3);
// arr.slice(1,5);
// console.log(arr, arr1);
// console.log(arr.slice(1,3));


// let [a,b,c] = 'Лушкин Сергей Николаевич'.split(' ');
// console.log(b);

// let func = function(...arrRest){
//     console.log(arrRest);
// }('Лушкин Сергей Николаевич'.split(' '));
