// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perímetro del cuadarado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
} 
// console.log("El área del cuadarado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

//console.log(
//    "Los lados del triángulo miden: " 
//    + ladoTriangulo1 
//    + "cm, " 
//    + ladoTriangulo2 
//    + "cm, " 
//    + baseTriangulo 
//    + "cm"
//);

//const alturaTriangulo = 5.5;
//console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
//console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function altura22(lado1, lado2, base) {
    if(lado1 === lado2 && lado1 != base){
        const altTriIso = Math.sqrt((lado1**2) - (base**2/ 4));
        return(`La altura del triángulo isósceles es de ${altTriIso} centimetros`)
    }
    else{
        return('No es un triángulo isósceles. OJO: Para que sea un triángulo isósceles los lados deben tener un valor igual')
    }
}
//console.log("El área del triángulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
//const radioCirculo = 4;
//console.log("El radio del círculo es de: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}
//console.log("El diametro del círculo es de: " + diametroCirculo + "cm");

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return  diametro * PI;
}
//console.log("El perímetro del círculo es de: " + perimetroCirculo + "cm");

// Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
//console.log("El área del círculo es de: " + areaCirculo + "cm^2");

console.groupEnd();


// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// Aquí el HTML del Triángulo
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTriangulo");
    const input2 = document.getElementById("InputTriangulo2");
    const input3 = document.getElementById("InputTriangulo3");
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const value3 = Number(input3.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const input3 = document.getElementById("InputTriangulo3");
    const input4 = document.getElementById("InputTriangulo4");
    const value3 = input3.value;
    const value4 = input4.value;

    const area = areaTriangulo(value3, value4);
    alert(area);
}

// Aquí el HTML del Círculo

function calcularPerimetroCirculo() {
    const inputcir = document.getElementById("InputCirculo");
    const valuecir = inputcir.value;

    const perimetro = perimetroCirculo(valuecir);
    alert(perimetro);
}
function calcularAreaCirculo() {
    const inputcir = document.getElementById("InputCirculo");
    const valuecir = inputcir.value;

    const area = areaCirculo(valuecir);
    alert(area);
}

// Aquí el HTML del Triángulo Isósceles

function calcularAlturaTriangulo(){
    const inputTri1 = document.getElementById("InputTrianguloIso");
    const inputTri2 = document.getElementById("InputTrianguloIso2");
    const inputTri3 = document.getElementById("InputTrianguloIso3");
    const valueTri1 = Number(inputTri1.value);
    const valueTri2 = Number(inputTri2.value);
    const valueTri3 = Number(inputTri3.value);

    const alturaTriI = altura22(valueTri1, valueTri2, valueTri3);
    alert(alturaTriI);
    /* const valorTri = calcAlt(valueTri1, valueTri2, valueTri3);
    alert(valorTri); */
}