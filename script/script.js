let body = document.body;
let div_mode = document.querySelector('.mode_cor');

function MudarModo() {
    let imgAtual = document.querySelector('.mode_img');

  
    if (body.classList.contains("dark_mode")) {
        body.classList.replace("dark_mode", "light_mode");
        imgAtual.src = "img/logo/icone_darkmode.png"; 
    }
    else {
        body.classList.replace("light_mode", "dark_mode");
        imgAtual.src = "img/logo/icone_lightmode.png";
    }
}


