// try {
//     console.log('Старт');
//     console.log(value);
//     console.log('Финиш');
// } catch {
//     console.log('Произошла ошибка!')
// }

// try {
//     console.log('start');
//     setTimeout(()=>{
//     // console.log('3 sec')
//     console.log(value);
//     }, 3000);
//     console.log('finish');
// } catch {
//     console.log('Произошла ошибка!');
// }

// const baseUrl = 'https://reqres.in/api';

// const getResponseData = (data) => {
//     console.log(data, 'Done');
    
//     for (let i of data) {
//         const element = document.createElement('div');
//         element.innerHTML = `Пользователь с id=${i.id} имеет e-mail ${i.email}`;
//         element.style.backgroundColor = 'red';
//         document.body.appendChild(element);
//     }
// }
// const getRequest = (page, callback) => {
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', `${baseUrl}/users?pages=${page}`);

//     xhr.send();

//     xhr.onload = function(){
//         callback(JSON.parse(xhr.response).data);
//     }

// }
// getRequest(1, getResponseData);

// const postRequest = (body, callback) => {
//     const xhr = new XMLHttpRequest();

//     xhr.open('POST', `${baseUrl}/users`);

//     xhr.send(JSON.stringify(body));

//     xhr.responseType='json';

//     xhr.onload = function() {
//         callback(xhr.response);
//     }
// }

// postRequest({name: 'Neo', job: 'Men'}, getResponseData);

// const getRequest = async(page)=> {
//     const res = await fetch(`${baseUrl}/users?pages=${page}`) // GET по умолчанию
//     const data = await res.json();
//     console.log(data);
// }
// getRequest(1);

// const postRequest = async(body) => {
//     const res = await fetch(`${baseUrl}/users`, {
//         method: 'POST', 
//         body: JSON.stringify(body)
//     });
//     const data = await res.json();
// }

// создаю input и button на странице, для передачи информации.
let input = document.createElement("input");
input.placeholder = "Введите номер страницы";
document.body.append(input);

let button = document.createElement("button");
button.innerHTML = "Нажми меня для запроса";
document.body.append(button);

//создаю функцию, описывающую запрос
let getData = (page) => {
  let xhr = new XMLHttpRequest(); //создаю новый объект
  let url = "https://reqres.in/api/users/";

  xhr.open("GET", `${url}${page}`); // открываю, передаю метод и URL
  xhr.send(); // отправка запроса
  xhr.responseType = "json"; //формат передаваемых данных

  xhr.addEventListener("readystatechange", () => {
    //вешаю обработчик события
    if (xhr.readyState == XMLHttpRequest.DONE) {
      //когда ответ получен и обработан, будет дальнейшее выполнение
      try {
        //вывод информации на страницу
        let userName = document.createElement("div");
        userName.innerHTML = `${page}. Пользователь ${xhr.response.data.first_name} ${xhr.response.data.last_name}`;
        document.body.appendChild(userName);
        let imgAvatar = document.createElement("img");
        imgAvatar.src = xhr.response.data.avatar;
        imgAvatar.style.display = "block";
        userName.appendChild(imgAvatar);
      } catch {
        //в случае ошибки
        let userName = document.createElement("div");
        userName.innerHTML = `Произошла ошибка!`;
        document.body.appendChild(userName);
      }
    }
  });
};

//навешиваю обработчик на кнопку, запрос пойдет после нажатия и ввода информации
button.addEventListener("click", () => {
  let userId = input.value;
  console.log(userId);
  getData(userId);
  input.value = "";
});

//пробуем метод POST
let postData = (body) => {
    let xhr = new XMLHttpRequest(); //создаю новый объект
    let url = "https://reqres.in/api/users";
  
    xhr.open("POST", `${url}`); // открываю, передаю метод и URL
   
    xhr.send(JSON.stringify(body)); // отправка запроса
    xhr.responseType = "json"; //формат передаваемых данных
  
    // xhr.addEventListener("readystatechange", () => {
    //   //вешаю обработчик события
    //   if (xhr.readyState == XMLHttpRequest.DONE) {
    //     console.log(xhr.response, xhr.response.id);
    //   }
    // });
    xhr.addEventListener("load", () => {
        //вешаю обработчик события
          console.log(xhr.response, xhr.response.id);
      });
  };

  postData ({
      first_name: 'Serg',
      tel: 'mobile'
    });
