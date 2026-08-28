export function fizzbuzz() {
  //tu código va aqui
  /**
   * For que va a generar los numeros del 1 al 100
   */
  for (let i = 1; i <= 100; i++) {
    // Si el residuo de la operación (i % 3) y (i % 5) es 0 entonce se imprime FizzBuzz
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else {
       // Si el residuo de la operación (i % 3) es 0 entonce se imprime Fizz
      if (i % 3 == 0) {
        console.log("Fizz");
      } else {
         // Si el residuo de la operación (i % 5) es 0 entonce se imprime Buzz
        if (i % 5 == 0) {
          console.log("Buzz");
        }
        else{
          // Si el valor de i no es multiplo de 3 y 5 o multiplo de 3 o multiplo de 5 entonces se imprime el valor de i
          console.log(i)
        }
      }
    }
  }
}

fizzbuzz();