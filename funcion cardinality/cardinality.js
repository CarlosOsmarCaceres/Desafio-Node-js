/* Escriba la función number_cardinality() que toma un número entero y devuelve una cadena, de la siguiente manera:*
Devuelve la cadena zero si el número termina en 0
Devuelve la cadena five si el número termina en 5
Devuelve la cadena even si el número es par (divisible por 2) Y no termina en 0
Devuelve la cadena odd si el número es impar (no divisible por 2) Y no termina en 5
Asegúrese de que su cadena de retorno sea exactamente como la anterior, usando letras minúsculas.
 */
console.log("***Escriba la función numberCardinality()***")
function numberCardinality(N) {
  if (N % 10 === 0) {//si el input  de entrada `N` por 10 es igual a 0. Si lo es, significa que el número termina en 0
    return "zero";
  } else if (N % 10 === 5) {//si el input de entrada `N` por 10 es igual a 5. Si lo es, significa que el número termina en 5
    return "five";
  } else if (N % 2 === 0) {//si el input de entrada `N` es divisible por 2 (es decir, si es un número par) y si no termina en 0
    return "even";
  } else {
    return "odd";
  }
}

console.log(numberCardinality(10));
console.log(numberCardinality(88));
console.log(numberCardinality(155));
console.log(numberCardinality(99));