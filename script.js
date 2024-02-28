console.log('Здравствуй.МИр!')
const userText = prompt('введите текст')
const userTextField = document.querySelector('#userTextFieled');
userTextField.textContent = userText;
console.log('Текст в h2 изменён на', userText);