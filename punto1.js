// Definir las variables A y B
let A = parseInt(prompt("Ingresa el valor de A: "));
let B = parseInt(prompt("Ingresa el valor de B: "));

// Mostrar los valores iniciales
console.log("Valores iniciales:");
console.log("A =", A);
console.log("B =", B);

// Intercambiar los valores de A y B
let temp = A;
A = B;
B = temp;

// Mostrar los valores finales
console.log("Valores finales:");
console.log("A =", A);
console.log("B =", B);