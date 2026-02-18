let body = document.body;  // mais direto que querySelector("body")

function MudarModo() {
    const isLight = body.classList.contains("light_mode");
    const img = document.querySelector(".light_mode_img");

    if (!img) {
        console.warn("Imagem .light_mode_img não encontrada!");
        return;
    }

    if (isLight) {
        body.classList.replace("light_mode", "dark_mode");
        img.style.filter = "brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(1352%) hue-rotate(86deg) brightness(118%) contrast(119%)"; // preto → verde
    } else {
        body.classList.replace("dark_mode", "light_mode");
        img.style.filter = "none"; // ou outro valor pro modo claro
    }
}