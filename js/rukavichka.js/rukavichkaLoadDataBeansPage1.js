import {rukavichkaExportToExcel} from './rukavichkaExportToExcel.js';

// Функция загрузки страницы и выполнения функции rukavichkaExportToExcel
async function rukavichkaLoadDataBeansPage1() {
    try {
        // Загрузка страницы
        const response = await fetch('https://market.rukavychka.ua/search/?search=%D0%BA%D0%B0%D0%B2%D0%B0');
        const html = await response.text();

        // Создание временного контейнера для размещения HTML-кода
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = html;

        // Добавляем задержку перед выполнением rukavichkaExportToExcel
        setTimeout(() => {
            // Выполнение функции rukavichkaExportToExcel на загруженной странице
            rukavichkaExportToExcel(tempContainer);
        }, 500); // Задержка в 500 миллисекунд (1 секунда)
    } catch (error) {
        console.error('Ошибка при загрузке страницы или выполнении функции:', error);
    }
}

export {rukavichkaLoadDataBeansPage1};