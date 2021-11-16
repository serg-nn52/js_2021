let str = prompt('Введите данные','');
// alert(str.trim().replace(/\s+/g,';'));
document.body.innerHTML = str.trim().replace(/\s+/g,';');