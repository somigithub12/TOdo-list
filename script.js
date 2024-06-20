// script.js

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create list item elements
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center bg-info text-white';
    
    const taskSpan = document.createElement('span');
    taskSpan.innerText = taskText;

    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'btn-group';

    const finishedButton = document.createElement('button');
    finishedButton.className = 'btn btn-success btn-sm';
    finishedButton.innerText = 'Finished';
    finishedButton.onclick = function() {
        if (listItem.classList.contains('bg-info')) {
            listItem.classList.remove('bg-info');
            listItem.classList.add('bg-success', 'text-white');
            taskSpan.style.textDecoration = 'line-through';
        } else {
            listItem.classList.remove('bg-success');
            listItem.classList.add('bg-info', 'text-white');
            taskSpan.style.textDecoration = 'none';
        }
    };

    const removeButton = document.createElement('button');
    removeButton.className = 'btn btn-danger btn-sm';
    removeButton.innerText = 'Remove';
    removeButton.onclick = function() {
        listItem.remove();
    };

    // Append the buttons to the button group
    buttonGroup.appendChild(finishedButton);
    buttonGroup.appendChild(removeButton);

    // Append the task and button group to the list item
    listItem.appendChild(taskSpan);
    listItem.appendChild(buttonGroup);

    // Add the list item to the task list
    const taskList = document.getElementById('task-list');
    taskList.appendChild(listItem);

    // Clear the input
    taskInput.value = '';
}

// Event listener for the Add Task button
document.getElementById('add-task-button').addEventListener('click', addTask);

// Optional: Add task when pressing Enter key
document.getElementById('new-task').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

