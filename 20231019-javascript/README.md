# Prueba Técnica Javascript

[PRUEBA TÉCNICA: MEJORA tus habilidades de PROGRAMACIÓN](https://www.youtube.com/watch?v=uFLgPKU2gmY&t=183s)

Las pruebas de código son habituales en las entrevistas técnicas para puestos de programador o desarrollador, ya seas Junior, Mid (Semi-Senior) o Senior.

Resuelvo 3 ejercicios de prueba técnica para trabajar en una Startup Tech. Los resuelvo utilizando JavaScript como lenguaje de programación, pero puedes utilizar cualquier lenguaje en el que te sientas cómodo.

## Antes de Comenzar

1. Estar seguro que estás en la carpeta "20231019-javascript".
2. Crear el archivo "package.json" con el comando: `npm init -y`.
3. Sigamos el ejemplo anterior y pongamos los ejercicios en un mismo archivo "index.js" dentro de la carpeta "solutions".
4. Creamos adicional la carpeta "test" y dentro un archivo llamado "index.test.js".
5. Cambiar en el archivo "package.json" lo relacionado con el `scripts`:
```json
 "scripts": {
    "test": "node --test"
  },
```
6. Añadir en el archivo "package.json" debajo del `main` esto: `"type": "module",`

## 03:07 EJERCICIO 1
Usando Javascript, implementar una función q dado un número entero, retorne otro número formado por sus mismos dígitos ordenados descendentemente.

## 08:40 EJERCICIO 2
Utilizando JavaScript, implementar un método que permita acceder de forma segura a propiedades de un objeto, Incluso cuando dichas propiedades no existen.

La función debe admitir tres parametros:
* El objeto al que se va a acceder.
* El valor por defecto que va a devolver la función en caso de que la propiedad no exista dentro del objeto.
* Y por último, un string indicando el `path` de la propiedad a consultar.

El `path` delimitará el camino en el cual se encuentra la propiedad a consultar Los distintos niveles de profundidad se delimitarán con puntos. Además este último parametro es opcional. En caso de no proveerse, la función devolverá otra función que esperará ser invocada con el `path` de la propiedad como argumento.

## 15:19 EJERCICIO 3
Siguiendo este ejemplo:
* Los divisores de 42 son: 1, 2, 3, 6, 7, 14, 21, 42.
* Los cuadrados respectivos de estos divisores son: 1, 4, 9, 36, 49, 196, 441, 1764. 
* La suma de los cuadrados de estos divisores es: 2500. 
* Que puede expresarse como 50 * 50, ¡un cuadrado!

Se pide implementar una función que reciba dos parametros: `n` y `m`, 
siendo **m ≥ n ≥ 1** y halle todos los números entre `n` y `m` que cuya suma de sus divisores al cuadrado formen un cuadrado.
La función debe devolver un array con todos los números en ese rango formados por pares de valores:
* Cada par de valores se compondra de: número que cumple la condición en primer lugar
* Y la suma de los divisores al cuadrado en la segunda.
