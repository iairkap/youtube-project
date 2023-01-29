// // dos tipos de datos 


// // primitivos: 
// // string 
// // Numberboolean 
// // null 
// // undefined
// // Nan 

// // compuestos: no accedemos al valor como total, sino a la referencia, como en el ajadrez, caballo e5, vemos que hay en el e5
// // object ={}
// // array = []
// // functin (){}
// // class {}
// // etc. 


// // curso 3 
// // una variable es un lugar en la memoria de la computadora para almacenar datos, 

// var hola = "Hola mundo"; 
// console.log(hola); 

// /* con let puedo decalrar variables con ambito de bloque,
//  dentro de las funcione if, por eso SIEMPRE es recomendable declarar las 
//  ariables con let */
// let hello = "Hello World"; 
// // el bloque esta separado por un juego de llaves 

// /* const nos permite crear variables tambien, cuando sabemos que tenemos variables
// que no van a cambiar durante el flujo de la aplicacion, no se pueden tener constantes
// vacias, esto si se puede hacer con let o con va, const se declara en mayusculas */ 

// let a; 
// const PI= 3.1416
// console.log (PI);

// /* 
// PI= 3.15 me saltaria error, porque no puedo cambiar el valor de PI 
// pero a= "kenai", me cambiaria, con los valores compuestos si los puedo modificar.  */

// const objeto = {
//     nombre: "Iair", 
//     edad: 29
// };

// const colores = [
//     "blanco", "negro", "azul"
// ];



// objeto.correo = "iairkap@gmail.com"; 
// console.log (objeto);
// console.log (objeto.correo);
// colores.push ("rojo"); 


// console.log(objeto); 
// console.log (colores);


/*
las propiedades del objeto me dan los atributos del objeto, caracteristicas que definen 
algo del objeto 

los metodos son acciones, los metodos termian con parentesis */ 

// let ul3 = "<ul>";
// ul3 += "<li> Primavera</li>";
// ul3 += "<li>Verano</li>";
// ul3 += "<li>Otoño</li>";
// ul3 += "<li>Invierno</li>";
// ul3 += "</ul>";

// console.log(ul3);


// let hora = 23 

// if (hora <= 5) {
//     console.log ("Dejame Dormir");
// } else if (hora >= 6 && hora <= 11) {
//     console.log ("Buenos dias")
// } else if (hora >= 12 && hora <= 18) {
//     console.log ("Buenas tardes")
// } else { 
//     console.log ("Buenas noches")
// }

// let dia = 20
// switch (dia) {
//     case 0:
//         console.log ("domingo")
//         break;
//     case 1:
//         console.log ("lunes")
//         break;
//      case 2:
//         console.log ("martes")
//         break;
//     case 3:
//         console.log ("miercoles")
//         break;
//      case 4:
//          console.log ("jueves")
//         break;
//     case 5:
//           console.log ("viernes")
//         break;
//     case 6:
//         console.log ("sabado")
//     default:
//         console.log ("dia no existe")
//         break;
// }

// const iair = { 
//     nombre: "iair", 
//     edad: 29, 
//     apellido: "kaplun"
// }

// for (const propiedad in iair) {
//     console.log (`Key: ${propiedad}, Value:${iair[propiedad]}`);
// }


// const lucia ={
//     nombre : "lucia", 
//     edad: 31,
//     apellido: "sztaynberg"
// }

// for (const propiedad in lucia) {
//     console.log (`Key : ${propiedad}, Value ${lucia[propiedad]}`);
// }



// const gael = { 
//     nombre: "Gael", 
//     apellido:"Kaplun Sztaynberg", 
//     edad: "2 meses"
// }
 
// for (const propiedad in gael) {

//     console.log (`${propiedad}: ${gael[propiedad]}`)
// }

let elemento = "Hola mundo"; 

for (const bizarrap of elemento) {
    console.log (bizarrap)
}
