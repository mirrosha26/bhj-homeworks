document.addEventListener('DOMContentLoaded', function() {
    const holes = document.getElementsByClassName('hole');
    const dead = document.getElementById('dead'); 
    const lost = document.getElementById('lost'); 

    function resetGame() {
        dead.textContent = 0;
        lost.textContent = 0; 
    }

    for (let i = 0; i < holes.length; i++) {
        holes[i].onclick = function() {
            if (this.classList.contains('hole_has-mole')) {
                dead.textContent = parseInt(dead.textContent) + 1;
                this.classList.remove('hole_has-mole');
            } else {
                lost.textContent = parseInt(lost.textContent) + 1;
            }

            // Проверка условий победы и поражения
            if (parseInt(dead.textContent) >= 10) {
                alert('Поздравляем! Вы выиграли игру!');
                resetGame();
            } else if (parseInt(lost.textContent) >= 5) {
                alert('К сожалению, вы проиграли. Попробуйте ещё раз!');
                resetGame();
            }
        };
    }
});