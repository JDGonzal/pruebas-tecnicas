// Acceso al DOM con base en los `id` de los elementos
const tasksList = document.querySelector('#tasks-list');
const newTaskInput = document.querySelector('#new-task-input');
const newTaskButton = document.querySelector('#new-task-button');

// Almacenamiento de Tareas en un arreglo
const tasks = [];

// Objeto Global para los procesos
const app = {
  tasks: tasks,
  tasksList: tasksList,
  newTaskInput: newTaskInput,
}

// Funciones
function createTask(title, isCompleted = false) {
  return {
    id: Date.now(),
    title,
    isCompleted
  }
}
