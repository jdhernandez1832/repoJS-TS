import mostrarEstudiante  from "./mostrarEstudiantes";
import { Estudiante, Address } from "./tipos";


//definir variables del tipo dado
const e1: Estudiante = {
       nombre: "Carlos",
       apellido: "Gutierrez",
       edad: 17, // Este estudiante debería ser eliminado
       addresses: [
           { street: "zzz", numero: 23, city: "Bogotá", pais: "Colombia" } // Ciudad correcta
       ]
   };
   
   const e2: Estudiante = {
       nombre: "Willl",
       apellido: "Cardenas",
       edad: 18, // Este estudiante debería permanecer
       addresses: [
           { street: "hola", numero: 234, city: "Bogotá", pais: "Colombia" },
           { street: "adios", numero: 21, city: "bogotá", pais: "Colombia" }, // Ciudad correcta (sin importar mayúsculas)
           { street: "buenas", numero: 19, city: "Bogotá", pais: "Colombia" }
       ]
   };
//Llamar al metodo 'mostrarEstudiante'
//Para mostar la informacion del estudiante
mostrarEstudiante(e1);

//Crear arreglo para almacenar estudiante:

let arregloEstudiantes : (number | string |Estudiante)[] = [];

//agregar primeros elementos
arregloEstudiantes.push(2);
arregloEstudiantes.push("wew");
arregloEstudiantes.push("Jorge");
arregloEstudiantes.push("Henry");

//Metodo para agregar um estudiante al arreglo

const addEstudiante = (e:Estudiante)=>{
       //instrucciones para agregar el estudiante al arreglo
       arregloEstudiantes.push(e);
}
//Metodo para añadir estudiante al principio del arreglo
const addEstudiantePrincipio = (e:Estudiante)=>{
       //instrucciones para agregar el estudiante al arreglo
       arregloEstudiantes.unshift(e);
}

//Metodo para encontrar un estudiante por nombre y actualizar su apellido
/*const actualizarApellidoPorNombre = (nombre : string, apellido: string)=>{
       const estudiante = arregloEstudiantes.find(e => e.nombre == nombre)
       if(estudiante){
              estudiante.apellido=apellido;
              console.log(`Apellido de ${nombre} actualizado a ${apellido}`)
       }else{
              console.log(`El estudiante con nombre ${nombre} no se encontro`)
       }
}
*/
//Metodo para emcpmtrar los estidoamtes que vivan en bogota y actualice la edad a 20
/*
const actualizarEdadEnBogota =(nuevaEdad: number)=> {
arregloEstudiantes.forEach(Estudiante=>{
       if(Estudiante.addresses && Estudiante.addresses.some(Address=>Address.city.trim()==="bogota")){
              Estudiante.edad= nuevaEdad;

       }else{
              console.log("no se encontro estudiante")
       }
})
}
   */

//Metodo para borrar un estudiante por nombre y apellido
/*
const borrarPorNombreYApellido = (nombre: string , apellido:string)=>{
       const estudiantesAntes = arregloEstudiantes.length;

       arregloEstudiantes = arregloEstudiantes.filter(est => 
              est.nombre.toLowerCase() !== nombre.toLowerCase() || est.apellido.toLowerCase() !== apellido.toLowerCase()
       );
       const estudiantesDespues = arregloEstudiantes.length;

       if (estudiantesAntes > estudiantesDespues) {
           console.log(`Estudiante ${nombre} ${apellido} ha sido borrado.`);
       } else {
           console.log(`No se encontró al estudiante ${nombre} ${apellido}.`);
       }
}
const borrarMenores =() => {
       arregloEstudiantes = arregloEstudiantes.filter(est => 
           !(est.edad !== undefined && est.edad < 18 && est.addresses?.some(addr => addr.city.toLowerCase() === "bogotá"))
       );
}*/
   
//Invocar el metodo para agregar estudiante e1
//al arreglo
addEstudiante(e1);
addEstudiantePrincipio(e2);
//actualizarEdadEnBogota(20);

//actualizarApellidoPorNombre("carlos", "gutierrez")
//borrarMenores();

console.log(arregloEstudiantes);
//recorrer el arreglo estudiantes
// monstrando solo los estudiantes
// Recorremos el arreglo y mostramos estudiantes

arregloEstudiantes.forEach((elemento) => {
       // Condicional para determinar si en elemento existe un objeto de tipo Estudiante
       if (
           typeof elemento === 'object' && // Verifica que sea un objeto
           elemento !== null &&             // Asegúrate de que no sea null
           'nombre' in elemento &&          // Verifica que tenga la propiedad 'nombre'
           'apellido' in elemento           // Verifica que tenga la propiedad 'apellido'
       ) {
           mostrarEstudiante(elemento); // Llama a la función para mostrar información del estudiante
       }
});
