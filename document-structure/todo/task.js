document.addEventListener('DOMContentLoaded', function() {
    const tasksList = document.getElementById('tasks__list');
    const taskInput = document.getElementById('task__input');
    const tasksForm = document.getElementById('tasks__form');

    function addTask(taskText) {
        if (!taskText) return; 

        const task = document.createElement('div');
        task.className = 'task';

        const taskTitle = document.createElement('div');
        taskTitle.className = 'task__title';
        taskTitle.textContent = taskText;

        const taskRemove = document.createElement('a');
        taskRemove.href = '#';
        taskRemove.className = 'task__remove';
        taskRemove.textContent = '×';
        taskRemove.addEventListener('click', function(event) {
            event.preventDefault();
            task.remove();
        });

        task.appendChild(taskTitle);
        task.appendChild(taskRemove);
        tasksList.appendChild(task);
    }

    tasksForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });
});
