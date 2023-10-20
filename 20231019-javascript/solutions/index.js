// EJERCICIO 1
export const sortDescent = (value) => {
  // 1. validar que si sea un número 
  if (isNaN(value)) return false;
  // 2. Solo sacamos la parte entera
  value = Math.trunc(value)
  // 3. Dividir el número en un array, siendo string
  const array = value.toString().split('');
  // 4. Ordenamos, reversa, unido sin caracteres
  //    y lo anterior convertido a número
  const newNumber = Number(array.sort().reverse().join(''));
  return newNumber;
}

// EJERCICIO 2
export const safeGet = (obj, defaultValue, path) => {
  // 1. Validar que el `path` por ser opcional puede ser `undefined`
  if (typeof path === 'undefined') {
    // 2. Devolvemos una función q espera ser invocada con el path como argumento
    return (p) => safeGet(obj, defaultValue, p);
  }
  // 3. Dividir el path en un arreglo `keys` por cada punto
  const keys = path.split('.');
  // 4. Cargar el objeto en un variable llamada `current`
  let current = obj;
  // 5. Recorrer el arreglo `keys`
  for (const key of keys) {
    // 6. Si el valor actual y el tipo es objeto y la key es actual
    if (current && typeof current === 'object' && key in current) {
      // 7. Pongo el valor current al actual
      current = current[key];
    } // 8. Sino retorno el valor x defecto
    else return defaultValue;
  }
  // 9. Retorno el valor actual
  return current;
}

// EJERCICIO 3
const findSumSquare = (num) => {
  // 5.1. Creo un Array para acumular los divisores
  let dividers = [];
  // 5.2. Recorro del 1 al `num`, para hallar los divisores
  for (let i = 1; i <= num; i++) {
    // 5.3. Si el residuo es cero es un divisor y lo añado al arreglo
    if (num % i === 0) dividers.push(i);
  }
  // 5.4. Si el Array esta vacío devuelvo el objeto con valores en cero
  if (dividers.length === 0) return { base: 0, square: 0 }
  // 5.5. Debo acumular en una variable `amass`
  let amass = 0;
  // 5.6. Suma el cuadrado de cada divisor 
  for (let i = 0; i < dividers.length; i++) {
    amass = amass + Math.pow(dividers[i], 2);
  }
  // 5.7. Si la raiz cuadrada del valor existe es un valor correcto a devolver
  if (Number.isInteger(Math.sqrt(amass)))
    return { base: num, square: amass }
  else
    return { base: 0, square: 0 }
}

export const pairBaseSquare = (m, n) => {
  // 1. Valido que solo sean números
  if (isNaN(m) || isNaN(n)) return { base: null, square: null }
  // 2. Valido q `m` sea mayor o igual q `n` y q sean mayor a 1
  if (m < n || n < 1) return { base: 0, square: 0 }
  // 3. Creo el Array para devolver la respuesta
  let arr = [];
  // 4. Recorro los números que me dieron de límite 
  for (let i = n; i <= m; i++) {
    // 5. En la otra funcion evaluo si cumple las condiciones
    const pair = findSumSquare(i);
    // 6. Si el valor base es mayor a cero, lo añado en el Array de respuesta
    if (pair.base > 0) {
      arr.push({ base: pair.base, square: pair.square });
    }
  }
  // 7. Retorno la respuesta
  return arr;
}
