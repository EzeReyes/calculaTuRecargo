const moduloSimple = document.querySelector('#modulo-simple');
const moduloExtraordinario = document.querySelector('#modulo-extra');
const serviciosSimples = document.querySelector('#servicios-modulo-simple');
const serviciosExtraordinarios = document.querySelector('#servicios-modulo-extra');
const modSRealizados = document.querySelector('.modS-realizados');
const modERealizados = document.querySelector('.modE-realizados');
const total = document.querySelector('.total');

let valorModuloSimple = Number(moduloSimple.value) || 0;
let valorModuloExtraordinario = Number(moduloExtraordinario.value) || 0;
let cantidadServiciosSimple = 0;
let cantidadServiciosExtraordinarios = 0;

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

// Mostrar los valores iniciales al cargar la página
actualizarTotal();

