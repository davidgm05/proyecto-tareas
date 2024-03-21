import '../scss/style.scss';
const taskImput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const pendingTasks = document.getElementById("pending-tasks");
const completedTasks = document.getElementById("completed-tasks");

addTaskBtn.addEventListener('click', addTask);


function addTask(){
    const taskValue = taskImput.value;
    if(taskValue !== ""){
        const liPending = document.createElement("li");
        liPending.textContent = taskValue;

        // Agregar botón de completado
        const completeButton = document.createElement("button");
        completeButton.textContent = "Completado";
        completeButton.classList.add("buttom-task");
        liPending.appendChild(completeButton);

        // Agregar tarea a la lista de tareas pendientes
        pendingTasks.appendChild(liPending);

        // Limpiar el campo de entrada después de agregar la tarea
        taskInput.value = "";

        completeButton.addEventListener('click', TaskComplete);

        function TaskComplete(){
            const liCompleted = document.createElement("li");
            liCompleted.textContent = taskValue;
            liPending.remove();
            completedTasks.appendChild(liCompleted);
        }
    }
}



