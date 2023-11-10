// Ponemos las funciones relacionadas con Evento-Escucha
const onChangeCheckBox = (task, taskCheckbox, taskText) => { // 'click', () => {
  // Ponemos en la tarea el valor o el estado de `checked`
  task.isCompleted = taskCheckbox.checked;
  // Añadimos o quitamos una clase al elemento
  taskText.classList.toggle('completed', task.isCompleted);
  // Justo despues de alterar el arreglo, lo volvemos a grabar en el `localStoarage`
  saveTasksToLocaStorage(app.tasks);
}

const onClickDeleteButton = (task, taskElement) => {
  // console.log('Eliminamos la tarea de la lista:', task.id);
  // Removemos el elemento del DOM o HTML
  taskElement.remove();
  // Guardamos el índice del arreglo
  const taskIndex = app.tasks.indexOf(task);
  // Si el índice es diferente de -1, es porque existe
  if (taskIndex !== -1) {
    // Lo borramos simplemente
    app.tasks.splice(taskIndex, 1);
  }
  // Justo despues de alterar el arreglo, lo volvemos a grabar en el `localStoarage`
  saveTasksToLocaStorage(app.tasks);
}

const onClickEditButton = (task, taskElement) => {
  console.log('Editamos la tarea', task.id, taskElement);
}

const onClickAddButton = () => {
  // Lamamos simplemente la función addTask()
  addTask(app);
}

const onKeyDownInput =(evt) => {
  // Pregunto si la tecla es el `Enter`
  if (evt.key === "Enter") {
    addTask(app);
  }
}
