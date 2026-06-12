const btnActualizar =
    document.getElementById("btnActualizar");

btnActualizar.addEventListener("click", () => {

    /* =========================
       MÉTRICAS
    ========================= */

    const cultivos =
        Math.floor(Math.random() * 8) + 5;

    const alertas =
        Math.floor(Math.random() * 5) + 1;

    const produccion =
        Math.floor(Math.random() * 15) + 8;

    const rentabilidad =
        Math.floor(Math.random() * 40) + 30;

    document.getElementById("cultivosActivos").textContent =
        cultivos;

    document.getElementById("alertasActivas").textContent =
        alertas;

    document.getElementById("produccionEstimada").textContent =
        produccion + " Tn";

    document.getElementById("rentabilidadPromedio").textContent =
        rentabilidad + "%";


    /* =========================
       CLIMA
    ========================= */

    const climas = [

        {
            icono: "imagenes/sol.png",
            temperatura: "29°C",
            estado: "Soleado",
            humedad: "💧 Humedad: 62%",
            lluvia: "🌧 Prob. lluvia: 10%",
            viento: "💨 Viento: 14 km/h"
        },

        {
            icono: "imagenes/nublado.png",
            temperatura: "22°C",
            estado: "Nublado",
            humedad: "💧 Humedad: 74%",
            lluvia: "🌧 Prob. lluvia: 35%",
            viento: "💨 Viento: 11 km/h"
        },

        {
            icono: "imagenes/lluviainicio.png",
            temperatura: "19°C",
            estado: "Lluvias",
            humedad: "💧 Humedad: 88%",
            lluvia: "🌧 Prob. lluvia: 80%",
            viento: "💨 Viento: 18 km/h"
        }

    ];

    const climaSeleccionado =
        climas[Math.floor(Math.random() * climas.length)];

    document.getElementById("iconoClima").src =
        climaSeleccionado.icono;

    document.getElementById("temperaturaClima").textContent =
        climaSeleccionado.temperatura;

    document.getElementById("estadoClima").textContent =
        climaSeleccionado.estado;

    document.getElementById("humedadClima").textContent =
        climaSeleccionado.humedad;

    document.getElementById("lluviaClima").textContent =
        climaSeleccionado.lluvia;

    document.getElementById("vientoClima").textContent =
        climaSeleccionado.viento;


    /* =========================
       ALERTAS
    ========================= */

    const alertasDisponibles = [

        "⚠ Posible lluvia intensa en las próximas 24 horas",

        "⚠ Riesgo moderado de plagas detectado",

        "⚠ Se recomienda riego preventivo esta mañana",

        "⚠ Temperatura elevada durante la tarde",

        "⚠ Revisar humedad del terreno",

        "⚠ Incremento de vientos en la zona",

        "⚠ Condiciones favorables para enfermedades fúngicas"

    ];

    document.getElementById("alerta1").textContent =
        alertasDisponibles[
            Math.floor(Math.random() * alertasDisponibles.length)
        ];

    document.getElementById("alerta2").textContent =
        alertasDisponibles[
            Math.floor(Math.random() * alertasDisponibles.length)
        ];

    document.getElementById("alerta3").textContent =
        alertasDisponibles[
            Math.floor(Math.random() * alertasDisponibles.length)
        ];

});