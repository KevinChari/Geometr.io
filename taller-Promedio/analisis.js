//Helpers

function esPr(numero) {
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoValor) {
            return valorAcumulado + nuevoValor;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//Calculadora de Mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);



    if(esPr(lista.length)) {
        const elemento1 = lista[mitad - 1];
        const elemento2 = lista[mitad];

        const mediana = calcularMediaAritmetica([
            elemento1,
            elemento2
        ]);
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

//Mediana General

const salariosEcu = ecuador.map(
    function(personita) {
        return personita.salary;
});

const salariosEcuSorted = salariosEcu.sort(
    function(salaryA, salaryB) {
        return salaryA - salaryB;
    }
);


const medianaGeneralEcu = medianaSalarios(salariosEcuSorted);

//Meidana del TOP 10%

/* const arrayEjemplo = [0, 1, 2, 3, 4, 5 ||| 6, 7 ||| 8, 9, 10];
const arrayEjemplo = [0, 1, 2, 3, 4, 8, 9, 10]; //Lo desaprace
const ejemplo = arrayEjemplo.splice(5, 2) // ||| 6, 7 ||| esto va a quedar guardao en el arrayEjemplo [6, 7] */


const spliceStart = (salariosEcuSorted.length * 90) / 100;
const spliceCount = salariosEcuSorted.length - spliceStart;

const salarioEcuTop10 = salariosEcuSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Ecu = medianaSalarios(salarioEcuTop10);


console.log({
    medianaGeneralEcu,
    medianaTop10Ecu,
});