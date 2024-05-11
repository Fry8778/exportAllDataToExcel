// Функция novusExportToExcel, принимающая в качестве аргумента контейнер с загруженной страницей
function novusExportToExcel(container) {     
    const productCards = container.querySelectorAll('.catalog-products__item');
    const filteredProducts = Array.from(productCards).filter(productCard => {
        const productNameElement = productCard.querySelector('.base-card__label > span');           
        const productName = productNameElement ? productNameElement.innerText.toLowerCase() : '';
        return  productName.includes('кава') ||           
                productName.includes('кава мелена')  ||
                productName.includes('кава мел')  ||
                productName.includes('кава зернова') ||
                productName.includes('набір кави') ||                    
                productName.includes('напій кавовий') ||
                productName.includes('кава натуральна') ||
                productName.includes('натуральна смажена в зернах') ||
                productName.includes('натуральна смажена мелена') ||
                productName.includes('кава натуральна смажена мелена'); 
    });

    const data = [[ 'Название товара',            
                    'Цена товара(текущая цена)', 
                    'Вес товара',     
                    'Цена товара с учетом скидки(текущая цена)',
                    'Старая цена товара(цена без скидки)',
                    'Процент скидки(%)']];

    filteredProducts.forEach((productCard) => {
        const productNameElements = productCard.querySelectorAll('.base-card__label > span'); 
        const priceElement = productCard.querySelector('.product-card-price__cost > p.product-card-price__current');
        const weightElement = productCard.querySelector('.base-card > p.base-card__capacity');
        
        // Проверяем наличие скидки
        const specialPriceElement = productCard.querySelector('.product-card-price__cost > p.product-card-price__current.price-red');       
        const salePriceElement = productCard.querySelector('.product-card-price__cost > p.product-card-price__old');
        const discountPercentageElement = productCard.querySelector('.stickers__item > stickers__promo.h4');    

        console.log("productNameElements:", productNameElements);        
        console.log("priceElement:", priceElement);
        console.log("weightElement:", weightElement);
        
        console.log("specialPriceElement:", specialPriceElement);        
        console.log("salePriceElement:", salePriceElement); 
        console.log("discountPercentageElement:", discountPercentageElement);

        if (!specialPriceElement && !salePriceElement && !discountPercentageElement) {
            // Если элементов .current.price-red, .price__old, .stickers__promo нет внутри .product-card-price__cost,
            // значит, товар не имеет скидки
            const price = priceElement ? priceElement.innerText.trim() || '' : '';  
            const weight = weightElement ? weightElement.innerText.trim() || '' : '';  
            const productName = Array
            .from(productNameElements)
            .map(element => element.innerText.trim() || '')
            .join(' ');     
            const specialPrice = '';  
            const salePrice = '';     
            const discountPercentage = '';     
            data.push([ productName,    
                        price,
                        weight,
                        specialPrice,                     
                        salePrice,
                        discountPercentage]);
        } else {
            // Если элементы .current.price-red, .price__old, stickers__promo найдены, значит, товар имеет скидку
            const productName = Array
                .from(productNameElements)
                .map(element => element.innerText.trim() || '')
                .join(' ');
            const price = '';  
            const weight = weightElement ? weightElement.innerText.trim() || '' : '';  
            const specialPrice = specialPriceElement ? specialPriceElement.innerText.trim() || '' : '';               
            const salePrice = salePriceElement ? salePriceElement.innerText.trim() || '' : '';             
            const discountPercentage = discountPercentageElement ? discountPercentageElement.innerText.trim() || '' : '';  
            data.push([ productName,    
                        price,
                        weight,
                        specialPrice,                     
                        salePrice,
                        discountPercentage]);
        }
    });

    if (data.length <= 1) {
        alert("На странице нет данных для экспорта в Excel.");
        return;
    }

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "data.xlsx");
}
export { novusExportToExcel };