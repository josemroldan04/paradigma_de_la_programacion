let nombre = "Jose";
let edad = 16;
let apellido = "Roldan";
let numero = 98;

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    let operacion = a - b;
    return operacion;
}


console.log("El resultado de la suma es: " +sumar(numero, edad)) 
let ResultadoResta = restar(9, 3)

console.log("El resultado de la resta es: " + ResultadoResta)
console.log("Nombre completo: " + nombre + " " + apellido + ", Edad: " + edad);
