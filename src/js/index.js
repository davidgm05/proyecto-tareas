import '../scss/style.scss';
const taskImput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const pendingTasks = document.getElementById("pending-tasks");
const completedTasks = document.getElementById("completed-tasks");

addTaskBtn.addEventListener('click', addTask);


function addTask() {
    const taskValue = taskInput.value;
    if (taskValue !== "") {
        // Obtener la hora actual
        const currentTime = new Date();
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const formattedTime = `${hours}:${minutes}`;

        // Crear el elemento <li> para la tarea
        const liPending = document.createElement("li");
        liPending.textContent = taskValue;

        // Crear el elemento <span> para la hora
        const timeSpanCreated = document.createElement("span");
        timeSpanCreated.textContent = `Hora: ${formattedTime}`;
        timeSpanCreated.classList.add("task-time");
        liPending.appendChild(timeSpanCreated); // Agregar el elemento <span> al elemento <li>

        // Crear el botón de completado
        const completeButton = document.createElement("button");
        completeButton.textContent = "Completado";
        completeButton.classList.add("buttom-task");
        liPending.appendChild(completeButton);

        // Agregar un event listener al botón para marcar la tarea como completada
        completeButton.addEventListener('click', function() {
            const currentTime = new Date();
            const hours = currentTime.getHours();
            const minutes = currentTime.getMinutes();
            const formattedTime = `${hours}:${minutes}`;

            // Mover la tarea completada a la lista de tareas completadas
            const liCompleted = document.createElement("li");
            liCompleted.textContent = taskValue;

            const timeSpanCompleted = document.createElement("span");
            timeSpanCompleted.textContent = `Hora: ${formattedTime}`;
            timeSpanCompleted.classList.add("task-time");

            liCompleted.appendChild(timeSpanCompleted);
            completedTasks.appendChild(liCompleted);

            // Eliminar la tarea pendiente de la lista de tareas pendientes
            liPending.remove();
        });

        // Agregar la tarea a la lista de tareas pendientes
        pendingTasks.appendChild(liPending);

        // Limpiar el campo de entrada después de agregar la tarea
        taskInput.value = "";
    }
}
