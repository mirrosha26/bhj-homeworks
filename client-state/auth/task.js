document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signin__form');
    const signin = document.getElementById('signin');
    const welcome = document.getElementById('welcome');
    const userIdSpan = document.getElementById('user_id');

    function showWelcomeMessage(userId) {
        userIdSpan.textContent = userId;
        welcome.classList.add('welcome_active');
        signin.classList.remove('signin_active');
    }

    function handleLogin(event) {
        event.preventDefault();
        const loginData = new FormData(form);
        fetch('https://students.netoservices.ru/nestjs-backend/auth', {
            method: 'POST',
            body: loginData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                localStorage.setItem('user_id', data.user_id);
                showWelcomeMessage(data.user_id);
            } else {
                alert('Неверный логин/пароль');
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });
    }

    function checkLocalStorage() {
        const userId = localStorage.getItem('user_id');
        if (userId) {
            showWelcomeMessage(userId);
        }
    }

    form.addEventListener('submit', handleLogin);
    checkLocalStorage();
});
