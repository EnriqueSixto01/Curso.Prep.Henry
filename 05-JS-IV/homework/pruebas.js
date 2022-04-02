function crearGato(nombre, edad) {
    // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
    // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
    // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
    // Devuelve el objeto
    // Tu código:
    //Hat 3 manerasa de acceder a un objeto
    //1. objeto[propiedad]
    //2. objeto["propiedad"]
    //3. let aux = "propiedad";
    //   objeto[propiedad]
    var  gato={
      nombre:nombre,
      edad:edad,
      meow: function()
    {
      return "Meow!"
    }    
    };
    return gato;
}

let cat = crearGato("nuget",2);
console.log(cat.meow());


/*************************************************************************************************/
function agregarPropiedad(objeto, property) {
    // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
    // Devuelve el objeto
    // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
    // Tu código:
    
      objeto[property] = null;  //Se pone entre corchetes y sin comillas
      return objeto;
  
  }

  const persona = {
    nombre: "Enrique",
    edad: 26
  }

  console.log(agregarPropiedad(persona,"direccion"))

  /*****************************************************************/

  function tieneEmail(usuario) {
  if(usuario.email) return true;
  else
    return false;

}



  const enrique = {  
    email: "enrique@gmail.com"
  };
  const yio = {  
    email: null
  };

  const dany = {  
    
  };


  console.log(tieneEmail(enrique));
  console.log(tieneEmail(yio));
  console.log(tieneEmail(dany));
  /********************************************************************/
  function verificarPassword(usuario, password) {
    // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
    // Devuelve "true" si coinciden
    // De lo contrario, devuelve "false"
    // // Tu código:
    if(usuario.password === password) return true;
    else
      return false;
  }

  const pass ={                     //creamos un objeto
      password: "enrique123"
  };
  console.log(verificarPassword(pass,"enrique"));
  console.log(verificarPassword(pass,"enrique123"));

  /*******************************************************************************/
  function agregarAmigo(usuario, nuevoAmigo) {
    // "usuario" tiene una propiedad llamada "amigos" que es un array
    // Agrega "nuevoAmigo" al final de ese array
    // Devuelve el objeto "usuario"
    // // Tu código:
    usuario.amigos.push(nuevoAmigo)
    return usuario;
    
  }

  const usuario = {
      amigos: []
  }

  console.log(agregarAmigo(usuario,"yio"))
  console.log(agregarAmigo(usuario,"dany"))

  /******************************************************************/
  function pasarUsuarioAPremium(usuarios) {
    // "usuarios" es un array de objetos "usuario"
    // Cada objeto "usuario" tiene la propiedad "esPremium"
    // Define cada propiedad "esPremium" de cada objeto como "true"
    // Devuelve el array de usuarios
    // Tu código:
    for(let clave in usuarios)
    {
       usuarios[clave].esPremium= true;
    }
   return usuarios;
  }


  const users = [
      {
            esPremium: "yes"

      },
      {
        esPremium: "no"

    },
];

console.log(pasarUsuarioAPremium(users));