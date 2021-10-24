

function calcularMediaAritmetica(lista) {
    
        const sumaLista = lista.reduce(
            function (valorAcumulado = 0, nuevoElemento) {
                return valorAcumulado + nuevoElemento;
            }
        );
    
        return sumaLista / lista.length;
    }


// MEDIANA


let lista = [];

function añadirArray() {
  const inputNumero = document.getElementById("InputPromedio");
  const numero = Number(inputNumero.value);
  const añadirNumero = lista.push(numero);
  const resultado = document.getElementById("value__list");
  resultado.innerText = `${lista}`;
}

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}




function calcularMediana() {
    const listaOrdenada = lista.sort((a, b) => {
        return a - b;
    });
    const mitadLista = parseInt(listaOrdenada.length / 2);
    const numeroParOImpar = esPar;


    if(numeroParOImpar(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada [mitadLista];
    
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);
        const resultado = document.getElementById("ResultadoPromedio");
        resultado.innerText = `La mediana es: ${promedioElemento1y2}`;
        /* return promedioElemento1y2; */
    
    } else {
        const resultado = document.getElementById("ResultadoPromedio");
        resultado.innerText =`La mediana es: ${listaOrdenada[mitadLista]}`;
        /* return listaOrdenada[mitadLista]; */
    }
    
}