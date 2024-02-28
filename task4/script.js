// Получаем ссылку
const link = document.querySelector('a');

// Добавляем обработчик события клика
link.addEventListener('click', function(event) {
    // Предотвращаем стандартное поведение ссылки
    event.preventDefault();
    
    // Запрашиваем у пользователя новый текст для ссылки
    const newText = prompt('Напишите Яндекс:');
    
    // Изменяем текст ссылки
    link.textContent = newText;
});