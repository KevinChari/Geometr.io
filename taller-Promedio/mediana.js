

function calcularMediaAritmetica(lista) {
    
        const sumaLista = lista.reduce(
            function (valorAcumulado = 0, nuevoElemento) {
                return valorAcumulado + nuevoElemento;
            }
        );
    
        const promedioLista = sumaLista / lista.length;
    
        const resultadoPromedio = document.getElementById("");
        resultadoPromedio.innerText = "El promedio es: " + promedioLista;
    }





// MEDIANA

const lista2 = [
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
}