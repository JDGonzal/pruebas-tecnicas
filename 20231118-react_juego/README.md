
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

## Ajustando el Final del juego
> **Note**
> ❌ ESTO ESTA MAL
>
> Jamás se debe mutar las `props` y el `estado`, ejemplo:
>```js
>     board[index] = turn; // Se deben tratar como si fueran inmutables
>     setBoard(board); // Grabamos el arreglo recien obtenido
>```
> ✅ ESTO ES LO CORRECTO
>
> Separar en una nueva variable y luego grabar ese nuevo valor, ejemplo:
>```js
>     const newBoard = [...board] //Clonamos el arreglo llamado board
>     newBoard[index] = turn; // Asignamos el valor al índice
>     setBoard(newBoard); // Grabamos el arreglo recien obtenido
>```
1. Se sale y no se hace nada si hay valores en esa posición
```js
        if(board[index]) return;
```
2. Creamos un estado con valores: null no hay ganador, false hay empate:
```js
      const [winner, setWinner] = useState(null);
```
3. Definición de comnos ganadores:
```js
    const WINNER_COMBOS = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
```
4. Revisamos si hay ganador: `const newWinner = checkWinner(newBoard);` y si hay ganador se define la variable: `if (newWinner) setWinner(newWinner);`
5. Añadimos una `<section>` para mostrar una modal:
```js
          {winner !== null && (
            <section className="winner">
              <div className="text">
                <h2>
                  {winner ? 'Ganó' : 'Empate'}
                </h2>
                <header className="win">
                  {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                  <button onClick={resetGame}>Empezar de nuevo</button>
                </footer>
              </div>
            </section>
          )}
```
6. Creamos la función `resetGame`:
```js
      const resetGame = () => {
        setBoard(initBoard);
        setTurn(TURNS.X);
        setWinner(null);
      }
```
7. Ponemos otro botón debajo del título para reiniciar el juego:
```js
    <button onClick={resetGame}>Empezar de nuevo</button>
```

## Completamos el juego y separamos componentes
1. Completamos el `//TODO: Verificar si el juego está terminado (Game is over)`.
```js
        if (newWinner) setWinner(newWinner)
        //TODO: Verificar si el juego está terminado (Game is over)
        else if (checkEndGame(newBoard as [])) {
          setWinner(false); //Empate
```
2. Y esta será a función `checkEndGame`:
```js
      const checkEndGame = (newBoard: []) => {
        // Revisamos si hay empate, si no hay espacios vacíos en el tablero
        return newBoard.every((square) => square !== null);
      }
```
3. Instalemos confetti y el manejo de tipo (`@types`)
```bash
pnpm i canvas-confetti @types/canvas-confetti -E
```
4. La Importamos y la usamos:
```js
      if (newWinner) {
        confetti();
        setWinner(newWinner)
      } //TODO: Verificar si el juego está terminado (Game is over)
      else if (checkEndGame(newBoard as [])) {
        setWinner(false); //Empate
      }
```
5. Creamos una carpeta de **src/utils** y dentro un archivo **constans.ts**, pasamos lo siguiente:
```js
    export const TURNS = {
      X: "❌",
      O: "⭕",
    };

    export const initBoard = Array(9).fill(null); 

    export const WINNER_COMBOS = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
```
6. Crear en la carpeta **src/utils** el archivo **board.ts** y movemos esto:
```js
    import { WINNER_COMBOS } from ".";

    // Función para detectar si hubo ganador:
    export const checkWinner = (boardToCheck: []) => {
      // Recorremos los WINNER_COMBOS
      for (const combo of WINNER_COMBOS) {
        // Separamos cada valor del combo
        const [a, b, c] = combo;
        // Comparamos los datos con el arreglo
        if (
          boardToCheck[a] && //Hay algún valor
          boardToCheck[a] === boardToCheck[b] && //
          boardToCheck[a] === boardToCheck[c] // 
        ) {
          return boardToCheck[a];
        }
      }
      //Si no hay ganador retornamos el null
      return null;
    }
```
7. Crear en la carpeta **src/components** el archivo **WinnerModal.tsx**, correr el comando `rfce` y borrar la primera línea, y luego con esto:
```js
    import { Square } from "."
    function WinnerModal({ winner, resetGame }: { winner: boolean | null, resetGame: () => void }) {
      if (winner === null) return null;
      return (
        <>
          <section className="winner">
            <div className="text">
              <h2>
                {winner ? 'Ganó' : 'Empate'}
              </h2>
              <header className="win">
                {winner && <Square>{winner}</Square>}
              </header>
              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        </>
      )
    }
    export default WinnerModal;
```
