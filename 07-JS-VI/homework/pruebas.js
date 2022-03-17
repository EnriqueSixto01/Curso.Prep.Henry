
const string = "enrique";

console.log(string.charAt(0).toUpperCase() + string.slice(1));

console.log(string.slice(-4,-1))
/**************************************************************************/

function operacionMatematica(n1, n2, cb) {
    //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
    //Devolver el callback pasándole como argumentos los números recibidos.
    //Tu código:
    return cb(n1,n2);
  }

function multiplicarDosNumeros(n1,n2)
{
    return n1 * n2;
}

function dividieDosNumeros(n1,n2)
{
    return n1 / n2;
}
console.log(operacionMatematica(10,85,multiplicarDosNumeros)); //llamamos a la funcion que realiza la tarea de callback
                                                               //indicandole en su parametro la llamada a otra funcion
console.log(operacionMatematica(10,85,dividieDosNumeros));

/********************************************ForEach() ***************************************/

const arrNum = [1,2,3,4,5];

//Primero necesitamos una funcion callback (o funcion anonima)
arrNum.forEach(function(num){      //Debe tomar al menos un parametro que represente los elementos del arreglo
    console.log(num);
});


//con la representacion de la funcion flecha queda de la siguiente manera
arrNum.forEach(num => console.log(num));

//con parametros opcionales
arrNum.forEach((num, index) => {
    console.log('Indice: ' + index + ' Valor: ' + num);
});


/********************************************** Array.map() *************************************/
let arr = [2,4,6,8];

let modifiedArr = arr.map(function(element){   /*La function() callback es llamada en cada elemento del arreglo, 
                                                y el método map() siempre le pasa el element actual,*/                      
    return element * 3;                         //el index del elemento actual y el objeto array completo.
});

console.log(modifiedArr); //mostramos el nuevo arreglo con los elemntos multiplicados por 3

//Con función flecha
let modifiedArr2 = arr.map(x => x*2);
console.log(modifiedArr2);

let arr2 = [2, 3, 5, 7]

arr2.map(function(element, index, array){
    console.log(element);
    console.log(index);
    console.log(array);
    return element;
}, 80);
/**********************************************************************************/
function callback(array){
    return array * 3;
  }
  
function map(array,cb){

    return array.map((i => cb(i)));
}
  
  
  
  console.log(map([1,2,3],callback));