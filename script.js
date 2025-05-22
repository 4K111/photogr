// Инициализация анимаций AOS
AOS.init({
    duration: 1000,
    once: true
});


// Функция для лайков
function incrementLike(button) {
    const countSpan = button.querySelector('.like-count');
    let count = parseInt(countSpan.textContent);
    const icon = button.querySelector('.pixel-heart');

    if (button.classList.contains('liked')) {
        count--;
        button.classList.remove('liked');
    } else {
        count++;
        button.classList.add('liked');
    }

    countSpan.textContent = count;
}

// Переключение фотографий
document.querySelectorAll('.photo-nav-button').forEach(button => {
    button.addEventListener('click', () => {
        // Удаляем класс active у всех кнопок
        document.querySelectorAll('.photo-nav-button').forEach(btn => {
            btn.classList.remove('active');
        });
        // Добавляем класс active к текущей кнопке
        button.classList.add('active');

        // Прокручиваем к нужной фотографии
        const targetId = button.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});