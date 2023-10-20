import { sortDescent, safeGet, pairBaseSquare } from "../solutions/index.js";

// -----Test basic elements
import { describe, it } from 'node:test'
import { equal } from 'node:assert/strict'

describe('1. Ordenar Descendente un número Entero', () => {
  it('1.1. sortDescent 157834', () => {
    const value = sortDescent(157834)
    equal(value, 875431); // Ese es el número esperado
  });
  it('1.2. sortDescent abc', () => {
    const value = sortDescent('abc')
    equal(value, false); // Es falso por no ser número
  });
  it('1.3. sortDescent 6521795.24', () => {
    const value = sortDescent(6531798.24)
    equal(value, 9876531); // Solo ordena la parte entera
  });
});

describe('2. Obtener de manera segura propiedades de un objeto', () => {
  const obj = {
    a: {
      b: {
        c: 10,
        d: null,
        e: false,
      }
    },
    f: 0
  }
  it('2.1. safeGet a.b.c.=10', () => {
    const value = safeGet(obj, 'none', 'a.b.c')
    equal(value, 10); // Ese es el número esperado
  });
  it('2.2. safeGet f=0', () => {
    const value = safeGet(obj, 'none', 'f')
    equal(value, 0); // Ese es el número esperado
  });
  it('2.3. safeGet a.b.d=null', () => {
    const value = safeGet(obj, 'none', 'a.b.d')
    equal(value, null); // Ese es el número esperado
  });
  it('2.4. safeGet e=none', () => {
    const value = safeGet(obj, 'none', 'e')
    equal(value, 'none'); // Ese es el número esperado
  });
});

describe('3. Listar números con (divisores)² y sumados den un cuadrado', () => {
  it('3.1. pairBaseSquare "a","b"', () => {
    const value = pairBaseSquare('a', 'b'); // Son caracteres y no números
    equal(JSON.stringify(value), JSON.stringify({ base: null, square: null })); // No son números
  });
  it('3.2. pairBaseSquare 5,8', () => {
    const value = pairBaseSquare(5, 8); // `m` es mayor q `n`
    equal(JSON.stringify(value), JSON.stringify({ base: 0, square: 0 })); // No son números
  });
  it('3.3. pairBaseSquare 42,42', () => {
    const value = pairBaseSquare(42, 42); // El ejemplo es solo el 42
    equal(JSON.stringify(value), JSON.stringify([{ base: 42, square: 2500 }])); // No son números
  });
  it('3.3. pairBaseSquare 100,1', () => {
    const value = pairBaseSquare(100, 1); // del 1 al 100 , solo hay dos 
    equal(JSON.stringify(value), JSON.stringify([{ base: 1, square: 1 }, { base: 42, square: 2500 }])); // No son números
  });
});
