document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const fileInput = document.getElementById('file');
    const progress = document.getElementById('progress');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', fileInput.files[0]);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);

        xhr.upload.onprogress = function(event) {
            if (event.lengthComputable) {
                const percentage = (event.loaded / event.total);
                progress.value = parseFloat(percentage.toFixed(2));
            }
        };

        xhr.onload = function() {
            if (xhr.status === 201) {
                console.log('Файл успешно загружен', xhr.responseText);
            } else {
                console.error('Ошибка загрузки файла:', xhr.status, xhr.statusText);
                console.log('Ответ сервера:', xhr.responseText);
            }
        };

        xhr.onerror = function() {
            console.error('Ошибка загрузки файла', xhr.status, xhr.statusText);
        };

        xhr.send(formData);
    });
});
