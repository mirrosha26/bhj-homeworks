document.addEventListener('DOMContentLoaded', function() {
    const itemsContainer = document.getElementById('items');
    const loader = document.getElementById('loader');

    function fetchCurrencyData() {
        fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
            .then(response => response.json())
            .then(data => {
                displayCurrencies(data.response.Valute);
                loader.classList.remove('loader_active'); 
            })
            .catch(error => {
                console.error('Ошибка при получении данных о валютах:', error);
                loader.classList.remove('loader_active');
            });
    }

    function displayCurrencies(valutes) {
        for (const [key, valute] of Object.entries(valutes)) {
            const item = document.createElement('div');
            item.classList.add('item');

            item.innerHTML = `
                <div class="item__code">${valute.CharCode}</div>
                <div class="item__value">${valute.Value}</div>
                <div class="item__currency">руб.</div>
            `;

            itemsContainer.appendChild(item);
        }
    }

    fetchCurrencyData();
});