// Crea un programa el cual te pregunte por una nota del 0 al 10 y dependiendo del número, te devuelva la siguiente clasificación.
// Nota: Debes de usar el Switch.
// 0 - 4: Insuficiente.
// 5 - 6: Suficiente.
// 7 - 8: Notable.
// 9 - 10: Sobresaliente.

function calificaciones() {
  let tuNota = prompt("Introduce tu nota");

  switch (true) {
    case tuNota <= 4:
      console.log("Insuficiente");
      break;
    case tuNota == 5 || 6:
      console.log("Suficiente");
      break;
    case tuNota < 10:
      console.log("Notable");
      break;
    case tuNota == 10:
      console.log("Sobresaliente");
      break;
  }
}
console.log(calificaciones());

// Crea una función resta que espere dos parámetros a y b y que devuelva la resta de los mismos.

function restaDeValores(a, b) {
  let total = a - b;
  console.log(total);
}
restaDeValores(9, 7);

// Crea la función duplicaNumero debe recibir un tipo number y devolver el doble del valor recibido.
// Si la función no recibe un dato tipo number debe devolver el string ‘Debo ser ejecutada con un número’

function duplicaNumero(num) {
  num = Number(num);
  if (num) {
    let nuevoNumero = num * 2;
    8;
    return nuevoNumero;
  } else console.log("Debo ser ejecutada con un número");
}
let numeroEjemplo = duplicaNumero(8);
console.log(numeroEjemplo);
numeroEjemplo = duplicaNumero("rata");
console.log(numeroEjemplo);

// Crea la función caracterInicial  debe recibir un tipo string y devolver un string con el primer carácter.
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'
function caracterInicial(string) {
  if (typeof string != "string") {
    return "Debo ser ejecutada con un string";
  } else if (string === "") {
    return "Debo ser ejecutada con un string no vacío";
  }
  return string[0];
}
console.log(caracterInicial("Hola"));

// Crea la función ultimoCaracter debe recibir un tipo string y devolver un string con el último carácter.
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'
function ultimoCaracter(ultimo) {
  if (typeof ultimo != "string") {
    return "Debo ser ejecutada con un string";
  } else if (ultimo === "") {
    return "Debo ser ejecutada con un string no vacío";
  }
  return ultimo.slice(-1);
}
console.log(ultimoCaracter("Hola"));

// Crea la función cuentaCaracteres debe recibir un tipo string y devolver un number con el número de carácteres
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'
function cuentaCaracteres(cuenta) {
  if (typeof cuenta == "string") {
    return +cuenta.length;
  } else return "Debo ser ejecutada con un string";
}
console.log(cuentaCaracteres("hola que tal"));
console.log(cuentaCaracteres(20));

// // Un palíndromo es una palabra que se escribe igual del derecho que del revés por ejemplo orejero, rallar o somos.
//  Crea la función esPalindromo que recibirá una cadena de texto y deberá devolver si es un palíndromo o no.
// // Si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'
function esPalindromo(texto) {
  if (typeof texto != "string") {
    return "No es un formato correcto";
  } else if (texto === "") {
    return "No es un formato correcto";
  }
  const textoReversed = texto.split("").reverse().join("");
  return textoReversed === texto ? "es palindromo" : "no es palindromo";
}

console.log(esPalindromo("oso"));
console.log(esPalindromo("hola"));
console.log(esPalindromo("omo"));
console.log(esPalindromo(20));
console.log(esPalindromo());

// LO QUE ME HA COSTADO ESTE!!!!  AL FIN!!! :_D //
// Crea la función getPrecioMostrar para que devuelva una cadena de texto con formato precio con dos decimales. Para 2 debería devolver 2.00 €.
// Si la función no recibe un número debería devolver devolver 'no es un formato correcto'

function getPrecioMostrar(precio) {
  const precioDecimales = precio.toFixed(2);
}
console.log(getPrecioMostrar("ddad"));
