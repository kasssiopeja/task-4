// Обработчик события для console.log
document.querySelector('#consoleLog').addEventListener('click', function() {
    alert("Пример использования команды console.log");
  });
  
  // Обработчик события для alert
  document.querySelector('#alert').addEventListener('click', function() {
    alert("Пример использования команды alert");
  });
  // Обработчик события для prompt
document.querySelector('#prompt').addEventListener('click', function() {
    var userInput = prompt("Введите ваше имя:");
    alert("Привет, " + userInput);
  });