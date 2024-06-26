document.addEventListener('DOMContentLoaded', function() {
    const cookie = document.getElementById('cookie');
    const counter = document.getElementById('clicker__counter');
    let clicks = 0;
    let defaultwidth = 200;
    let toggle = false;

    cookie.onclick = function() {
        clicks++;
        counter.textContent = clicks;
        if (toggle) {
            cookie.style.width = (defaultwidth * 0.95) + 'px';
            // height меняется пропорционально ширине, но можно также прописать здесь и cookie.style.height
        } else {
            cookie.style.width = (defaultwidth * 1.05) + 'px';
            // Аналогично
        }
        toggle = !toggle;
    };
});
