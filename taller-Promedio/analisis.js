const salariosEcu = ecuador.map(
    function(personita) {
        return personita.salary;
});

const salariosEcuSorted = salariosEcu.sort(
    function(salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

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

console.log(medianaSalarios(salariosEcuSorted));