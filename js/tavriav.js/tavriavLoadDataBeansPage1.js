import {tavriavExportToExcel} from './tavriavExportToExcel.js';

// Функция загрузки страницы и выполнения функции tavriavExportToExcel
async function tavriavLoadDataBeansPage1() {
    try {
        // Загрузка страницы
        const response = await fetch('https://www.tavriav.ua/catalog/109/?filters%5BsortOfCoffee%5D%5B1250%5D=1250');
        const html = await response.text();

        // Создание временного контейнера для размещения HTML-кода
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = html;

        // Добавляем задержку перед выполнением tavriavExportToExcel
        setTimeout(() => {
            // Выполнение функции tavriavExportToExcel на загруженной странице
            tavriavExportToExcel(tempContainer);
        }, 500); // Задержка в 500 миллисекунд (1 секунда)
    } catch (error) {
        console.error('Ошибка при загрузке страницы или выполнении функции:', error);
    }
}

export {tavriavLoadDataBeansPage1};