function radio() {

    // Ищем все элементы с классом radio
    const components = document.querySelectorAll('.radio');

    // Перебираем массив components
    components.forEach(item => {

        // Находим все элементы с классом radio__item
        const items = item.querySelectorAll('.radio__item');

        // Находим инпут с классом radio__input
        var input = item.querySelector('.radio__input');

        // Перебираем массив всех элементов
        items.forEach(el => {

            // Навешиваем событие клик
            el.addEventListener('click', () => {

                // Перебираем всех элементов и удаляем класс radio__item--active
                items.forEach(p => {
                    p.classList.remove('radio__item--active');
                })

                // Из элемента достаем значение из атрибута data-value
                const value = el.getAttribute('data-value');

                // Добавляем класс элементу radio__item--active
                el.classList.add('radio__item--active');

                // В атрибут value тега инпут записываем значение из атрибута data-value
                input.value = value;
            });
        });
    });
}

radio();