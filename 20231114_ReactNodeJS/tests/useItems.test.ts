// Lo básico para las pruebas
import { describe, test, expect } from 'vitest';
// Quiero el q renderiza los Hook y act
import { renderHook, act } from '@testing-library/react';
// Importamos la aplicación a renderizar
import { useItems, initialItems } from '../src/hooks/useItems';

describe('el hook de useItems', () => {
  test('Debe Adicionar y remover Items', async () => {
    // Guardo el resultado del hook para trabajarlo
    const { result } = renderHook(() => useItems());
    // Consulo lo esperado para validar
    expect(result.current.items).toEqual(initialItems);
    // Guardo lo voy a Escribir y luego comparar para borrar
    const typewriter = 'Películas 🎥';
    // Añado directamente usando el hook , dentro de `act`
    act(() => {
      result.current.addItem(typewriter);
    });
    expect(result.current.items.length).toBe(3);
    // borro directamente usando el hook , dentro de `act`
    act(() => {
      result.current.removeItem(result.current.items[2].id);
    });
    expect(result.current.items.length).toBe(2);
  })
});
