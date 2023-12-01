# Prueba Técnica de React para Juniors y Trainee
* [Youtube con midulive](https://www.youtube.com/watch?v=XYpadB4VadY).📹

> **Note**
> Basado en estas APIs: 
> * [Facts Random](https://catfact.ninja/fact).
> * [Image Random](https://cataas.com/cat/says/hello).
>
> Recupera un hecho aleatorio (fact random) y muestra una imagen de un gato con la primera palabra del hecho.

> **Warning**
> Casi toda prueba técnica piden el manejo de 2 estados y uno depende del otro.
> * Se hará con custom Hook.
> * Se hará un Test e2e.

## Inicializar el proyecto
1. Crear el proyecto con el comando `npm create vite@latest`:
```bash
√ Project name: ... 20231201-react_cats
√ Target directory "20231201-react_cats" is not empty. Remove existing files and continue? ... yes
√ Package name: ... 20231201-react_cats
√ Select a framework: » Vanilla
? Select a variant: » TypeScript
```
2. Vamos a instalar **Vanilla**, para crear de forma manual el punto de entrada y luego lo que falte del **React**.
3. Ejecutar este `plugin` para completar iniciar el **React**:
```bash
pnpm install @vitejs/plugin-react -E
```
4. Instalar dos dependencias para el uso de **React**:
```bash
pnpm install react react-dom -E
```
5. Creamos la configuracion de vite, con el archivo **vite.config.ts**:
```js
import { defineConfig } from 'vite' //Importamos el `defineConfig`
import react from '@vitejs/plugin-react' //Importamos el plugin

export default defineConfig({ //Exportamos el `defineConfig`
  plugins: [react()], // Con único plugin de `react()` en el arreglo
})
```

## Creamos el punto de Entrada a la Aplicación
1. Borramos dos archivos **src/main.ts** y **src/counter.ts**, no requeridos en este ejercicio.
2. Creamos el archivo de punto de entrada con la extensión **.tsx**: **src/main.tsx**, con estas líneas:
```js
    import { createRoot } from 'react-dom/client';

    const root = createRoot(document.getElementById('app'));
    root.render(<h1> Hola Mundo</h1>)
```
3. hacemos un cambio en **index.html** , para el punto de entrada: `<script type="module" src="/src/main.tsx"></script>`.
