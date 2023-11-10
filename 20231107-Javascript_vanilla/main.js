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

// Grabamos el arreglo en el `LocalStorage`
function saveTasksToLocaStorage(tasks) {
  // Salvamos usando la API del browser
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//En el momento de cargar la pantalla, leemos el `LocalStorage`
window.onload = () => {
  // Tomamos el `LocalStorage` y lo convertimos en un objeto
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  // cargamos el arrelo, con los valores recorridos por un `map`
  app.tasks = savedTasks.map((task) => {
    return createTask(task.title, task.isCompleted, task.id);
  });
  // Recorremos el arrelo con un `forEach` y se muestran en pantalla o HTML
  app.tasks.forEach((task) => {
    return addTaskToList(task, app.tasksList);
  })
}

// Función que crea el objeto de la tarea
function createTask(title, isCompleted = false, id = Date.now()) {
  return {
    id,
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
  app.tasks.push(newTask);
  // Lllamamo la funcion para renderizar en pantall
  addTaskToList(newTask, app.tasksList);
  // Justo cuando se muestra en pantalla se almacena en el `LocalStorage`
  saveTasksToLocaStorage(app.tasks);
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
  taskCheckbox.checked = task.isCompleted;
  // Añadimos una Evento-Escucha
  taskCheckbox.addEventListener('change', (evt) => onChangeCheckBox(task, taskCheckbox, taskText));

  // Añadimos un elemento de `taskText` de tipo `span`
  const taskText = document.createElement('span');
  // Ponemos el contenido con el titulo de la tarea
  taskText.textContent = task.title;
  // Reconfirmo la clase "completed"
  taskText.classList.toggle("completed", task.isCompleted);
  // Creamos un elemento de tipo `button`, para editar la tarea
  const taskEditButton = document.createElement('button');
  // Le ponemos el nombre a mostar o emoji
  taskEditButton.textContent = '✏️';
  // Ponemos un nombre de clase
  taskEditButton.className = 'edit-button';
  // Añadimos el evento-escuha
  taskEditButton.addEventListener('click', (evt) => onClickEditButton(task, taskElement));
  // Creamos un elemento de tipo `button`, para borrar la tarea
  const taskDeleteButton = document.createElement('button');
  // Le ponemos el nombre a mostar o emoji
  taskDeleteButton.textContent = '🗑️';
  // Ponemos un nombre de clase
  taskDeleteButton.className = 'delete-button';
  // Añadimos el evento-escuha
  taskDeleteButton.addEventListener('click', (evt) => onClickDeleteButton(task, taskElement))

  // Añadimos el elemento del checkbox en el HTML
  taskElement.appendChild(taskCheckbox);
  // Añadimos el elemento del texto en el HTML
  taskElement.appendChild(taskText);
  //Vamos a Contner los botones dentro de un div
  const divElement = document.createElement('div');
  // Añadimos el elemento del Botón de editar en el HTML
  divElement.appendChild(taskEditButton);
  // Añadimos el elemento del Botón de borrado en el HTML
  divElement.appendChild(taskDeleteButton);
  // Añadimos el div al elemnto de la tarea
  taskElement.appendChild(divElement);

  //Por último devolvemos el Elemento
  return taskElement;
}

// Evento-Escucha para el botón de `Ingresar Tarea`
addTaskButton.addEventListener("click", (evt) => onClickAddButton());

// Evento-escucha para cuando presiono cualquier tecla, lueggo valido cual
newTaskInput.addEventListener("keydown", (evt) => onKeyDownInput(evt));

//
