
function Usuario(nombre, github){
    this.nombre = nombre;
    this.github = github;
}

Usuario.prototype.introduccion = function(){   //Se crea un prototipo para la funcion constructor "Usuario" en donde 
                                               //se guardara el metodo "introduccion"
{
    return "Mi nombre es " + this.nombre + ", mi ususario de Github es " + this.github + ".";
}
}

let yio = new Usuario("Yio", "yioflow");  //creamos una instancia de objeto Usuario
let enrique = new Usuario("Enrique", "enriquesix");  //creamos una segunda instancia de objeto Usuario

console.log(yio.introduccion());      //El nuevo objeto creado llama al metodo que se encuentra en el prototipo Usuario
console.log(enrique.introduccion());


/***********************************************************************************/
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  Person.prototype.name = function() {
    return this.firstName + " " + this.lastName
  };
  
  const myFather = new Person("John", "Doe", 50, "blue");
  console.log("My father is " + myFather.name());
  /*********************************************************/

function newPeople(nombre,apellido,edad,dir)
{
  let yio = new Persona({nombre,apellido,edad,dir})
  return yio;
}
function Persona(objeto)
  {
    this.nombre = objeto.nombre;
    this.apellido = objeto.apellido;
    this.edad = objeto.edad;
    this.domicilio = objeto.domicilio;
  }
  Persona.prototype.detalle = function(){
    return{
      Nombre: this.nombre,
      Apellido: this.apellido,
      Edad: this.edad,
      Domicilio: this.domicilio
    }
  }
let dany = new Persona({nombre: "dany", apellido:"sachez", edad:26 ,domicilio: "palosolo"});
console.log(dany.detalle()); //El metodo detalle me devuelve el mismo objeto que le envio
console.log(newPeople("Yio","Velazquez",26,"manchaII"));//la funcion newPeople devuelve un nuevo objeto Persona con datos distintos
/********************************************************************* */

function Carro(marca,year,color){
  this.marca = marca;
  this.year = year;
  this.color = color;
  this.detalle = function(){
    return "El carro " + this.marca + " del año " + this.year + " es color " + this.color; 
  }
}

let car1 = new Carro("mazda",2022,"Rojo"); //Creo un Carro objeto
let car2 = new Carro("nissan", 2021,"Gris"); //Creo un segundo Carro objeto
console.log(car1.detalle());  //A ese objeto le asignamos el metodo creado dentro del constructor Carro
console.log(car2.detalle());
console.log(car1);    //Devuelve un nuevo objeto Carro con caracteristicas diferentes

/********************************************************************/
/*function Carro(marca,year,color){
  this.marca = marca;
  this.year = year;
  this.color = color;
}
  Carro.prototype.detalle = function(){
    return "El carro " + this.marca + " del año " + this.year + " es color " + this.color; 
}


let car3 = new Carro("mazda",2022,"Rojo");
console.log(car3.detalle());
console.log(car3);*/