function agregarItemAlFinalDelArray(array, elemento) {
    // Añade el "elemento" al final del array
    // y devuelve el array
    // Tu código:
    
    array.push(elemento);
    return array;
  
  }

  let arreglo = [1,2,3,4,5]
  console.log(agregarItemAlFinalDelArray(arreglo,6))
  /******************************************************************************** */

  function devolverPrimerElemento(array) {
    // Devuelve el primer elemento de un  array (pasado por parametro)
    // Tu código:
    return array[2]
  }

  let ar =[1,2,3,4,5]
  console.log(devolverPrimerElemento(ar))
/******************************************************************************** */
  function incrementarPorUno(array) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Aumenta cada entero por 1
    // y devuelve el array
    // Tu código:
    
    var arr = []
  for(let i=0; i<array.length; i++)
  {
    arr.push(array[i]+1)
  }
  return arr
}

  var arr1 = [1,2,3,4,5]
  console.log(incrementarPorUno(arr1))
  /******************************************************************* */
  function agregarNumeros(numeros) {
    // "numeros" debe ser un arreglo de enteros (int/integers)
    // Suma todos los enteros y devuelve el valor
    // Tu código:
    let sum =0;
    for(let i=0;i<numeros.length;i++)
    {
      sum += numeros[i];
    }
    return sum;
  }

  let num = [2,5,4,9]
  console.log(agregarNumeros(num))

const arr = [1, 2, 3, 4];
const reducer = (accumulator, curr) => accumulator + curr;
console.log(arr.reduce(reducer));

var lodash = require('lodash');
var arr1 = [3, 6, 1, 5, 8];
var sum = lodash.sum(arr1);
console.log(sum); 
/********************************************************************************************* */
function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  switch(numeroDeDia)
  {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return "Es dia Laboral";
    case 1:
    case 2:
      return "Es fin de semana";
  }
} 

console.log(diaDeLaSemana(2));
console.log(diaDeLaSemana(1));
/****************************************************************************** */
function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var aux = n.toString();

  if(aux[0] === "9") return true
   
  return false;
}

console.log(empiezaConNueve(956));
console.log(empiezaConNueve(56));
console.log(empiezaConNueve(9));
/*************************************************************************/
function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var newarr = [];
  for(let i=0; i<array.length;i++)
  {
    if(array[i]> 100)
    {
      newarr.push(array[i]);
    }
  }
  return newarr;
}

console.log(mayorACien([100,200,5,8,500]));