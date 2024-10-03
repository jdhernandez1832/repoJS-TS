import { Estudiante, Address } from "./tipos";

const mostrarEstudiante=(estudiante : Estudiante)=>{
       //Informacion del estudiante
       console.log(`Nombre: ${estudiante.nombre}`);
       console.log(`Apellido: ${estudiante.apellido}`);
       console.log(`Èdad: ${estudiante.edad || "no hay edad"}`)
       console.log("---------Direcciones---------")
       estudiante.addresses?.forEach((direccion:Address)=>{
       console.log(`Calle: ${direccion.street}`)
       console.log(`Numero: ${direccion.numero}`)
       console.log(`Ciudad: ${direccion.city}`)
       console.log("--------------------------") 
       });
}

export default mostrarEstudiante;
