document.addEventListener('DOMContentLoaded', function() {
    const pollTitle = document.getElementById('poll__title');
    const pollAnswers = document.getElementById('poll__answers');

    function loadPoll() {
        fetch('https://students.netoservices.ru/nestjs-backend/poll')
            .then(response => response.json())
            .then(data => {
                displayPoll(data.data);
            })
            .catch(error => {
                console.error('Ошибка при загрузке опроса:', error);
            });
    }

    function displayPoll(pollData) {
        pollTitle.textContent = pollData.title;

        pollData.answers.forEach(answer => {
            const button = document.createElement('button');
            button.className = 'poll__answer';
            button.textContent = answer;
            button.addEventListener('click', function() {
                alert('Спасибо, ваш голос засчитан!');
            });
            pollAnswers.appendChild(button);
        });
    }

    loadPoll();
});
