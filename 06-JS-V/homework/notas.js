//Funcion constructora
function Planta(nombre, color, zona){
    this.nombre = nombre;
    this.color = color;
    this.zona = zona;
    this.hogar = function(){
        console.log("Me llamo " + this.nombre + " soy de color " + this.color + " y soy de " + this.zona)
    }
}

const bonsai = new Planta("bonsai", "verde", "sol")                 //creamos una instancia de la clase planta
const photo = new Planta("Photo", "verde con amarillo", 'sombra')   //creamos otra instancia de la clase planta

bonsai.hogar()
console.log(bonsai)
console.log(photo)
//console.log(bonsai.constructor) //Los objetos creados por las funciones de constructor también tienen una propiedad 
                        //especial en su prototipo llamado constructor , que apunta a la función utilizada para crearlos

bonsai.vida = 20        //Agregamos una nueva propiedad al objeto bonsai
console.log(bonsai)                        


/************************************ Prototype ******************************************************/
//Definimos la función constructora
function Edad(edad){
    this.edad = edad
}

//definimos el protoype para la funcion constructora de objetos 'Edad'
//Cada instancia de objeto creada con la funfion Edad, puede acceder al metodo getEdad() porque esta dentro del prototipo
//de la funcion constructora Edad.
Edad.prototype.getEdad = function(){
    return this.edad;
}

//Creamos varias instancias de objetos de la clase Edad
var Yio = new Edad(23);
var Dany = new Edad(24);
var Enrique = new Edad(25);

//invocamos la metodo que se encuentra en el prototipo de Edad
console.log(Enrique.getEdad())
//Mostramos la instancia de objeto y su contenido
console.log(Enrique)
//Mostramos la funcion como metodo que se encuentra el prototipo de Edad
console.log(Enrique.__proto__)
/******************************************************************************************************/
function Conejo(tipo) {
    this.tipo = tipo;
    }
    Conejo.prototype.hablar = function(linea) {
    console.log(`El conejo ${this.tipo} dice '${linea}'`);
    };
    let conejoRaro = new Conejo("raro");

    console.log(conejoRaro.hablar('Hola'))
/***************************************** Classes ****************************************************/

class Guitarra{
    constructor(marca, color, trastes, modelo){
        this.marca = marca;
        this.color = color;
        this.trastes = trastes;
        this.modelos = modelo;              //el parametro modelo es un arreglo de strings
    }

    descripcion(){
        return "La guitarra " + this.marca + " de color " + this.color + ' tiene ' + this.trastes + ' trastes.'
    }

    modelo(mod){
        this.modelos.push(mod);

    }
};


const gibson = new Guitarra('gibson', 'naranja', 22, ["DH"])
const ibanez = new Guitarra('ibanez', 'negro', 24, ["R5"])
console.log(gibson)
console.log(gibson.descripcion())
console.log(ibanez)
console.log(ibanez.descripcion())

gibson.modelo("les paul")
gibson.modelo("RG")
console.log(gibson)

/***************************************** Herencia  **************************************************/

class Alumno{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        
    }

    Saludar(){
        return 'Hola ' + this.nombre
    }
}


class Persona extends Alumno {
    constructor(nombre, apellido, edad){
        super(nombre,apellido,edad)
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
};


var Enrique = new Persona('Enrique', 'Sixto', 26)
console.log(Enrique)
console.log(Enrique.Saludar())