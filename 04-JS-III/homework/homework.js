// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array.pop();
  //return array[array.length -1]
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var arr = [];
  for(let i=0; i<array.length; i++)
  {
    arr.push(array[i]+1);
  }
  return arr;
  /**
   for(let i=0;i<array.lenght;i++)
   {
     array[i]= array[i] +1;
   }
   return array;
  }
   */
  
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  
  array.push(elemento);
  return array;


}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(" ");

}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(let i=0; i<array.length -1; i++)
  {
    if(array[i] === elemento) return true;
  }
  return false;
  //otra solucion
  //return array.includes(elemnto);

}


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


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  /*let suma = 0;
  let promedio = 0;
  for(let i=0; i<resultadosTest.length;i++)
  {
      suma += resultadosTest[i];
      promedio = suma / resultadosTest.length
  }
  return promedio*/
  return agregarNumeros(resultadosTest) / resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  //return Math.max(...numeros); //la funcion Math.max() devuelve el numero mayor de un array
   var mayor = numeros[0];
  for(let i=0;i<numeros.length;i++)
  {
    if(mayor < numeros[i])
    {
      mayor = numeros[i];
    }
  }
  return mayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length === 0) return 0;
  if(arguments.length === 1) return arguments[0];

  let producto = 1;
  for(let i=0;i<arguments.length;i++)
  {
    producto *= arguments[i];
  }
  return producto

}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var aux =[]
  for(let i=0; i<arreglo.length; i++) // [5,25,56,8,15]
  {
    if(arreglo[i] > 18) 
    aux.push(arreglo[i])
    
  }
  return aux.length

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí  
  //Solucion 1 
  /**if (numeroDeDia === 1 || numeroDeDia ===7 ) return "Es fin de semana
      else
        "Es dia Laboral"
  */
  switch(numeroDeDia)
  {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return "Es dia Laboral"
    case 1:
    case 7:
      return "Es fin de semana"
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var aux = n.toString();

  if(aux[0] === "9") return true
   
  return false;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var aux = arreglo[0]
  for(let i=1; i<arreglo.length; i++)
  {
    if(aux !== arreglo[i]) return false
  }
  return true
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let meses = []
  
  for(let i=0;i<array.length;i++)
  {
    if(array[i]=== "Enero" && array[i] === "Marzo" && array[i] === "Noviembre")
    {
      meses.push(array[i])
    }
  }
  return "No se encontraron los meses pedidos"
}


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


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let num = [];
  let copia = numero;
  for(let i=0;i<10;i++)
  {
    copia = copia + 2;
    
    if(copia === i) break;
    else{
      num.push(copia);
    }
  }
  if(i<10){
    return "Se interrumpió la ejecución"
  }
  else{
    return num;
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};