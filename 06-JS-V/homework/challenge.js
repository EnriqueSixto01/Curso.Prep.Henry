
/*var inventario = [
    {
        nombre: 'tenedor',
        cantidad: 6
    },
    {
        nombre: 'cuchara',
        cantidad: 4
    }
]


console.log(inventario[0].nombre);          //accedemos a la propiedad nombre del primer objeto
console.log(inventario[0].cantidad);        //accedemos a la propiedad cantidad del primer objeto

function checkInventario(inventario, item) {

            if(inventario[1].nombre === item)   //si el valor que contiene la propiedad nombre del primer objeto es igual
            {                                   //a el nombre que le pasamos como parametro(item) a la funcion
                return inventario[1].cantidad   //nos devolvera el valor de el parametro en este caso cantidad
            }
            else return 0                       //de lo contrario devolvera 0
}

console.log(checkInventario(inventario,'cuchara'))
function checkInventario(inventario, item) {
//for(let i=0;i<inventario.length;i++){
    if(inventario[0].nombre === item)   //si el valor que contiene la propiedad nombre del primer objeto es igual
    {                                   //a el nombre que le pasamos como parametro(item) a la funcion
        return inventario[0].cantidad   //nos devolvera el valor de el parametro en este caso cantidad
    }
    else if(inventario[1].nombre === item)
    {
        return inventario[1].cantidad
    }
    else
        return 0;
}



let array =[2,9,10,15,2];
console.log(array.indexOf(9));
console.log(array.indexOf(1));
console.log(array.indexOf(9,2));
console.log(array.indexOf(2,-1));
console.log(array.indexOf(2));
console.log(array.indexOf(2,-4));


function agregarStringInvertida() {
    // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
    // El método debe llamarse "reverse"
    // Ej: 'menem'.reverse() => menem
    // 'toni'.reverse() => 'inot'
    // Pista: Necesitarás usar "this" dentro de "reverse"
      String.prototype.reverse = function(){
        return this.split("").reverse().join("");
      }
      String.prototype.reverse = function(){
        let invertida = "";
        for(let i = this.length-1; i>=0; i--)
        {
          invertida = invertida + this.charAt(i);
        }
          return invertida;
        }  
  }


*/

/*********************************************************************************************************/
// Crear una clase para construir objeto de tipo Persona.
  // el constructor debe recibir:
  // nombre (string) , edad (integer) , hobbies (array de strings) , amigos (array de objetos)
/*
class Persona {
    constructor(string, edad, hobbies, amigos) {
      this.string = string,
      this.edad = edad,
      this.hobbies = hobbies,
      this.amigos = amigos

    }

    addFriend(nombre, edad) {
        // el metodo addFriend recibe un string nombre y un entero edad y debe agregar un objeto:
        // { nombre: nombre, edad: edad} al arreglo de amigos de la persona.
        // no debe retornar nada.
        this.amigos.push({nombre:nombre, edad:edad});
    }

    addHobby(hobby) {
        // este método debe agregar un hobby (hobby) al arreglo de hobbies de la persona.
        // no debe retornar nada.
        this.hobbies.push(hobby);
  
      }
      getFriends() {
        // Escribe una función que retorne un arreglo con sólo los nombres del arreglo de amigos
        // de la persona.
        // Ej:
        // persona.getFriends() // retorna ['toni', 'Leo', 'Manu']
          let aux =[];
          for(let i =0;i<this.amigos.length;i++)
          {
            aux.push(this.amigos[i].nombre)
          }
          return aux;
      }
  
      getHobbies() {
        // Escribe una función que retorne un arreglo con los hobbies de la persona
        // Ej:
        // persona.getHobbies() // retorna ['correr', 'dormir', 'nadar']
        return this.hobbies;
    }
        getPromedioEdad() {
            // Escribe una función que retorne el promedio de edad de los amigos de una persona
            // ej, si la persona tuviera estos amigos:
            // {
            //   amigos: [{
            //     nombre: 'toni',
            //     edad: 33,
            //   }, {
            //     nombre: 'Emi',
            //     edad: 25
            //   }]
            // }
            // persona.getPromedioEdad() // retorna 29
            let aux = [];
            let sum =0;
            for(let i =0;i<this.amigos.length;i++)
            {
                aux.push(this.amigos[i].edad)
                sum+=aux[i];
            }
            return sum / aux.length;
      
          }
      

}



let enrique = new Persona("enrique",26,["guitar","leer"],[{nombre: "dany", edad:26}]); //Persona objeto
//let yio = new Persona("yio",26,["musica","leer"],[{nombre: "bri", edad:26}]); //Persona objeto

console.log(enrique.amigos);
enrique.addFriend("yio",26);
enrique.addFriend("bri",25);
enrique.addHobby("cantar");
enrique.addHobby("bailar");
console.log(enrique.getFriends());
console.log(enrique);
console.log(enrique.getHobbies());
console.log(enrique.getPromedioEdad());

//console.log(yio);
*/


