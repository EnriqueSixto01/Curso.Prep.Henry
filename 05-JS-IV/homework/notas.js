const guitarra ={
    marca: 'Fender',
    modelo: 'Stratocaster'
  };



  guitarra.color = "negro";    //Agregamos una nueva propiedad de nombre color, al objeto guitarra con la notacion dot
  guitarra["trastes"] = 24     //Agregamos otra nueva propiedad al objeto guitarra con la notacion[]
                              //A las anteriores notaciones literalemnte le estamos diciendo que agrege al objeto la propedad con esos nombres.

  //guitarra[argumento]           //Cuando queremos agregar una propiededa a nustro objeto que es pasada por argumento, la notacion será
                                  //entre [] y sin comillas, solo es el nombre de el argumento.
  let pastillas = "pastillas";    //Guardando el nombre de la propiedad en una variable
  guitarra[pastillas] = "humbucker";  //Asignando un valor a la propiedad que se guardo en la variable.
  console.log(guitarra)


  for(let clave in guitarra)         //iteramos sobre cada propiedad del objeto guitarra
  {
    if(guitarra[clave] === 24)      //preguntmos si en la propiedad iterada tiene el valor 24
   {
      guitarra[clave] = 22          //si es asi, le asignamos el valor 22
    }
  }

  for(let i in guitarra){           //iteramos sobre cada propiedqad del objeto guitarra
    console.log(i,": ", guitarra[i])  //mostramos la propiedad y el valor de cada una de ellas
  }


  let numArr =[1,2,3,4,5];
  for(let i in numArr){         //iteramos sobre cada uno de los elementos del array, es decir cada uno de los indices
    console.log(i, numArr[i])   //mostramos la posicion y el valor de cada uno de ellos
  }

  console.log(guitarra)

  /****************************************** Arreglo de Objetos *******************************************/

  let persona = [
    {
        nombre: "Enrique",
        apellido: "Sixto",
        hobbies: ['leer', 'tocar guitarra', 'jugar videojuegos'],
        amigos: [{nombre: 'Dany', edad: 26}, {nombre: 'Yio', edad: 25}]
    },
    {
        nombre: "Dany",
        apellido: "Maldonado",
        hobbies: ['ver TV','escuchar musica','salir de fiesta'],
        amigos: [{nombre: 'Bry', edad: 27}, {nombre: 'Yio', edad: 25}]

    }];

    //Para acceder a el nombre del primer amigo de la primera persona
    console.log(persona[0].amigos[0].nombre);

    //Para acceder a la edad del segundo amigo de la segunda persona
    console.log(persona[1].amigos[1].edad);

    //Agregamos un hobby a la propiedad hobbies de la primera persona
    persona[0].hobbies.push("football");
    console.log(persona[0].hobbies);

    //Agregamos una nueva propiedad a la primera persona
    //let dir = "direccion";
    persona[0].direccion = "Francisco J Mujica"
    console.log(persona[0]);

    //Agregamos un nuevo objeto al arreglo de objetos de la propiedad amigos de la segunda persona
    persona[1].amigos.push({nombre:'Kevin', edad: 20})
    console.log(persona[1])

    //Modifica la edad del primer amigo del arreglo de objetos de la propiedaa amigos de la segunda persona
    persona[1].amigos[0].edad = 21
    console.log(persona[1])

    //Sumar todas las edades de los amigos
    sum =0;
    let ages =[]
    let prom =0;
    for(let i in persona){                      //Este for itera sobre cada objeto del arreglo de objetos de persona
        for(let j in persona[i].amigos){       //Este for itera sobre cada objeto del arreglo de objetos de la propiedad amigos
          ages.push(persona[i].amigos[j].edad) 
          sum += persona[i].amigos[j].edad
            //console.log(sum)
            
        }
    }
    prom = sum/ages.length
    
    //Mostramos un nuevo array donde estan todas las edades
    console.log(ages)
    //Mostramos la suma total de todas las edades
    console.log("La suma total de edades es: " + sum)
    //Mostramos el promedio de las edades
    console.log("El promedio de edades es: " + prom)

    /********************************************* THIS *************************************************/
    //Definimos una funcion afuera de un objeto que luego se agregara como valor a la propiedad de los objetos ibiza y nissan.
    function km(){
        console.log("El carro " + this.marca + " tiene kilometraje 0");
    }

    var ibiza = {
        marca: "Ibiza",
        año: 2021,
        masRapido: function(){
            console.log("Soy un carro muy rapido")
         },
         km: km                     //Al prametro km del objeto ibiza se le asigna la funcion km
    }                               //El parametro tiene que tener el mimo nombre que la funcion

    //llamamos al método masRapido del objeto carro
    ibiza.masRapido();


    var nissan = {
        marca: "Nissan",
        año: 2022,
        masRapido: function(){
            console.log(this.marca + " del año " + this.año + " es el mas rapido." )
        },
        km: km                      //Al aprametro km del objeto nissan se le asigna la funcion km
    }

    nissan.masRapido()
    ibiza.km()
    nissan.km()