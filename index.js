// ======== ITERACIONES ======== //

// Arrays //
let arrayVacio = [];
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayNumerosPares = [0, 2, 4, 6, 8];
let arrayBidimensional = [
  [0, 1, 2],
  ["a", "b", "c"],
];

// Funciones //
const suma = (a, b) => {
  return a + b;
};
const potenciacion = (a, b) => {
  return a ** b;
};
const separarPalabras = (str) => {
  return str.split(" ");
};
const repetirString = (str, num) => {
  return str.repeat(num);
};
const esPrimo = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

// Mezclando arrays y funciones //

const ordenarArray = (array) => {
  return array.sort();
};

const obtenerPares = (array) => {
  const array2 = [];
  for (number of array) {
    if (number % 2 == 0) {
      array2.push(number);
    }
  }
  return array2;
};
const pintarArray = (array) => {
  srt = "";
  for (let index = 0; index < array.length - 1; index++) {
    srt += `${array[index]}, `;
  }
  srt = "[" + srt + array[array.length - 1] + "]";
  return srt;
};

const arrayMapi = (array, func) => {
  let ar = [];
  for (let element of array) {
    ar.push(func(element));
  }
  return ar;
};

const eliminarDuplicados = (array) => {
  let sorted = array.sort();
  let final = [];
  let current;
  for (let n of sorted) {
    if (current != n) {
      final.push(n);
    }
    current = n;
  }
  return final;
};

// ======== ITERACIONES PROYECTO ======== //

// Arrays //
let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
let holaMundo = ["Hola", "Mundo"];
let loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];
let arrayDeArrays = [
  [756, "nombre"],
  [225, "apellido"],
  [298, "direccion"],
];

// Funciones //
const multiplicacion = (a, b) => {
  return a * b;
};
const division = (a, b) => {
  return a / b;
};
const esPar = (n) => {
  return n % 2 == 0 ? true : false;
};
const resta = (a, b) => {
  return a - b;
};
const arrayFunciones = [suma, resta, multiplicacion];

// Mezclando arrays y funciones //
const ordenarArray2 = (array) => {
  return array.sort().reverse();
};
const obtenerImpares = (array) => {
  const array2 = [];
  for (number of array) {
    if (number % 2 != 0) {
      array2.push(number);
    }
  }
  return array2;
};

const sumarArray = (array) => {
  let sum = 0;
  for (n of array) {
    sum += n;
  }
  return sum;
};

const multiplicarArray = (array) => {
    let mult = 1;
  for (n of array) {
    mult *= n;
  }
  return mult;
}