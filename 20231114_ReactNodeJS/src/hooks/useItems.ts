import { useState } from "react";
import { ItemId, ItemsInterface } from "../models/items.model";

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
