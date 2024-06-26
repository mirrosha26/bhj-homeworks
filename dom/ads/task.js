document.addEventListener('DOMContentLoaded', function() {
    const rotators = document.querySelectorAll('.rotator');

    rotators.forEach(rotator => {
        let current = rotator.querySelector('.rotator__case_active');

        const rotate = () => {
            const next = current.nextElementSibling || rotator.firstElementChild;
            const speed = next.dataset.speed;
            const color = next.dataset.color;

            current.classList.remove('rotator__case_active');
            next.classList.add('rotator__case_active');
            next.style.color = color;

            current = next;

            setTimeout(rotate, speed);
        };
        
        setTimeout(rotate, current.dataset.speed);
    });
});