/*
let arrObj = [];

const carro = [
    {
    marca: "mazda",
    año: 2022
    },

    {
        marca: "nissan",
    año: 2021
    }
]

arrObj.push(carro[1]);
//console.log(arrObj[0][0].año);
console.log(arrObj);



function cuantosRepetidos(array, elemento) {
  // La funcion llamada 'cuantosRepetidos' recibe como argumento un array de arrays llamado 'array' y un string llamado 'elemento'
  // Cada subarray contiene strings.
  // Debe devolver la cantidad de veces que 'elemento' se repite dentro de los subarrays.
  // Ej:
  // cuantosRepetidos([['manzana', 'naranja'],['sandia', 'pera'],['uva', 'manzana']], 'manzana') debe retornar 2
  // ya que 'manzana' se repite 2 veces.
  // Nota: Podes usar for loops anidados.

  // Tu código aca:
  let aux =[];
  for(let i=0;i<array.length;i++)//este for itera al primer arreglo o en su defecto  a las filas
  {
    //console.log(array[i]);
    for(let j=0;j<array[i].length;j++)
    { 
        console.log(array[i][j]);

        if(elemento === array[i][j])
          aux.push(elemento);      
    }
    
  }
  return aux.length;
           
}
array= [
  ["manzana","naranja","manzana"],
  ["sandia", "pera"],
  ["uva","manzana"],
]


console.log("El indice [0] imprime: " + array[0]);
console.log("El indice [1] imprime: " + array[1]);
console.log("El indice [2] imprime: " + array[2]),


console.log(cuantosRepetidos(array,"manzana"));



function print(arr) {
  for (let i = 0; i < arr.length; i++) {  //este for itera al primer arreglo o en su caso a las filas
    
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
  }
return;
}

let nest= [[1,2],[3,4],[5,6]]

console.log(print(nest));
/******************************************************************************************/
/*
function index() {
    // Escribi una función encontraIndex en el prototipo de Arrays,
    // que recibe un elemento.
    // La function tiene que devolver el indice (index) del primer elemento que coincida con el pasado como parametro dentro del array.
    // Si el elemento se repite dentro del Array, este devuelve el indice del Primer elemento.
    // Si no existe ese elemento la funcion debe devolver -1
    // NO USAR LA FUNCION indexOf DE LOS ARREGLOS.
    // ej:
    // var numeros = [5, 6, 4, 65, 8, 4]
    // numeros.encontraIndex(4) debe devolver 2.
    // ya que el numero 4 se encuentra en la posicion 2 dentro del array.
    // numeros.encontraIndex(23) debe devolver -1 ya que ese elemento no existe en ese array.
  
    // Tu código aca:
     Array.prototype.encontraIndex = function(elemento)
      {  
        return this.findIndex(numero => numero === elemento)
      }
    }

  
  const aux = [5,6,4,65,8,4]
  const a= aux.index(65); //==> devuelve el indice 3
  console.log(a);
  
  function encuentraIndex(array, elemento) {
    for (let i=0;i<array.length;i++) {
      if (array[i] === elemento) {
        return i;
      }
    }
    return -1;
  }



  const miArray = [2,4,6,8,10,1,3,6,7,9];
  let index = encuentraIndex(miArray, 6);
  console.log('En la posición', index);*/
/*
  function agregarPropiedad(amigos,propiedad)
  {
    
   for(let i=0;amigos.length;i++)   //recorremos cada uno de los objetos dentro de amigos
   {
     
     if(amigos[i]!==amigos[propiedad]) //si dentro de cada uno de los objetso en amigos hay esa propiedad
     {
      amigos[propiedad]=propiedad;   //agregamos la propiedad al objeto
      amigos[propiedad] = null;
     }
     

     return amigos;
     


   }
  }

  let friends = [
    {
      nombre: "toni"
    },
    {
      nombre:"Emi",
      edad: 25
    }
  ]

  console.log(agregarPropiedad(friends,"edad"));
*/


function soloNumeros(array) {
  // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
  // Debe devolver un arreglo con solo los enteros.
  // Ej: 
  // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]

  // Tu código aca:
  let aux =[];
  for(let i=0;i<array.length;i++)
  {
    if(array[i] > 0 && array[i] % 1 === 0)
    aux.push(array[i])

  }
  return aux;

}


let numInt = [1,2.6,"Luis",8,35.48,"Sixto"];
console.log(soloNumeros(numInt));

const n = 5.75;
const l = Math.floor(n);
console.log(l)