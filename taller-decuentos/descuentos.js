//const precioOriginal = 120;
//const descuento = 18;


function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;


    return precioConDescuento;
}

function calcularPrecioConDescuentoCupon(precio, descuento, cupon) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    const precioConDescuentoCupon = precioConDescuento - cupon;

    return precioConDescuentoCupon;
}


function onclickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;


    const inputDiscount = document.getElementById("InputDiscound");
    const discountValue = inputDiscount.value;


    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;

}


const cupons = ["Rancio", "DogeCoin", "K-BUM_K-BUM"];

function onclickButtonPriceCupon() {
    const inputPrice1 = document.getElementById("InputPrice");
    const priceValue1 = inputPrice1.value;


    const inputDiscount1 = document.getElementById("InputDiscound");
    const discountValue1 = inputDiscount1.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
    
    let descuento;

    switch(couponValue) {
        case "Rancio":
            descuento = 10;
        break;
        case "DogeCoin":
            descuento = 15;
        break;
        case "K-BUM_K-BUM":
            descuento = 30;
        break;
    }


    const precioConDescuentoCupon = calcularPrecioConDescuentoCupon(priceValue1, discountValue1, descuento);

    const ResultPC = document.getElementById("ResultPC");
    ResultPC.innerText = "El precio TOTAL con CUPON es: $" + precioConDescuentoCupon;
}




/* console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
});
 */


