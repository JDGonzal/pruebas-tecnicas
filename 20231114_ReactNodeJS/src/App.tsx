import { useState } from 'react';
import './App.css';
import { ItemsInterface } from './models/items.model';

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

function App() {
  const [items, setItems] = useState(initialItems);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Primero siempre en el Submit es el `preventDefault`
    event.preventDefault();
    // Recuperamos del formulario el currentTarget y de ellos los `elements`
    const { elements } = event.currentTarget;
    // Estrategia 1, trampa de TypeScript
    // Tomamos un elementos llamado `item`:
    // const input = elements.namedItem('item') as HTMLInputElement; // No es recomendable
    // Estrategia 2, es asegurarse q el elemento si exista 
    const input = elements.namedItem('item');
    // Se valida q sea una instancia
    const isInput = input instanceof HTMLInputElement;
    if (!isInput || input === null) return;
    // Llenamos una variable con los datos q vamos a usar
    const newItem: ItemsInterface = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      text: input.value,
    }
    //Almaceno el valor en los `items` definidos en `useState`
    setItems((prevItems)=>{
      return[...prevItems, newItem];
    });
    // Limpiamos el imput value
    input.value='';
  }

  return (
    <main>
      <aside>
        <h1>Prueba Técnica de React</h1>
        <h2>Añadir y eliminar elementos de una lista</h2>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">Elemento a Ingresar
            <input type="text" name="item" required placeholder="Elemento a Ingresar" />
          </label>
          <button>Adicionar</button>
        </form>
      </aside>
      <section>
        <h2>Lista de Elementos</h2>
        <ul>
          {items.map((item) => <li key={item.id} id={item.id} >{item.text}</li>)}
        </ul>
      </section>
    </main>
  )
}

export default App;
