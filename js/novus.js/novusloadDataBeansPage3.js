import {novusExportToExcel} from './novusExportToExcel.js';

// Функция загрузки страницы и выполнения функции novusExportToExcel
async function novusloadDataBeansPage3() {
    try {
        // Загрузка страницы
        const response = await fetch('https://novus.online/category/v-zernah/page-3');
        const html = await response.text();

        // Создание временного контейнера для размещения HTML-кода
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = html;

        // Добавляем задержку перед выполнением novusExportToExcel
        setTimeout(() => {
            // Выполнение функции novusExportToExcel на загруженной странице
            novusExportToExcel(tempContainer);
        }, 500); // Задержка в 500 миллисекунд (1 секунда)
    } catch (error) {
        console.error('Ошибка при загрузке страницы или выполнении функции:', error);
    }
}

export {novusloadDataBeansPage3};