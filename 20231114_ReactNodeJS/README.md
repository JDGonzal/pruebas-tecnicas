# PRUEBA TÉCNICA de React para Junior y Trainee.
* [Youtube con midulive](https://www.youtube.com/watch?v=JW_x-Tq5Vt0).📹
* [Enunciado por brandovidal](https://gist.github.com/brandovidal/153d30bb6f639ad26e1796bb010af8c8) ✍️

# 1ª Prueba técnica React y Nodejs

> Te damos la bienvenida a la primera prueba técnica del proceso de selección como Senior Software Typescript Developer con React y Nodejs. La prueba consiste en lo siguiente:

### Ejercicio 1. Añadir y eliminar elementos de una lista (React)

**Requisitos**: Tener instalado Nodejs (v16.x.x o superior). Tener instalado npm.

**Duración máxima**: 40 minutos

**Enunciado**:

```bash
Crear una app en React que implemente un campo de texto y botón para añadir un elemento.

Cuando se hace click en el botón, el texto en el campo de entrada debe agregarse a continuación en una lista de elementos.

Además, cada vez que se hace click en cualquier elemento de la lista, debe eliminarse de la lista.
```

- [x] _Dar importancia a la funcionalidad y usabilidad, más que al diseño visual._
- [x] _El código debe ser enteramente desarrollado en Typescript._

### Ejercicio 2. API REST (Nodejs)

**Requisitos**: Tener instalado Nodejs (v16.x.x o superior). Tener instalado npm.

**Duración máxima**: 40 minutos

**Enunciado**:

```bash
Crear una API REST en Node.js que gestione Libros y Autores. Se deben crear 2 endpoints para operar con la misma.

Se puede usar almacenamiento en memoria o el sistema gestor de bases de datos de su preferencia.
```

**Entidad Libro (book):**

- id: number
- title: string
- chapters: number. Representa la cantidad de capítulos.
- pages: number. Representa la cantidad de páginas.

**Entidad Autor (author):**

- id: number
- name: string

- [x] _Debe existir una relación del tipo Many-to-Many entre los libros y los autores_

**Endpoints:**

1. **Nuevo Libro**: Creará un nuevo libro, aportando todos sus datos incluidos los autores.
2. **Obtener todos los libros**: Deberá devolver un listado de libros con sus autores.
3. **Crear un autor**: Creará un nuevo autor
4. **Obtener todos los autores**: Deberá devolver un listado de todos los autores con los libros que tengan.
5. **Obtener Promedio de Páginas por Capítulo**: Obtener el dato de una instancia de Libro ya creada. Se debe devolver el id del libro consultado y un promedio de páginas por capítulo. Ambos en formato cadena, y con 2 decimales para el promedio.

- [x] _Para la prueba es necesario realizar lo que dicta el enunciado, aunque se pueden agregar características no mencionadas (manejo de errores, repositorio de datos, validaciones, etc.)._
- [x] _Se pueden asumir los aspectos que no aclare el enunciado, y realizar aclaraciones personales en caso de ser necesario._
- [x] _El código debe ser enteramente desarrollado en Typescript._

Recuerda que dispones de 90 minutos para realizar las dos pruebas conjuntamente.

Por favor, confirma que lo has recibido y vas a comenzar la prueba en el botón de abajo.

**Envía todos los archivos fuente del proyecto vía email en archivo Zip (sin carpeta de dependencias) una vez finalizado el tiempo de la prueba.**

¡Mucha suerte!

# Solución
## Configuración del Ambiente
1. Crear el proyecto con el comando `npm create vite@latest` 

```bash
√ Project name: ... 20231114_ReactNodeJS
√ Target directory "20231114_ReactNodeJS" is not empty. Remove existing files and continue? ... yes
√ Package name: ... 20231114-reactnodejs
√ Select a framework: » React
? Select a variant: » TypeScript + SWC
```
2. [Vite](https://vitejs.dev/guide/) llena el **README.md** con esto:
>## React + TypeScript + Vite
>This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
>Currently, two official plugins are available:
>- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
>- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
>### Expanding the ESLint configuration
>If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:
>- Configure the top-level `parserOptions` property like this:
>```js
>   parserOptions: {
>    ecmaVersion: 'latest',
>    sourceType: 'module',
>    project: ['./tsconfig.json', './tsconfig.node.json'],
>    tsconfigRootDir: __dirname,
>   },
>```
>- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
>- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
>- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

3. Quitar el símbolo caret (^) del archivo **package.json**.
4. Si es necesario ingresa en la carpeta nueva `cd ./20231114_ReactNodeJS`.
5. Ejecutar la instalación con el comando (PNpM)[https://pnpm.io/es/]:
```bash
pnpm i
```
6. Levantar el proyecto en modo de Desarrollo
```bash
pnpm dev
```
> **Note** Añado al **.gitignore** principal o de la raíz lo relacionado con vite q no se debe subir:
>```yml
># Logs
>...
>pnpm-debug.log*
>
># Dependency directories
>...
>dist
>dist-ssr
>*.local
>.vite
>
># Editor directories and files
>.vscode/*
>!.vscode/extensions.json
>.idea
>.DS_Store
>*.suo
>*.ntvs*
>*.njsproj
>*.sln
>*.sw?
>```

## Pasos Iniciales para el Ejercicio #1

1. Elimino de **src/App.css** lo no requerido, dejo solamente:
```css
    #root {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
```
2. Por ahora no cambio el archivo **src/index.css**.
3. Limpio el **src/App.tsx**, para dejar lo básico:
```js
    import './App.css';
    function App() {
      return (
        <main>
          <h1> Mi Prueba Técnica</h1>
        </main>
      )
    }
    export default App;
```
4. Mejoro el esqueleto HTML de **src/App.tsx**:
```js
      return (
        <main>
          <aside>
            <h1>Prueba Técnica de React</h1>
            <h2>Añadir y eliminar elementos de una lista</h2>
            <form action="">
              <label htmlFor="">Elemento a Ingresar
                <input type="text" name="item" required placeholder="Elemento a Ingresar" />
              </label>
              <button>Adicionar</button>
            </form>
          </aside>
          <section>
            <h2>Lista de Elementos</h2>
            <ul>
              <li>Videjuegos 🎮</li>
              <li>Libros 📚</li>
              <li>Series 📺</li>
              <li>Películas 🎥</li>
            </ul>
          </section>
        </main>
      )
```
5. Agregamos Estilos en **src/App.css**:
```css
    main {
      display: grid;
      grid-template-columns: minmax(450px, 1fr) 1fr;
      gap: 16px;
    }
    h1{
      font-size:2em;
      line-height: 1.1;
      margin: 0;
    }
    h2{
      font-weight: 500;
      font-size: 1.1em;
      line-height: 1.1;
      margin: 0;
      opacity: 75%;
    }
    form {
      margin-top: 64px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    label{
      font-size:.8em;
    }
```
6. Aprovechamos los estilos del botón en **src/index.css**, para añadir el `input`:
```css
    button, input {
      ...
    }
    input {
      background:#222;
      border-radius: 4px;
      cursor: default;
      border: 1px solid #555;
      display: block;
      margin-bottom: 16px;
      width: 50%;
    }
```
7. Creamos el archivo **models/items.model.ts*, con la estructura a usar en los `items`:
```js
    export interface ItemsInterface{
      id:`${string}-${string}-${string}-${string}-${string}`, /*string,*/
      timestamp: number,
      text: string,
    }
```
8. Construimos los `items` en forma de arreglo de objetos, dentro de **src/App.tsx**.
```js
  const initialItems: ItemsInterface[] = [
    {
      id: crypto.randomUUID(),
      timestamp: Date.now()
      text: 'Videojuegos 🎮'
    },
    {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      text: 'Libros 📚'
    }
  ];
```
9. Los asignamos a un `useState`: `const [items, setItems]= useState(initialItems);`.
10. Cambiamos los `<li>` manuales por un `map` dentro de los `items`:
```js
              {items.map((item) => <li key={item.id} id={item.id} >{item.text}</li>)}
```
11. Creamos una funcion llamada `handleSubmit` dentro de **src/App.tsx**, para el control del botón del formulario. 
* `event.preventDefault()`, Siempre se pone en los submit.
* Recuperamos del formulario el `currentTarget` y de ellos los `elements`.
* Se valida q sea una instancia con `instanceof`.
* Si es falso solo se sale y ya.
* Llenamos una variable con los datos q vamos a usar.
* Almaceno el valor en los `items` definidos en `useState`.
* Limpiamos el imput value.
```js
      const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { elements } = event.currentTarget;
        const input = elements.namedItem('item');
        const isInput = input instanceof HTMLInputElement;
        if (!isInput || input === null) return;
        const newItem: ItemsInterface = {
          id: crypto.randomUUID(),
          timestamp: Date.now(),
          text: input.value,
        }
        setItems((prevItems)=>{
          return[...prevItems, newItem];
        });
        input.value='';
      }
```
12. Añadimos el botón para borrar el `item`, empezando en **App.tsx**:
```js
                <li key={item.id} id={item.id} >
                  {item.text}
                  <button onClick={() => onClickDelete(item)} className='delete-button' >
                    🗑️
                  </button>
                </li>
```
13. La función `onClickDelete()`, con el proceso para el borrado:
```js
      const onClickDelete = (item: ItemsInterface) => {
        // Filto Todos xcecpto el que quiero borrar
        setItems(prevItems => {
          return (prevItems.filter(currentItem => item.id !== currentItem.id))
        });
      }
```
