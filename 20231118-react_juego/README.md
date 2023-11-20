
# Curso de React desde cero: Crea un videojuego y una aplicación para aprender useState y useEffect
## [¡Aprende a usar useState y useEffect desarrollando el videojuego de 3 en raya!](https://www.youtube.com/watch?v=qkzcjwnueLA)
> **Note** 
> Repositorio original de [midudev](https://github.com/midudev/aprendiendo-react/commits?author=midudev) : [02-tic-tac-toe](https://github.com/midudev/aprendiendo-react/tree/master/projects/02-tic-tac-toe).

## Introducción
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
4. Si es necesario ingresa en la carpeta nueva `cd ./20231118-react_juego`.
5. Ejecutar la instalación con el comando (PNpM)[https://pnpm.io/es/]:
```bash
pnpm i
```
6. Levantar el proyecto en modo de Desarrollo
```bash
pnpm dev
```
7. Borrar de **src/App.tsx** todo dentro del `return()` y deja solo esto:
```js
  return (
    <>
      <h1>Tic Tac Toe</h1>
    </>
  )
```
8. Borra el `useState` y las importaciones no necesarias.
9. Sustituye el **src/index.css**, por el contenido de este repositorio [index.css](https://github.com/midudev/aprendiendo-react/blob/master/projects/02-tic-tac-toe/src/index.css).
10. Se crea una constante para manejar lo turnos en **src/App.tsx**:
```js
    const TURNS = {
      X: "❌",
      O: "⭕",
    };
```
11. Creamos el Tablero en forma de arreglo
`const board = Array(9).fill(null);`
12. Solo mostramos el arreglo en pantalla:
```js
        <main className="board">
          <h1>Tic Tac Toe</h1>
          <section className="game">
            { // Simplemente mostramos el arreglo por pantalla
              board.map((_, index) =>{
                return <div className="cell" key={index}>
                  <span className="cell__content">
                    {index}
                  </span>
                </div>
              })
            }
          </section>
        </main>
```
13. Creamos un componente en la carpeta **src/components** llamado **Square.tsx**:
```js
    const Square =({children, isSelected, updateBoard, index}:
      {children:any, isSelected:false, updateBoard:() => void, index:number})=>{
      return(
        <div className="square">
          {children}
        </div>
      )
    }
    export default Square;
```
14. Se importa `Square` en **App.tsx** y se pone dentro del `map`:
```js
            { // Simplemente mostramos el arreglo por pantalla
              board.map((_, index) =>{
                return (
                  <Square key={index} index={index}>
                    {index}
                  </Square>
                )
              })
```
15. Renombramos la variable `const board` por `const initBoard`, para usarlo luego en un estado:
16. Creamos el estado dentro del al función `function App() {`:
```js
    const [board, setBoard] = useState(initBoard);
```
17. Importamos el `useState` en **src/App.tsx**.
18. Creamos una `<section>` para el manejo de los turnos:
```js
          <section className="turn">
            <Square>{TURNS.X}</Square>
            <Square>{TURNS.O}</Square>
          </section>
```
## Interacción con el tablero
1. Añadimos al llamado el envio de una función llamad `updateBoard` el archivo **src/App**.
2. Añado a **src/componets/Square.tsx** el signo interrogante (?) si el valor no es obligatorio a ser recibido.
3. Pongo la nueva funcion `updateBoard` relacionada al `onClick`, en **src/componets/Square.tsx**:
```js
      return (
        <div className={className} onClick={updateBoard}>
          {children}
        </div>
      )
```
4. Lo mejoramos poniendo el `updateBoard` dentro de otra función:
```js
      const handleClick = () =>{
        if(!updateBoard) return;
        updateBoard();
      }
      
      return (
        <div className={className} onClick={handleClick}>
          {children}
        </div>
      )
```
5. Configuramos el turno en dos funciones:
```js
    const [turn, setTurn] = useState(TURNS.X);

      const updateBoard = ()=>{
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
      }
```
6. Dentro del `updateBoard` recibimos el `index` y lo dibujamos en el tablero antes del cambio de turno:
```js
      const updateBoard = (index: number) => {
        const newBoard = [...board] //Clonamos el arreglo llamado board
        newBoard[index] = turn; // Asignamos el valor al índice
        setBoard(newBoard); // Grabamos el arreglo recien obtenido
        // Alamacenamos el Proximo turno cuando se cambia de turno
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
        // Actualiza el estado de Turno
        setTurn(newTurn);
      }
```
7. Como se llama correctamente esta función enviando el índice es:
```js
                  <Square
                    key={index}
                    index={index}
                    updateBoard={() => updateBoard(index)}
                  >
```

