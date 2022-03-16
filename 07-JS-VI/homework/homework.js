// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  //nombre[0]  = nombre[0].toUpperCase();
  return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
   cb(); //dentro de el argumento cb que se pasa como argumento a invocarCallback, hay otra funcion.
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1,n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  let sum =0;
  for(let i=0;i<numeros.length;i++)
  {
    if(numeros[i] % 1 === 0){
      sum += numeros[i];
    }
    
  }

  cb(sum);
  
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  //let array = [1,2,3,4,5]
  array.forEach(function(num){
    cb(num);

  });

  //array.forEach((elemento) => cb(elemento));

}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
 let newArr = [];
 for(let i=0;i<array.length;i++)
 {
   newArr.push(cb(array[i]))
 }
 return newArr;

 //con map
//return array.map((elemento)=> cb(elemento));
}


function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  newArr = [];
  for(let i=0;i<array.length;i++)
  {
    if(array[i].charAt(0) === 'a')
    newArr.push(array[i])
  }
  return newArr;

  //con el metodo .filter
  //return array.filter((item) => item[0] === "a");

  //return array.filter(function(item)
  //  if(item[0] === "a"){
  // return item;
  //});
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
