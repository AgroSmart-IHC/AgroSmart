document.addEventListener("DOMContentLoaded", () => {

    console.log("JS OK");

    const img = document.getElementById("bannerQuienes");

    if (!img) {
        console.log("NO ENCUENTRA IMG");
        return;
    }

    const images = [
        "imagenes/bannersomos.png",
        "imagenes/bannersomos2.png",
        "imagenes/bannersomos3.jpeg",   
        "imagenes/bannersomos4.jpg"
    ];

    let i = 0;

    setInterval(() => {

        i = (i + 1) % images.length;
        console.log("cambiando a:", images[i]);

        img.src = images[i];

    }, 3000);

});