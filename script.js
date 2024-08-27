document.getElementById('addTaskBtn').addEventListener('click', addTask);

document.getElementById('inputTask').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const inputTask = document.getElementById('inputTask');
    const taskText = inputTask.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');

    newTask.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        taskList.removeChild(newTask);
    });

    newTask.appendChild(deleteBtn);

    newTask.addEventListener('click', function() {
        newTask.classList.toggle('completed');
        if (newTask.classList.contains('completed')) {
            taskList.removeChild(newTask);
            taskList.appendChild(newTask);
        }
    });

    taskList.appendChild(newTask);

    inputTask.value = '';
}
