import {varusExportToExcel} from './varusExportToExcel.js';

// Функция загрузки страницы и выполнения функции varusExportToExcel
async function varusAllCoffePage1() {
    try {
        // Загрузка страницы
        const response = await fetch('https://varus.ua/napoi/kava-zernova');
        const html = await response.text();

        // Создание временного контейнера для размещения HTML-кода
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = html;

        // Добавляем задержку перед выполнением varusExportToExcel
        setTimeout(() => {
            // Выполнение функции varusExportToExcel на загруженной странице
            varusExportToExcel(tempContainer);
        }, 500); // Задержка в 500 миллисекунд (1 секунда)
    } catch (error) {
        console.error('Ошибка при загрузке страницы или выполнении функции:', error);
    }
}

export {varusAllCoffePage1};