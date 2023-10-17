// Ejercicio-7
// 7 - Diseña una API REST utilizando Express que permite a los usuarios crear, leer, modificar, actualizar y eliminar elementos de una lista.

// La lista tendrá objetos que tienen la siguiente forma:

//* {
//*   id: 1,
//*   content: 'Item 1'
//* }

// Haz la solución en el archivo `solutions/server.js` y exporta el `app` y `server` creado.
// Instala Express con `npm install express`. No te preocupes por CORS.
// 01:29:59
//! Empiezo con lo básico Importando `express`
import express from 'express';

//! Exportamos la constante de `app`
export const app = express();

//* Añado este middelware requerido por el POST
app.use(express.json());

//! Creamos la constante de los `items`
const items = [{
  id: 1,
  content: 'Item 1'
}]

//* Un REST API, tiene simpre los mismo métodos:
//* * GET /items        -> Recuperarlos Todos
//* * GET /items/:id    -> Recuperar uno(1)
//* * POST /items       -> Crear uno nuevo
//* * PUT /items/:id    -> Modificar uno(1)
//* * DELETE /items/:id -> Borrar uno(1)

//! Método: GET /items        -> Recuperarlos Todos
app.get('/items', function (req, res) {
  //! Retornamos todos los items
  return res.status(200).json(items);
});

//! Método: GET /items/:id    -> Recuperar uno(1)
app.get('/items/:id', function (req, res) {
  //! Debemos capturar la `id` de la URL dinámica es decir de los parámetros
  const { id } = req.params;
  //! Localizamos en el arreglo el item buscado
  // const itemsFounded = items.find(item => item.id === id);// Error este id hay q convertirlo a número
  //? Corrección convertir a número el valor del Id
  const itemsFounded = items.find(item => item.id === Number(id));
  //! Retornamos el Item hallado
  return res.status(200).json(itemsFounded);
});

//! Método: POST /items       -> Crear uno nuevo
app.post('/items', function (req, res) {
  //! Recuperamos el contenido del `body`
  const { content } = req.body; //* Hay un error y requiere un middelware
  //! Incrementamos el id, solo tomando la longitud del arreglo y sumando 1
  const newId = items.length + 1;
  //! El nuevo elemento es el newId y el content
  const newItem = { id: newId, content }
  //! Simplemente se añade al arreglo con un `push`
  items.push(newItem);
  //! Finalmente retornamos el nuevo elemento
  return res.status(200).json(newItem);
});

//! Método: PUT /items/:id    -> Modificar uno(1)
app.put('/items/:id', function (req, res) {
  //! Debemos capturar la `id` de la URL dinámica es decir de los parámetros
  const { id } = req.params;
  //! Tomamos el content del `body`
  const { content } = req.body;
  //! Localizamos en el arreglo el item buscado
  // const itemsFounded = items.find(item => item.id === id);// Error este id hay q convertirlo a número 
  //? Corrección del id en número
  const itemsFounded = items.find(item => item.id === Number(id));
  //? Deberiamos valorar si no lo halla y devolver un error 404
  if (!itemsFounded) { return res.status(404).json(); }
  //! Y hacemos una mutación directa
  itemsFounded.content = content; //* OJO: Esto no se debe hacer jamás en producción
  //! Retornamos el Item hallado
  return res.status(200).json(itemsFounded);
});

//! Método: DELETE /items/:id -> Borrar uno(1)
app.delete('/items/:id', function (req, res) {
  //! Debemos capturar la `id` de la URL dinámica es decir de los parámetros
  const { id } = req.params;
  //! Localizamos el índice
  // const itemIndex = items.findIndex(item => items.id === id);// Error este id hay q convertirlo a número
  //? Corrección del id en número
  const itemIndex = items.findIndex(item => items.id === Number(id));
  //? Deberiamos valorar si no lo halla y devolver un error 404
  if (itemIndex !== -1) { return res.status(404).json(); }
  //! Usamos el `splice` para eliminar un dato del arreglo
  items.splice(itemIndex, 1);
  //! Solo retornamos el `status(200)`
  return res.status(200).json();
});

//! Finalmente se TIENE q crear el servidor
export const server = app.listen(process.env.PORT ?? 3000);
