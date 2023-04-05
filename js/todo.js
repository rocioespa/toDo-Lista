// Info date
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

// Tasks Container
const tasksContainer = document.getElementById('tasksContainer');

const setDate = () =>{
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es',{ day: 'numeric'});
    dateText.textContent = date.toLocaleString('es',{ weekday: 'long' });
    dateMonth.textContent = date.toLocaleString('es' , { month: 'short'});
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric'});
}

const addNewTask = event => {
    event.preventDefault(); // no se reinicie la pag despues de hacer submit
    const { value } = event.target.taskText; //el valor que se escribe en el input
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task','roundBorder');
    task.addEventListener('click', changeTaskState); //tocar en la tarea para que quede done
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset(); //reiniciar el input
}

const changeTaskState = event => {
    event.target.classList.toggle('done'); //si no lo tiene agregue la clase, si ya lo tiene
    //lo saca
}

const order = () =>{
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach( el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })
    return [...toDo, ...done];
}

const renderOrderedTasks = () =>{
    order().forEach(el => tasksContainer.appendChild(el))
}

setDate();