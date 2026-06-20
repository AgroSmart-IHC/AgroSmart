document.addEventListener("DOMContentLoaded", () => {

    console.log("JS OK");

    const img = document.getElementById("bannerQuienes");

    if (!img) {
        console.log("NO ENCUENTRA IMG");
        return;
    }

    const images = [
        "assets/images/bannersomos.png",
        "assets/images/bannersomos2.png",
        "assets/images/bannersomos3.jpeg",   
        "assets/images/bannersomos4.jpg"
    ];

    let i = 0;

    setInterval(() => {

        i = (i + 1) % images.length;
        console.log("cambiando a:", images[i]);

        img.src = images[i];

    }, 3000);

});