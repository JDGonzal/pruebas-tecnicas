// @ts-check

// Función para verificar si un array está ordenado de menor a mayor
export const verificarArrayOrdenado = (arr: Array<any>) => {
  const estaOrdenado = arr.every((val: any, i: number, arr: any[]) => i === 0 || arr[i - 1] <= val);
  console.log(
  `\n🔍 Verificación: El array ${estaOrdenado ? 'SÍ' : 'NO'} está correctamente ordenado.`
);
};
