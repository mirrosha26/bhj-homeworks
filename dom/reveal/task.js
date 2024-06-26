document.addEventListener('DOMContentLoaded', function() {
    const reveals = document.querySelectorAll('.reveal');

    const revealCheck = function() {
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('reveal_active');
            } else {
                element.classList.remove('reveal_active');
            }
        });
    };

    window.addEventListener('scroll', revealCheck);
    revealCheck();
});
