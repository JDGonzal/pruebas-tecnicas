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
17. Funciones para operaciones básicas, como la creación de tareas:
```js
    function createTask(title, isCompleted = false) {
      return {
        id: Date.now(),
        title,
        isCompleted
      }
    }
```

