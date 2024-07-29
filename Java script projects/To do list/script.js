document.getElementById('submitButton').addEventListener('click', function() {
    const inputBox = document.getElementById('inputBox');
    const taskText = inputBox.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const taskItem = document.createElement('button');
        taskItem.className = 'task-item';
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);
        
        inputBox.value = '';

        taskItem.addEventListener('click', function() {
            taskList.removeChild(taskItem);
        });
    }
});
