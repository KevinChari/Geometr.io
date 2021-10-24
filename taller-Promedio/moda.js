/* const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1
]; */

let lista = [];

function añadirArray() {
  const inputNumero = document.getElementById("InputPromedio");
  const numero = Number(inputNumero.value);
  const añadirNumero = lista.push(numero);
  const resultado = document.getElementById("value__list");
  resultado.innerText = `${lista}`;
}



function calcularModa() {

    const listaCount = {};
    const agruparElementos = lista.map(
        function(elemento) {
            if(listaCount[elemento]) {
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    );

    const listaArray = Object.entries(listaCount).sort(
        function(elementoA, elementoB) {
           return elementoA[1] - elementoB[1];
        }
    );

    const arrayLista = parseInt(listaArray[listaArray.length - 1]);

    const resultadoModa = document.getElementById("ResultadoModa");
    resultadoModa.innerText = `La moda es: ${arrayLista}`;
}
