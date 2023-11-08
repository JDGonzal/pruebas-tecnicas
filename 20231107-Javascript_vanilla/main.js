// Acceso al DOM con base en los `id` de los elementos
const tasksList = document.querySelector('#tasks-list');
const newTaskInput = document.querySelector('#new-task-input');
const addTaskButton = document.querySelector('#add-task-button');

// Almacenamiento de Tareas en un arreglo
const tasks = [];

// Objeto Global para los procesos
const app = {
  tasks: tasks,
  tasksList: tasksList,
  newTaskInput: newTaskInput,
}

// Función que crea el objeto de la tarea
function createTask(title, isCompleted = false) {
  return {
    id: Date.now(),
    title,
    isCompleted
  }
}

// Funcion renderiza el dato en pantalla o añade el elemento a la lista
function addTaskToList(task, tasksList) {
  //Obtenermos UNA tarea
  const taskElement = createTaskElement(task); //Forma de reprentar la tarea en HTML
  // usando el elemento del DOM con la función para añadir el elemento
  tasksList.appendChild(taskElement); // tasksList se alimenta del `app`
}

// Se añade a la estructura de datos y llama la función que lo inserta en el HTML
function addTask(app) {
  // Tomamos el valor del `input`
  const newTaskTitle = app.newTaskInput.value;
  // Llamamos la función de crear la tarea, q nos retorna un objeto
  const newTask = createTask(newTaskTitle);
  // Añadimos al arreglo
  tasks.push(newTask);
  // Lllamamo la funcion para renderizar en pantall
  addTaskToList(newTask, app.tasksList);
  // Limpiamos el valor del input
  app.newTaskInput.value = '';
}

// Funcion Crea los elementos en el HTML
function createTaskElement(task) {
  // Creat el elemento q lo representa en el HTML
  const taskElement = document.createElement('li');
  // Creamos un Checkbox 
  const taskCheckbox = document.createElement('input');
  // Añadimos el tipo para saber como se va a representar
  taskCheckbox.type = 'checkbox';
  // El valor sería lo q esté en `isCompleted`
  taskCheckbox.value = task.isCompleted;
  // Añadimos una Evento-Escucha
  taskCheckbox.addEventListener('click', () => { // 'change', () => {
    // Ponemos en la tarea el valor o el estado de `checked`
    task.isCompleted = taskCheckbox.checked;
    // Añadimos o quitamos una clase al elemento
    taskText.classList.toggle('completed', task.isCompleted);
  });

  // Añadimos un elemento de `taskText` de tipo `span`
  const taskText = document.createElement('span');
  // Ponemos el contenido con el titulo de la tarea
  taskText.textContent = task.title;
  // Creamos un elemento de tipo `button`, para borrar la tarea
  const taskDeleteButton = document.createElement('button');
  // Le ponemos el nombre a mostar o emoji
  taskDeleteButton.textContent = '🗑️';
  // Ponemos un nombre de clase
  taskDeleteButton.className = 'delete-button';
  // Añadimos el evento-escuha
  taskDeleteButton.addEventListener('click', () => {
    console.log('Eliminamos la tarea de la lista:', task.id);
  })

  // Añadimos el elemento del checkbox en el HTML
  taskElement.appendChild(taskCheckbox);
  // Añadimos el elemento del texto en el HTML
  taskElement.appendChild(taskText);
  // Añadimos el elemento del Botón de borrado en el HTML
  taskElement.appendChild(taskDeleteButton);

  //Por último devolvemos el Elemento
  return taskElement;
}

// Evento-Escucha para el botón de `Ingresar Tarea`
addTaskButton.addEventListener("click", ()=>{
  // Lamamos simplemente la función addTask()
  addTask(app);
})

// Evento-escucha para cuando presiono cualquier tecla, lueggo valido cual
newTaskInput.addEventListener("keydown", (event)=>{
  // Pregunto si la tecla es el `Enter`
  if (event.key === "Enter"){
    addTask(app);
  }
})
