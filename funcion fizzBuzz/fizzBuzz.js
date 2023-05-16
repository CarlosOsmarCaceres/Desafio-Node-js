/* Escriba la función fizz_buzz() que devuelve un array de 1 a N, pero: *
Para múltiplos de 3, imprime “Fizz”
Para múltiplos de 5, imprime “Buzz”
Para múltiplos de 3 y 5 impresiones “FizzBuzz”
La función toma un número entero N como parámetro y devuelve la secuencia como un array hasta el índice N.  
*/
console.log("***Escriba la función fizz_buzz()***")

function fizz_Buzz(N) {
  var arary = [];
  //var N = 2;
  for (var i = 1; i <= N; i++) {
    
    if (i % 3 === 0 && i % 5 === 0) {
      arary.push("FizzBuzz");
    } 
    else if (i % 3 === 0) {
      arary.push("Fizz");
    } 
    else if (i % 5 === 0) {
      arary.push("Buzz");
    } 
    else {
      arary.push(i);
    }
  }
  return arary;
}

console.log(fizz_Buzz(1))
console.log(fizz_Buzz(2));
console.log(fizz_Buzz(5));
console.log(fizz_Buzz(9));
console.log(fizz_Buzz(15));
