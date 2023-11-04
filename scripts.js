// definir valor del ticket
const ticket = 2000;

// definir los descuentos

let descPrimer_Compra = 0.80;
let descRevendedoras = 0.50;
let descJubilados = 0.65;

// tomar elementos

const formulario = document.getElementById('formulario');
const categoria = document.getElementById('categoria');
const cantidad = document.getElementById('cantidad');
const totalPagar = document.getElementById('totalAPagar');
const btnResumen = document.getElementById('resumen');

function calcularPago(){
    let total = cantidad.value * ticket;
    // condicionar por descuento

    switch (categoria.value) {
        case "Primer_Compra":
            total = total - (total * descPrimer_Compra);
            break;
        case "Revendedoras":
            total= total - (total* descRevendedoras);
            break;
        case "Jubilados":
            total= total - (total*descJubilados);    
        default:
            break;
    }

    totalPagar.textContent = `Total a Pagar: $ ${total}`;

}

btnResumen.addEventListener('click',(e)=>{
    e.preventDefault()
    calcularPago()
});