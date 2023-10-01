// Tipos de datos
// Alfanumericos:
//let nombrePasajero = "Pedro Silva";
//nombrePasajero = "Ramón Silva";
//console.log(nombrePasajero);

// Numérico:
let valorBoleto = 1650;
let impuestoAeropuerto = 100;
const porcentajeTasaEmbarque = 60/100;
var gestionAgencia = 100;

// Lógicos (true, false):
let boletoActivo = true;

// Operaciones Aritméticas:
// Suma:
// let totalBoletos = valorBoleto + porcentajeTasaEmbarque + gestionAgencia;
// console.log(totalBoletos);

// Orden de precedencia:
// ()
// * y /
// + y -
let totalBoletos = (valorBoleto + impuestoAeropuerto) * porcentajeTasaEmbarque + gestionAgencia;
console.log(totalBoletos);

// Concatenación de texto:
let nombrePasajero = "Eduardo";
let apellidoPasajero = "Mendez";
let nombreCompleto = nombrePasajero + " " + apellidoPasajero;
let pasaporte = parseFloat("1000") + parseInt("12");
let multiplicacion = parseFloat("1000") / parseInt("12");

console.log(nombreCompleto);
console.log(pasaporte);
console.log(multiplicacion);

let noEsUnNumero = parseInt("AASASA");
console.log(noEsUnNumero);

