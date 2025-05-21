const moduloSimple = document.querySelector('#select-mod-simple');
const moduloExtraordinario = document.querySelector('#select-mod-ext');
const moduloAdicional = document.querySelector('#adicional');
const serviciosSimples = document.querySelector('#servicios-modulo-simple');
const serviciosExtraordinarios = document.querySelector('#servicios-modulo-extra');
const serviciosAdicionales = document.querySelector('#servicios-adicional');
const modSRealizados = document.querySelector('.modS-realizados');
const modERealizados = document.querySelector('.modE-realizados');
const adicionalesRealizados = document.querySelector('.adicionales-realizados');
const total = document.querySelector('.total');

let valorModuloSimple = Number(moduloSimple.value) || 0;
let valorModuloExtraordinario = Number(moduloExtraordinario.value) || 0;
let valorAdicional = Number(moduloAdicional.value) || 0;
let cantidadServiciosSimple = 0;
let cantidadServiciosExtraordinarios = 0;
let cantidadServiciosAdicionales = 0;

const multiplicar = (a, b) => a * b;
const sumar = (a, b) => a + b;

const actualizarResultadoSimple = () => {
    const total = multiplicar(valorModuloSimple, cantidadServiciosSimple);
    modSRealizados.innerHTML = `
        <p>${cantidadServiciosSimple} Servicios Simples realizados, suman $${total}</p>
    `;
    return total;
};

const actualizarResultadoExtraordinario = () => {
    const total = multiplicar(valorModuloExtraordinario, cantidadServiciosExtraordinarios);
    modERealizados.innerHTML = `
        <p>${cantidadServiciosExtraordinarios} Servicios Extraordinarios realizados, suman $${total}</p>
    `;
    return total;
};

const actualizarResultadoAdicional = () => {
    const total = multiplicar(valorAdicional, cantidadServiciosAdicionales);
    adicionalesRealizados.innerHTML = `
        <p>${cantidadServiciosAdicionales} Adicionales realizados, suman $${total}</p>
    `;
    return total;
};

const actualizarTotal = () => {
    const totalito = sumar(actualizarResultadoSimple(), actualizarResultadoExtraordinario());
    total.innerHTML = `
        <p>Total a cobrar $${totalito}</p>
    `;
};

moduloSimple.addEventListener('change', (e) => {
    valorModuloSimple = Number(e.target.value) || 0;
    actualizarResultadoSimple();
    actualizarTotal();
});

serviciosSimples.addEventListener('change', (e) => {
    cantidadServiciosSimple = Number(e.target.value) || 0;
    actualizarResultadoSimple();
    actualizarTotal();
});

moduloExtraordinario.addEventListener('change', (e) => {
    valorModuloExtraordinario = Number(e.target.value) || 0;
    actualizarResultadoExtraordinario();
    actualizarTotal();
});

serviciosExtraordinarios.addEventListener('change', (e) => {
    cantidadServiciosExtraordinarios = Number(e.target.value) || 0;
    actualizarResultadoExtraordinario();
    actualizarTotal();
});

moduloAdicional.addEventListener('change', (e) => {
    valorAdicional = Number(e.target.value) || 0;
    actualizarResultadoAdicional();
});

serviciosAdicionales.addEventListener('change', (e) => {
    cantidadServiciosAdicionales = Number(e.target.value) || 0;
    actualizarResultadoAdicional();
});



// Mostrar los valores iniciales al cargar la página
actualizarTotal();

