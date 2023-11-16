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
> **Note** 
> Añado al **.gitignore** principal o de la raíz lo relacionado con vite q no se debe subir:
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
12. Añadimos el botón para borrar el `item`, empezando en **src/App.tsx**:
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

## Vamos a hacer el Testing
1. Empezamos instalado dos librerías: `vitest` y `happy-dom` para Desarrollo.
```bash
pnpm i vitest happy-dom -D
```
2. Añadimos una configuración en **vite.config.ts**: `/// <reference types="vitest" />`.
3. Ponemos el test en el `export default`:
```js
    export default defineConfig({
      plugins: [react()],
      test: {
        environment: 'happy-dom'
      }
    })
```
4. Creamos un nuevo Script en el **package.json**:
```yml
      "test": "vitest",
```
5. Creamos una cerpeta llamada **tests**.
6. Creamos un archivo homónimo **App.test.tsx**, con una prueba en ella:
```js
    import { describe, test, expect } from 'vitest';

    describe('Vitest Básico', () => {
      test('Debería funcionar prueba de 1 es 1', () => {
        expect(1).toBe(1);
      })
    });
```
7. Corremos la prueba con el : `pnpm test` y luego de ver el mensaje de si corrió o falló, presionamos la letra `q`, para salir.
8. Basados en esta página [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) , instalamos esta librería:
```bash
pnpm install -D @testing-library/react
```
9. Añadimos mas importacions para usar mas adelante:
```js
    // Importamos simplente React
    import React from 'react';
    // Lo básico para las pruebas
    import { describe, test, expect } from 'vitest';
    // Quiero Renderizar y la pantalla de mi aplicación
    import {render, screen} from '@testing-library/react';
    // Importamos la aplicación a renderizar
    import App from  '../src/App';
    // Importamos para la prueba e2e
    import userEvent from '@testing-library/user-event';
```
10. Esta sería una prueba simple usando lo nuevo de `@testing-library/react`:
```js
    describe('<App/>', () => {
      test('Renderizamos la aplicación', ()=>{
        // Simplemente renderizamos la apliación
        render(<App/>)
        // Vemos lo q se renderizó :
        screen.debug();
        // Sabiendo  lo compone  realizo una `expect`
        expect(
          screen.getByText('Prueba Técnica de React')
        ).toBeDefined();
      })
    });
```
> **Warning** 
> Si te preguntan: ¿Si solo puede hacer un test a tu aplicación, cual harías?
> Respuesta: "un **end to end** (e2e)".
11. Se requiere simular al usuario con la libreria [user-event v13](https://testing-library.com/docs/ecosystem-user-event/), para la prueba **e2e**.
```bash
pnpm install -D @testing-library/user-event
```
12. Mejoramos desde el `describe` relacionado con `<App/>`;
```js
    describe('<App/>', () => {
      const { rerender } = render(<App />);
      test('Renderizamos la aplicación', async () => {
        // Simplemente renderizamos la apliación
        rerender(<App />);
        // Vemos lo q se renderizó :
        screen.debug();
        // Sabiendo  lo compone  realizo una `expect`
        expect(
          await screen.getByText('Prueba Técnica de React')
        ).toBeDefined();
      });
    });
```
13. Añadimos un test mas complejo para Adicionar y borrar un `item`:
```js
      test('Addicionamos un `item` y luego lo borramos', async () => {
        // Primero creamos el usuario
        const user = userEvent.setup();
        // renderizamos la aplicación
        rerender(<App />);
        // Buscamos el `input`
        const input = await screen.getByRole('textbox');
        // Esperamos que el `input` esté definido
        expect(input).toBeDefined();
        // Buscar el Formulario
        const form = screen.getByRole('form');
        // Esperamos que el `form` esté definido
        expect(form).toBeDefined();
        // Buscamos un elemento dentro de otro
        const button = form.querySelector('button');
        // Esperamos que el `button` esté definido
        expect(button).toBeDefined();
        // Guardo lo voy a Escribir y luego comparar para borrar
        const typewriter = 'Películas 🎥'
        // El usuario va escribir en el `input`
        await user.type(input, typewriter);
        // Click al botón
        await user.click(button!);
        // Asegurar q el elemento ha sido agregado
        const list = screen.getByRole('list');
        // Esperamos que el `list` esté definido
        expect(list).toBeDefined();
        // Se espera q se tengan 3 hijos en la lista
        expect(list.childNodes.length).toBe(3);
        // Vamos a borrar, primero el `item` a borrar
        const item = screen.getByText(typewriter);
        // Localizamos el `removeButton`
        const removeButton = item.querySelector('button');
        // Esperamos que el `removeButton` esté definido
        expect(removeButton).toBeDefined();
        // Damos click en el removeButton
        await user.click(removeButton!);
        //verificamos la cantidad regresa a 2
        expect(list.childNodes.length).toBe(2);
      });
```
14. Añadimos en **src/App.tsx** una etiqueta `aria-label` en el `<form>`:
```js
<form action="" onSubmit={handleSubmit} aria-label='Adicionar elementos a la lista'>
```

## Refactorizar con Componentes y mas

1. Crer una carpeta **src/components**.
2. Crear un archivo **src/components/Items.tsx**, ejecuto el *snippet* `rfce` y borro la primer línea de `import`.
> **Note**:
> El nombre de un `component` lleva la primera siempre en Mayúscula y la extensión **tsx**.
3. Paso de **src/App.tsx**, la parte del `<li>` al nuevo archivo  **src/components/Items.tsx**:
```js
    function items() {
      return (
        <li key={item.id} id={item.id} >
          {item.text}
          <button onClick={() => onClickDelete(item)} className='delete-button' >
            🗑️
          </button>
        </li>
      )
    }
```
4. Debemos pasar el `id` y el `text` a modo de `props`:
```js
    import { ItemId } from "../models/items.model";
    function Items({ id, text, handleClick}:
      { id: ItemId, text: string, handleClick: () => void}) {
      return (
        <li id={id} >
          {text}
          <button onClick={handleClick} className='delete-button' >
            🗑️
          </button>
        </li>
      )
    }

    export default Items;
```
5. Así llamamos el componente `Items` el valor desde **src/App.tsx**:
```js
                  {items.map((item) => {
                    return (
                      <Items
                      {...item}
                      handleClick={createHandleRemoveItem(item.id)}
                      key={item.id} />)
                  })
                  }
```
6. Cambiamos la función `onClickDelete = (item: ItemsInterface) => {` por `createHandleRemoveItem = (id: ItemId) =>()=> {`, por ende toda la función quedaría así:
```js
      const createHandleRemoveItem = (id: ItemId) =>()=> {
        // Filto todos excecpto el que quiero borrar
        setItems(prevItems => {
          return (prevItems.filter(currentItem => id !== currentItem.id))
        });
      }
```
7. Crea una carpeta llamada **src/hooks**.
8. Crear un archivo **src/hooks/useItems.ts**.
```js
    export const useItems=()=> {

    }
```
9. Movemos el `useState` y lo q lo inicializa de **src/App.ts** a **src/hooks/useItems.ts**:
```js
    const initialItems: ItemsInterface[] = [
      {
        id: crypto.randomUUID(),
        timestamp: Date.now(),
        text: 'Videojuegos 🎮',
      },
      {
        id: crypto.randomUUID(),
        timestamp: Date.now(),
        text: 'Libros 📚',
      }
    ];

    export const useItems = () => {
      const [items, setItems] = useState(initialItems);
    }
```
10. Movemos la lógica **src/App.ts** a **src/hooks/useItems.ts**, las funciones `addItem` y `removeItem`:
```js
    export const useItems = () => {
      const [items, setItems] = useState(initialItems);

      const addItem = (text: string) => {
        // Llenamos una variable con los datos q vamos a usar
        const newItem: ItemsInterface = {
          id: crypto.randomUUID(),
          timestamp: Date.now(),
          text: text,
        }
        //Almaceno el valor en los `items` definidos en `useState`
        setItems((prevItems) => {
          return [...prevItems, newItem];
        });
      }

      const removeItem =(id:ItemId)=>{
        // Filto todos excecpto el que quiero borrar
        setItems(prevItems => {
          return (prevItems.filter(currentItem => id !== currentItem.id))
        });
      }

      return{
        items,
        addItem,
        removeItem,
      }
    }
```
11. El archivo **src/App.tsx** , queda reducido a esto:
```js
    import ...Importaciones requeridas
    function App() {
      const {items, addItem, removeItem}=useItems();
      const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { elements } = event.currentTarget;
        const input = elements.namedItem('item');
        const isInput = input instanceof HTMLInputElement;
        if (!isInput || input === null) return;
        // Llamamos el hook de `useItems`
        addItem(input.value);
        input.value = '';
      }

      const createHandleRemoveItem = (id: ItemId) => () => {
        // Llamamos el hook de `useItems`
        removeItem(id);
      }

      return (
        ...Acá va todo lo del HTML o JSX.
      )
    }
```
