# JAVASCRIPT VANILLA: Tutorial Paso a Paso para Programadores y Principiantes.
[JAVASCRIPT VANILLA](https://www.youtube.com/watch?v=UyYhcuv96bs)
>**Note** Trabajo con JavaScript Puro, con HTML y CSS, usando el [Visual Studio Code](https://code.visualstudio.com/download)

## Elementos a Practicar
1. Esctructura con HTML, añadiendo elementos necesarios para ingresar datos, mediante un `<input>` y un `<button>`, luego presentar los datos en una lista.
2. Dando estilo con CSS, se usarán selectores de elemntos como identificadores y clases, para aplicar los diferentes estilos.
3. Interacción DOM con JS, creando funciones que van a iunteractuar con el [DOM](https://lenguajejs.com/javascript/dom/que-es/), que son los diferentes elementos que aparecen en la página web en forma de árbol.
4. Mediante los `Event Listeners` se añade Interactividad HTML, permitiendo responder a los eventos de `click` y otras interacciones que se hagan.
5. WEB Storage, es el API que tiene el navegador para almacenar los datos de forma local, cosa q si se cierra la pestaña o el navegador, se pueden tener esos datos persistentes.

## El Ejercicio es hacer el almacenamiento de "Tareas" o actividades por hacer (TODO)
1. Crear tres (3) archivos básicos:
* **index.html**, para el marcado o maquetación de la aplicación.
* **styles.css**, para dar estilos y mejor forma visual.
* **main.js**, para manejar toda la lógica de nuestra aplicación.
2. Escribir en **index.html**, un símbolo de admiración(!), para cargar un HTML básico.
3. Cambiar el lenguaje a *español* : `<html lang="es">`.
4. Cambiar de `<head>`, el metadato de `<title>`, que aparece en la pestaña del navegador.
5. Añadir el `<link>`, para indicar el archivo de estilos: `<link rel="stylesheet" href="./styles.css">`.
6. Añadir un `<h1>` en el `<body>`
7. Añadir justo antes de cerrar el `</body>`, el `<script>`. Siempre se pone de último antes de cerrar el `<body>`.
8. Añadir los elementos: `<input>` y `<button>`, debajo del `<h1>`, con los respectivos `id`.
9. Añadimos un elemento `<ul>` (unordered list), es decir una lista no numerada.
10. Mejorar el estilo dentro de **styles.css**, empecemos con el genérico del `body`.
11. Añadir estilos de los otros elementos: `h1`, `input`, y `button`.
12. Poner los estilos de lo q no se ve como aún: `ul` y `li`.
13. Poner en **main.js**, el código necesario. 
14. Obtener las referencias de las listas de tareas (`ul` y `li`), luego el dato ingresado (`input`), por último el control del botón (`button`), con una constante para cada uno:
```js
    const tasksList = document.querySelector('#tasks-list');
    const newTaskInput= document.querySelector('#new-task-input');
    const addTaskButton= document.querySelector('#add-task-button');
```
> **Note** Como todos son basados en el `id` dentro del **index.html**, se usa el símbolo numeral (#).

15. Crear un sitio para almacenar la información, esto será un Arreglo:
```js
    const tasks = [];
```
16. Se crea un objeto global para tener referencia a todo el proceso:
```js
    const app ={
      tasks: tasks,
      tasksList: tasksList,
      newTaskInput: newTaskInput,
    }
```
17. Funciones para operaciones básicas, :
* `function createTask(title, isCompleted = false) { ... }`
* `function addTaskToList(task, tasksList) { ... }`
* `function addTask(app) { ... }`
* `function createTaskElement(task) { ... }`

18. Cambio el color del botón de borrado en el **styles.css** 
```css
    .delete-button{
      background-color: red;
    }
```
19. Regresando al archivo  **main.js**, pongo un evento-escucha para cuando se presiona el Click sobre el botón de Ingresar tarea.
```js
    addTaskButton.addEventListener("click", ()=>{
      addTask(app);
    })
```
20. Añado otro evento-escucha para cuando se presiona la tecla hacia abajo en el `input`:
```js
    newTaskInput.addEventListener("keydown", (event)=>{
      if (event.key === "Enter"){
        addTask(app);
      }
    })
``` 
21. Añadimos en **styles.css**, algo relacionado con la clase `.completed`
```css
    .completed {
      text-decoration: line-through;
    }
```
22. El botón eleiminar en **main.js**, son dos cosas, uno quitarlo de pantalla y otro eliminarlo del arreglo:
```js
      taskDeleteButton.addEventListener('click', () => {
        taskElement.remove();
        const taskIndex = app.tasks.indexOf(task);
        if (taskIndex !== -1) {
          app.tasks.splice(taskIndex, 1);
        }
      })
```
23. Creamos una función para almacenar el arreglo en el `LocalStorage`:
```js
    function saveTasksToLocaStorage(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
```
24. Creamos una función para traerlo del `LocalStorage` y ponerlo en el arreglo:
```js
    window.onload = () => {
      const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      app.tasks = savedTasks.map((task) => {
        return createTask(task.title, task.isCompleted);
      });
      app.tasks.forEach((task) => {
        return addTaskToList(task, app.tasksList);
      })
    }
```
25. Llamamos la función `saveTasksToLocaStorage` desde `addTask()`
26. Llamamos la función `saveTasksToLocaStorage` desde `taskDeleteButton.addEventListener()`.
27. Llamamos la función `saveTasksToLocaStorage` desde `taskCheckbox.addEventListener()`.

> **Note** Completada la generación de Tareas y almacenamiento local

## Mejoras y Añadiendo el Editar
1. Crear un archivo llamado **events.js**, para los Evento-escucha.
2. Añado el script dento del **index.html**
```html
  <script src="./events.js"></script>
```
3. Lo que dejo en **main.js** para el elemento `textbox` es:
`taskCheckbox.addEventListener('change', (evt) => onChangeCheckBox(task, taskCheckbox, taskText));` y paso el resto a **events.js**:
```js
    const onChangeCheckBox = (task, taskCheckbox, taskText) => { 
      task.isCompleted = taskCheckbox.checked;
      taskText.classList.toggle('completed', task.isCompleted);
      saveTasksToLocaStorage(app.tasks);
    }
```
4. Añado el editar en **main.js** como opcion adicional 
```js
      const taskEditButton = document.createElement('button');
      // Le ponemos el nombre a mostar o emoji
      taskEditButton.textContent = '✏️';
      // Ponemos un nombre de clase
      taskEditButton.className = 'edit-button';
      // Añadimos el evento-escuha
      taskEditButton.addEventListener('click', (evt) => onClickEditButton(task));
```
y la parte requerida en **events.js**, pendiente por completar :
```js
    const onClickEditButton=(task, taskElement)=>{
      console.log('Editamos la tarea', task.id);
    }
```
5. Añadimos el elemento del Botón de editar en el HTML en **main.js**
  `taskElement.appendChild(taskEditButton);`.
6. Lo que dejo en **main.js** para el elemento `button` de borrar es: 
`taskDeleteButton.addEventListener('click', (evt) => onClickDeleteButton(task, taskElement))` y paso el resto a **events.js**:
```js
    const onClickDeleteButton=(task, taskElement) => {
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
```
7. Muevo lo realcionado con el `button` de Adicionar y el dar [Enter] en el `input`.
8. En el **styles.css** añado lo relacionado con el botón editar:
```css
    .edit-button{
      background-color: blue;
    }
```
