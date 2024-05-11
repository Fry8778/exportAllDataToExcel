import {silpoExportToExcel} from './silpoExportToExcel.js';

// Функция загрузки страницы и выполнения функции silpoExportToExcel
async function silpoLoadDataBeansPage1() {
    try {
        // Загрузка страницы
        const response = await fetch('https://shop.silpo.ua/category/kava-v-zernakh-363');
        const html = await response.text();

        // Создание временного контейнера для размещения HTML-кода
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = html;

        // Добавляем задержку перед выполнением silpoExportToExcel
        setTimeout(() => {
            // Выполнение функции silpoExportToExcel на загруженной странице
            silpoExportToExcel(tempContainer);
        }, 500); // Задержка в 500 миллисекунд (1 секунда)
    } catch (error) {
        console.error('Ошибка при загрузке страницы или выполнении функции:', error);
    }
}

export {silpoLoadDataBeansPage1};