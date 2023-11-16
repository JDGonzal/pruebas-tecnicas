import './App.css';
import Items from './components/Items';
import { useItems } from './hooks/useItems';
import { useSEO } from './hooks/useSEO';
import { ItemId } from './models/items.model';

function App() {
  // Acá cambiamos el `useState` con mi propio `useItems`.
  const {items, addItem, removeItem}=useItems();
  // Llamamos el nuevo `useSEO`
  useSEO({
    title: `[${items.length}] Prueba técnica de React`,
    description: 'Añadir y eliminar elementos de una lista'
  })
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
    // Llamamos el hook de `useItems`
    addItem(input.value);
    // Limpiamos el imput value
    input.value = '';
  }

  const createHandleRemoveItem = (id: ItemId) => () => {
    // Llamamos el hook de `useItems`
    removeItem(id);
  }

  return (
    <main>
      <aside>
        <h1>Prueba Técnica de React</h1>
        <h2>Añadir y eliminar elementos de una lista</h2>
        <form action="" onSubmit={handleSubmit} aria-label='Adicionar elementos a la lista'>
          <label htmlFor="">Elemento a Ingresar
            <input type="text" name="item" required placeholder="Elemento a Ingresar" />
          </label>
          <button>Adicionar</button>
        </form>
      </aside>
      <section>
        <h2>Lista de Elementos</h2>
        {
          items.length === 0 ?
            <p>No hay Ítems</p> :
            <ul>
              {items.map((item) => {
                return (
                  <Items
                    {...item}
                    handleClick={createHandleRemoveItem(item.id)}
                    key={item.id} />)
              })
              }
            </ul>
        }
      </section>
    </main>
  )
}

export default App;
