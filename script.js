function createTask() {
    const myinput = document.getElementById('myinput');
    const taskList = document.getElementById('taskList');

    const taskCard = document.createElement('div');
    taskCard.className = 'task-card';

    const taskText = document.createElement('p');
    taskText.textContent = myinput.value;

    const taskButtons = document.createElement('div');
    taskButtons.className = 'task-buttons';

    const completeBtn = document.createElement('button');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

    // ✅ Acción del botón completar y eliminar con confeti
    completeBtn.onclick = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { x: 0.5, y: 0.5 }
        });
        taskCard.remove();
    };

    // ❌ Acción del botón eliminar
    deleteBtn.onclick = () => {
        alert('Tarea eliminada. ¡No te rindas! 💀');
        taskCard.remove();
    };

    taskButtons.appendChild(completeBtn);
    taskButtons.appendChild(deleteBtn);

    taskCard.appendChild(taskText);
    taskCard.appendChild(taskButtons);
    taskList.appendChild(taskCard);

    myinput.value = '';
}

// Crear tarea con botón
document.getElementById('mybutton').onclick = () => {
    if (document.getElementById('myinput').value !== '') {
        createTask();
    }
};

// Crear tarea al presionar Enter
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && document.getElementById('myinput').value !== '') {
        createTask();
    }
});
