// Importamos simplente React
import React from 'react';
// Lo básico para las pruebas
import { describe, test, expect } from 'vitest';
// Quiero Renderizar y la pantalla de mi aplicación
import { render, screen } from '@testing-library/react';
// Importamos la aplicación a renderizar
import App from '../src/App';
// Importamos para la prueba e2e
import userEvent from '@testing-library/user-event';

describe('Vitest Básico', () => {
  test('Debería funcionar prueba de 1 es 1', () => {
    expect(1).toBe(1);
  })
});

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
});
