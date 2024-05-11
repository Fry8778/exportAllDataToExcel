import {novusExportToExcel} from './novusExportToExcel.js';

// Функция загрузки страницы и выполнения функции novusExportToExcel
async function novusloadDataGroundPage4() {
    try {
        // Загрузка страницы
        const response = await fetch('https://novus.online/category/melena/page-4');
        const html = await response.text();

        // Создание временного контейнера для размещения HTML-кода
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = html;

        // Добавляем задержку перед выполнением novusExportToExcel
        setTimeout(() => {
            // Выполнение функции novusExportToExcel на загруженной странице
            novusExportToExcel(tempContainer);
        }, 500); // Задержка в 500 миллисекунд (2 секунда)
    } catch (error) {
        console.error('Ошибка при загрузке страницы или выполнении функции:', error);
    }
}

export {novusloadDataGroundPage4};