


let header = document.createElement('header');
let container = document.createElement('div');
let input = document.createElement('input');
let ul = document.createElement('ol');
let button = document.createElement('button');




header.className = 'page-header';
container.className = 'container';
input.className = 'input';



header.innerHTML = '<h1>Заголовок</h1>';
header.appendChild(document.createTextNode('Добавим только текст'));
container.innerHTML = 'Содержимое страницы';
button.innerHTML = 'Добавление ToDo';



header.style.backgroundColor='yellow';
header.style.height='100px';
container.style.backgroundColor='grey';
container.style.height='500px';
input.style.display='block';
input.style.margin='10px 0';
input.style.width='250px';
input.style.boxSizing='border-box';
input.placeholder="Введите значение";
button.style.width='250px';



document.body.append(header);
document.body.append(container);
container.append(input);
container.append(button);
container.append(ul);

function liNewColor(e) {
    // if (this.style.backgroundColor===''||this.style.backgroundColor==='grey') {
    //     this.style.backgroundColor='red';
    // } else {
    //     this.style.backgroundColor='grey';
    // }
    (this.style.backgroundColor===''||this.style.backgroundColor==='grey')
    ?this.style.backgroundColor='red': this.style.backgroundColor='grey';
    this.style.userSelect = 'none';
    
}



for (let i=1; i<=5; i++) {
    let li = document.createElement('li');
    li.innerHTML = `Элемент заголовка ${i}`;
    ul.append(li);
    // li.onclick = liNewColor;
    li.addEventListener('dblclick', liNewColor);
}
button.onclick = function() {
    let li = document.createElement('li');
    li.innerHTML = input.value;
    if (!input.value.trim()) {
        alert('Введите значение');
        return;
    }
    ul.append(li);
    input.value = '';
    li.ondblclick = liNewColor;
}

header.onclick = function(e) {
    header.style.backgroundColor='green';
    // console.log(e.target);
    // console.log(e.currentTarget);
    // console.log(e);


}

// console.log('test');
let h1 = document.querySelector('h1');
h1.addEventListener('click', function(e) {
    // this.style.backgroundColor = 'red';
    this.classList.toggle('orange');
    e.stopPropagation();
    container.classList.toggle('orange');
})


// console.log(h1);

let arrLi = document.querySelectorAll('li');
arrLi[2].style.fontSize = '20px';
arrLi[3].classList.add('orange', 'bold'); //добавил сразу 2 класса
console.log(arrLi);
arrLi[0].style.userSelect = 'auto';