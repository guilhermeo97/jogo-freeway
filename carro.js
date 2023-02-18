//Carros
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2];
let xCarros = [600, 600, 600, 600, 600, 600];
let tamanhoXCarros = 50;
let tamanhoYCarros = 40;



function mostraCarro() {
  for(let i = 0; i < imagensCarros.length; i++ ) {
    image(imagensCarros[i], xCarros[i], yCarros[i], tamanhoXCarros, tamanhoYCarros);
  }
}

function movimentaCarro() {
  for(let i = 0; i < velocidadeCarros.length; i++) {
  xCarros[i] -= velocidadeCarros[i];
  }
}



function voltaPosicaoInicialDoCarro() {
  for (let i = 0; i < imagensCarros.length; i++) {
    if (passouTodaTela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}  
function passouTodaTela(xCarro) {
  return xCarro < -50
}

