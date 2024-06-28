document.addEventListener('DOMContentLoaded', function() {
    const tasksList = document.getElementById('tasks__list');
    const taskInput = document.getElementById('task__input');
    const tasksForm = document.getElementById('tasks__form');

    function addTask(taskText) {
        const trimmedText = taskText.trim();
        if (!trimmedText) return;

        const taskHTML = `
            <div class="task">
                <div class="task__title">${trimmedText}</div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `;

        tasksList.insertAdjacentHTML('afterbegin', taskHTML);
        setupRemoveHandlers();
    }

    function setupRemoveHandlers() {
        const removes = document.querySelectorAll('.task__remove');
        removes.forEach(removeButton => {
            removeButton.removeEventListener('click', handleRemoveTask);
            removeButton.addEventListener('click', handleRemoveTask);
        });
    }

    function handleRemoveTask(event) {
        event.preventDefault();
        event.target.parentElement.remove();
    }

    tasksForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });
});
