


/* 
function calcularMediaAritmetica(lista) {

    let sumaLista = 0;
    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];  
    }; */

    /* const sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) => valorAcumulado + nuevoElemento); */
    /* const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    ) */
   /*  return  sumaLista / lista.length;
} */
/* const btnPromedio = document.querySelector('#form__button-promedio');
const inputPromedio = document.querySelector('#InputPromedio');
let arrValue = [];

document.addEventListener('DOMContentLoaded', () =>{
    btnPromedio.addEventListener('click', calcularMediaAritmeticaPromedio)
})

function calcularMediaAritmeticaPromedio() {
    const inputPromedio = document.getElementById("InputPromedio");
    const valuePromedio = parseInt(inputPromedio.value);
    

    const promedioMediaAritmetica = calcularMediaAritmetica(valuePromedio);

    const resultadoPromedio = document.getElementById("ResultadoPromedio");
    resultadoPromedio.innerText = `El resultado del promedio es: ${promedioMediaAritmetica}`
} */






let lista1 = [];



function calcularMediaAritmetica(lista) {
    
    /* let sumaLista = 0;
    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
        
    } */

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
    });
    
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}