/* const lista1 = [
    100,
    200,
    300,
    500,
];

let sumaLista1 = 0;
for (let i = 0; i < lista1.length; i++) {
    sumaLista1 = sumaLista1 + lista1[i];  
};


const promedioLista1 = sumaLista1 / lista1.length; */


let lista = [];
//declaramos la variable lista con el array

//creamos la función que irá añadiendo los elementos a nuestro array
function añadirArray() {
  const inputPromedio = document.getElementById("InputPromedio");
  //obtenemos el dato del input
  const numero = Number(inputPromedio.value);
  //convertimos ese dato a número
  const añadirNumero = lista.push(numero);
  //ahora añadimos el número al array, y cada vez que el usuario
  //le de click al botón se irá añadiendo un número
  const resultado = document.getElementById("ResAdd");
  //mandamos a llamar el texto que queremos mostrar
  //imprimimos el texto en HTML
  resultado.innerText ="Listado de números: (" + lista + ") presiona el botón 'Promediar' una vez terminado.";
}


function calcularMediaAritmetica(lista) {
/*     let sumaLista = 0;
    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];  
    }; */

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    const resultadoPromedio = document.getElementById("ResultadoPromedio");
    resultadoPromedio.innerText = "El promedio es: " + promedioLista;
}

/* function onclickCalcularPromedio() {
    const inputPromedio = document.getElementById("InputPromedio");
    const promedioValue = Number(inputPromedio.value);


    const promedioValores = calcularMediaAritmetica([Number(promedioValue)]);

    const resultadoPromedio = document.getElementById("ResultadoPromedio")
    resultadoPromedio.innerText = "El promedio es: " + promedioValores + " :)";
} */


















// MEDIANA

/* const lista2 = [
    100,
    200,
    500,
    4000000000,
];

const mitadLista2 = parseInt(lista2.length / 2);


function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if(esPar(lista2.length)) {
    const elemento1 = lista2[mitadLista2 - 1];
    const elemento2 = lista2[mitadLista2];

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ]);
   

    mediana = promedioElemento1y2;
} else {
    mediana = lista2[mitadLista2];
} */