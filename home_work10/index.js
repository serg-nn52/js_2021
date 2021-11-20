// 1. Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days. И метод getFullName() - имя и фамиля работника. 

// Пример:
// const worker = new Worker('Иван', 'Иванов', 10, 31);

// class Worker {
//     constructor(name, surname, rate, days) {
//         this.name = name;
//         this.surname = surname;
//         this.rate = rate;
//         this.days = days;
//     }
//     getSalary() {
//         return `Заработная плата составила ${this.rate*this.days} рублей`;
//     }
//     getFullName() {
//         return `Полное имя работника ${this.surname} ${this.name}`;
//     }
// }
// const worker = new Worker('Иван', 'Иванов', 10, 31);

// console.log(worker.name); //выведет 'Иван'
// console.log(worker.surname); //выведет 'Иванов'
// console.log(worker.getFullName()); //выведет 'Иванов Иван'
// console.log(worker.rate); //выведет 10
// console.log(worker.days); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31

//2. Напишите новый класс Boss, этот класс наследуется от класса Worker и прошлого задания. Появляется новые свойство: workers - количество работников. И зарплата считается по другому: произведение (умножение) ставки rate на количество отработанных дней и на количество работников.

// class Boss extends Worker {
//     constructor(name, surname, rate, days, workers) {
//         super(name, surname, rate, days);
//         this.workers = workers;
//     }
//     getSalary() {
//         return `Заработная плата составила ${this.rate*this.days*this.workers} рублей`
//     }
// }
// const boss = new Boss('Иван', 'Иванов', 10, 31, 10);


// // Пример:

// console.log(boss.name); //выведет 'Иван'
// console.log(boss.surname); //выведет 'Иванов'
// console.log(boss.getFullName()); //выведет 'Иванов Иван'
// console.log(boss.rate); //выведет 10
// console.log(boss.days); //выведет 31
// console.log(boss.workers); //выведет 10
// console.log(boss.getSalary()); //выведет 3100 - то есть 10*31*10

// 3. Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры. 

// class Worker {
//         constructor(name, surname, rate, days) {
//             this._name = name;
//             this._surname = surname;
//             this._rate = rate;
//             this._days = days;
//         }
//         get getName() {
//             return this._name;
//         }
//         get getSurname() {
//             return this._surname;
//         }
//         get getRate() {
//             return this._rate;
//         }
//         get getDays() {
//             return this._days;
//         }
//         get getSalary() {
//             return `Заработная плата составила ${this._rate*this._days} рублей`;
//         }
//         get getFullName() {
//             return `Полное имя работника ${this._surname} ${this._name}`;
//         }
//     }


// Пример:
// const worker = new Worker('Иван', 'Иванов', 10, 31);

// console.log(worker.getName); //выведет 'Иван'
// console.log(worker.getSurname); //выведет 'Иванов'
// console.log(worker.getRate); //выведет 10
// console.log(worker.getDays); //выведет 31
// console.log(worker.getSalary); //выведет 310 - то есть 10*31




// 4. Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте еще и методы-сеттеры. 

// class Worker {
//             constructor(name, surname, rate, days) {
//                 this._name = name;
//                 this._surname = surname;
//                 this._rate = rate;
//                 this._days = days;
//             }
//             setRate(value) {
//                 this._rate = value;
//             }
//             setDays(value) {
//                 this._days = value;
//             }
//             getName() {
//                 return this._name;
//             }
//             getSurname() {
//                 return this._surname;
//             }
//             getRate() {
//                 return this._rate;
//             }
//             getDays() {
//                 return this._days;
//             }
//             getSalary() {
//                 return `Заработная плата составила ${this._rate*this._days} рублей`;
//             }
//             getFullName() {
//                 return `Полное имя работника ${this._surname} ${this._name}`;
//             }
//         }

// Пример:
// var worker = new Worker('Иван', 'Иванов', 10, 31);

// console.log(worker.getRate()); //выведет 10
// console.log(worker.getDays()); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31

//Теперь используем сеттер:
// worker.setRate(20); //увеличим ставку
// worker.setDays(10); //уменьшим дни
// console.log(worker.getSalary()); //выведет 200 - то есть 20*10

// 5. Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.

// class MyString {
//     reverse (string) {
//         return string.split('').reverse().join('');
//     }
//     ucFirst(string) {
//         let arr = string.split('');
//         arr[0] = arr[0].toUpperCase();
//         return arr.join('');
//     }
//     ucWords(string) {
//         return string.split(/\s+/).map((el) => this.ucFirst(el)).join(' ');
//     } 
// }


// Пример:
// var str = new MyString();

// console.log(str.reverse('abcde')); //выведет 'edcba'
// console.log(str.ucFirst('abcde')); //выведет 'Abcde'
// console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'

// 6. Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона.

// class Validator {
//     isEmail(email) {
//         return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email.toLowerCase());
//     }
//     isDomain(domain) {
//         return /[-a-z0-9_]+\.[-a-z0-9_]/.test(domain.toLowerCase());
//     }
//     isDate(date) {
//         return /[0-3][0-9]\.[0-1][0-9].\d\d\d\d/.test(date);
//     }
//     isPhone(phone) {
//         return /[+]\d{3}\s\(\d\d\)\s\d{3}\-\d{2}\-\d{2}/.test(phone);
//     }
// }


// // Пример: 
// var validator = new Validator();

// console.log(validator.isEmail('Phphtml@mail.ru'));
// console.log(validator.isDomain('phphtml.net'));
// console.log(validator.isDate('12.05.2020'));
// console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны

// 7. Реализуйте класс Student (Студент), который будет наследовать от класса User, подобно тому, как это сделано в теоретической части урока. Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.
// Вот так должен выглядеть класс User, от которого наследуется наш Student:

class User {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}
	getFullName() {
		return this.name + ' ' + this.surname;
	}
}

class Student extends User {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year; //Год поступления в ВУЗ
    }
    getCourse() {
        let date = new Date();
        return  `Студент ${this.getFullName()} учится на ${date.getFullYear() - this.year} курсе`;
    }
    
}

const user = new User('Serg', 'Sergeev');
const student = new Student ('Ivan', 'Ivanov', 2019);

console.log(student.name);
console.log(student.getFullName());
console.log(student.getCourse());

