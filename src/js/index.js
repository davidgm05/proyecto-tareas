import '../scss/style.scss';
const taskImput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener('click', addTask);

function addTask(){
    const taskValue = taskImput.value;
    if(taskValue !== ""){
        const li = document.createElement("li");
        li.classList.add("li");
        li.textContent = taskValue;
        
        const buttomTask = document.createElement("buttom");
        buttomTask.textContent = "tarea completada";
        buttomTask.classList.add("buttom-task");
        
        taskList.appendChild(li);
        li.appendChild(buttomTask)

        buttomTask.addEventListener("click", () => {
            li.remove();
        })
    
    }
}


