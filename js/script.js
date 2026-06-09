const temp = document.querySelector(".info-clima h2");
const estado = document.querySelector(".info-clima h3");
const lluvia = document.querySelector(".info-clima p");
const icono = document.getElementById("iconoClima");

const climas = [
    {
        estado: "Soleado",
        icono: "imagenes/sol.png",
        lluvia: "Lluvia: 10%"
    },
    {
        estado: "Nublado",
        icono: "imagenes/nublado.png",
        lluvia: "Lluvia: 30%"
    },
    {
        estado: "Lluvia",
        icono: "imagenes/lluviainicio.png",
        lluvia: "Lluvia: 80%"
    }
];

function actualizarClima() {
    const c = climas[Math.floor(Math.random() * climas.length)];

    const grados = Math.floor(Math.random() * 10) + 20;

    temp.textContent = grados + "°C";
    estado.textContent = c.estado;
    lluvia.textContent = c.lluvia;
    icono.src = c.icono;
}

// cambia cada 5 segundos
setInterval(actualizarClima, 5000);

// inicial
actualizarClima();

