/*************************************function deObjetoAmatriz(objeto)*******************************************/
function deObjetoAmatriz(objeto){
    // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
    // un par clave-valor en forma de matriz.
    //Ejemplo: 
    /*objeto({
        D: 1,
        B: 2,
        C: 3
      }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
    //Escribe tu código aquí
    
    const entries = Object.entries(objeto);
    return entries;
  }

  const musica ={
    Artista: "Celtian",
    Genero: "Folk Metal"
  };

  console.log(deObjetoAmatriz(musica))

  /*********************************************************************/

  let str ="enrique";

  //const str2 = str.split('', 3);  //dividir usando un limite de caracteres retornados
  //const str2 = str.split('');
  //console.log(str2);
  //console.log(str2.length);
  let arr =[];
  for(let i=0;i<str.length;i++)
  {
    
      str.split('').map(function(letra){
        
        if(str[letra] === str[i])
      {
        return arr.push(str[i]);
      }
    });
      
  }
  console.log(arr.length); 

/************************************es capicuo *******************************************************/
  let num = 373;
  let cap = "";
  let aux = num.toString(); //convertimos un entero a string :"3 7 3"
  
for(let i=aux.length-1;i>=0;i--)  //iteramos del ultimo caracter hacia el primero
{  
    cap = cap + aux.charAt(i);     //.chatAt() devuelve el elemento del indice que se coloque entre (), de un string,
                                  //es decir, permite acceder a un carácter en concreto de una cadena o tambien aux[i]
}
if (cap === aux){
  console.log("Es capicua")
}
else{
  console.log("No es capicua")
}

console.log(cap);
/**************************************************************************************/
function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  //Solución 1
  /*let res = [];
  let arr = cadena.split(''); // Lo paso a un array (solo necesario si quiero usar forMap o forEach)

  arr.map(e => {if (e==='a' || e==='b' || e==='c') {} else {res.push(e)}});
  return(res.join(''));
  }
  */
  //Solución 2
  /* OPCION CON FOR, iterando directamente sobre el string orignal
  for (var i = 0; i < cadena.length; i++) {
  
    if (cadena[i]==='a' || cadena[i]==='b' || cadena[i]==='c') {
      continue;
    }
    res.push(cadena[i]);
  }
  return(res.join(''));
}
*/  
  //Solución 3
  //The filter() method creates a new array with all elements that pass the test implemented by the provided function.
  let del = cadena.split('');
    const newstr = del.filter(del => del !== "a" && del !== "b" && del !== "c")  
    return newstr.join("");
  
}

let string1 = "abdfenrac";
console.log(deleteAbc(string1));

/********************************function capToFront(s)*************************************************/
function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let minu =[];
  let mayu = [];
  let resul = "";
  for(let i=0;i<s.length;i++)
  {
    if(s[i] === s[i].toUpperCase())
    {
      mayu.push(s[i])
    
    }
    if(s[i] === s[i].toLowerCase())
    {
      minu.push(s[i])
    }
  }

  resul = mayu.concat(minu)
  return resul.join("");
}

let string = "soyEnRiQUe";
//let str4 = string.split('')
//console.log(str4);
console.log(capToFront(string));

/**********************************function asAmirror(str)***************************************************/
function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  /*let espejo = str.split(' ');
  let mirror =[];
  
  for(let i=0;i<espejo.length;i++)
  {
    for(let j=espejo[i].length-1;j>=0;j--)
    {
        mirror.push(espejo[i][j])
        
    }
     mirror.join('')
  }
  return mirror;*/

  //Solucón N° 1
  let inver = "";

  for(i=str.length-1; i>=0; i--)
  {
    inver = inver + str.charAt(i)
  }
  return inver.split(' ').reverse().join(' ');

  //Solución N° 2
  /*var cadena=str.split(' ');
  var cadena2=[];
  var res=[];
  
  for (var i = 0; i < cadena.length; i++) {
    let x = cadena[i].split('').reverse().join('');
    cadena2.push(x);
  }
  
  res=cadena2.join(' ')
  
  return res;*/
}
const mirror = "The Henry Challenge is close!";
//const espejo = mirror.split(" ");
//console.log(espejo);
console.log(asAmirror(mirror));
 
/**************************************function numberOfCharacters(string)************************************/
function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  //Solución N° 1
  let str = string.split('');
  let numVeces = {};
  str.forEach(function(element){
    numVeces[element] = (numVeces[element] || 0) + 1;

  });

  return numVeces;
  //Solución N° 2
  /*
    const contador = {};

  for (let i=0; i<string.length; i++) {  
    
    let valor=string[i];
    
    if (contador[valor] === undefined) {
      contador[valor]=1;
    }
    
    else {
      contador[valor]=contador[valor]+1;
    }
  } 

  return contador;*/

}

let cadena = "adsjfdsfsfjsdjfhacabcsbajda";
console.log(numberOfCharacters(cadena));


/******************************function buscoInterseccion(arreglo1, arreglo2)*****************************/
function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  //Solución N° 1
  /*let union =[];
  let u = arreglo1.concat(arreglo2).sort();
  for(let i =0; i<u.length; i++)
  {
    if(u[i + 1] === u[i])
    {
      union.push(u[i])
    }
  }
  return union;*/

  //Solución N° 2
  const res=[];
  
  for (var i=0; i<arreglo1.length; i++)
  {
    for(var j=0; j<arreglo2.length; j++)//las iteraciones de este for son una iteracion del primer for
    {                                     
      if(arreglo1[i]===arreglo2[j])
        res.push(arreglo2[j]);
    }
  }
  
  res.sort();
  
  return res;
}

console.log(buscoInterseccion([4,2,3],[1,3,4]))

/****************************************************************************/
  /*var numbers = [4, 2, 5, 1, 3];
  numbers.sort(function(a, b) {
    return a - b;
  });
  console.log(numbers)


  for(let i in numbers)
  {
      console.log(i,numbers[i]);//imprime el indice y lo que hay en el indice de cada elemento
  }
*/
