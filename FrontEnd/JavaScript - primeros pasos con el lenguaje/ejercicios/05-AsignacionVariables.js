// Palabra const
// Espacio de memoria que luego de asignar su valor no cambia en el tiempo
const valorPasaje = 1350;
console.log(valorPasaje);

const nombrePasajero = "Eduardo";
const apellidoPasajero = "Mendez";
console.log(nombrePasajero);
console.log(apellidoPasajero);

// Palabra let
// Espacio de memoria que puede cambiar durante la ejecucion del programa
let nombreCompletoPasajero = nombrePasajero + apellidoPasajero;
nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero;
console.log(nombreCompletoPasajero);

// Palabra var
// Espacio de memoria que puede cambiar durante la ejecucion del programa
// El alcance
var nombreCompletoDelPasajero = nombrePasajero + " " + apellidoPasajero;

// Bloque
{
    let nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero;
    console.log("variable con let: " + nombreCompletoPasajero);
    console.log("variable con var: " + nombreCompletoDelPasajero);
}

