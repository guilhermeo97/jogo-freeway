//Ator 1 = vaquinha
let xAtor = 85;
let yAtor = 366;
let tamanhoXAtor = 30;
let tamanhoYAtor = 30;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, tamanhoXAtor, tamanhoYAtor);
}

function movimentaAtor() {
  if(keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)) {
    if(podeSeMover()){
      yAtor += 3; 
    }
    
  }
}

function podeSeMover(){
  return yAtor < 366;
}

function verificaColisao() {
  for(let i = 0; i < imagensCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], tamanhoXCarros, tamanhoYCarros, xAtor, yAtor, tamanhoXAtor)
    if(colisao) {
      voltaAtorPosicaoInicial();
      somDaColisao.play();
      if(meusPontosMaiorZero()){
        meusPontos -= 1;
      } 
    }
  }
}

function meusPontosMaiorZero(){
  return meusPontos > 0
}

function voltaAtorPosicaoInicial() {
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 0))
  text(meusPontos, width / 5, 27)
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorPosicaoInicial();
  }
}