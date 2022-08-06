let tela = document.getElementById('forca').getContext('2d');


  //Desenhando a base da forca 

baseForca = (x, y, width, height, color) => {
  tela.fillStyle = color;
  tela.fillRect(x, y, width, height);
  tela.fill();
};
//base X "Topo"
baseForca(200, 150, 400, 20, 'red');

//base Y "Topo"
baseForca(590, 150, 20, 120, 'red');

//base Y "Vertical"
baseForca(200, 150, 20, 450, 'red');

//base "Piso"
baseForca(170, 590, 200, 20, 'red');


 // Caracterícas da linha para desenhar os traços
let desenhaTraco = () => { 
    tela.lineWidth = 6;
    tela.lineCap = 'round';
    tela.lineJoin = 'round';
    tela.strokeStyle = 'white';
    tela.beginPath();

  //Ajusta os traços de acordo com  quantidade de letras
    let eixo = 600 / palavraSecreta.length; 

    // loop para desenhar e validar cada um dos traços 
    for (i = 0; i < palavraSecreta.length; i++) {
      tela.moveTo(500 + eixo * i, 640);
      tela.lineTo(550 + eixo * i, 640);
    } 
    //encerrando o desenho
    tela.stroke();
    tela.closePath(); 
  };
  desenhaTraco();
  

//Características para desenhar a cabeça
desenhaCirculo = (x, y, raio, cor) =>{
    pincel.fillStyle = cor;
    pincel.arc(x, y, raio, 0, 2 * 3.14);
    pincel.fill();
}

//Características para desenhar o boneco 

desenhaBoneco = (xa, ya, xb,yb) =>{
    tela.fillStyle = "black";
    tela.moveTo(xa, ya);
    tela.lineTo(xb, yb);
    tela.lineWidth = 6;
    tela.strokeStyle= "black";
    tela.stroke();
    }

    desenhaCabeca = () =>{
      desenhaCirculo(200, 140, 10,"pink");
      desenhaCirculo(200, 100, 10,"green");
  }


  bracoEsquerdo = () =>{
    desenhaBoneco(200, 175, 230,220);
  }
//Desenha braço direito 
bracoDireito = () =>{
  desenhaBoneco(200, 175, 230,220);
}

//Desenha perna esquerda 


//Desenha perna direita 

  


  //Desenhar letra correta
  letraCorreta = (index) => {
    tela.font = 'bold 25px Arial';
    tela.lineWidth = 6;
    tela.lineCap = 'round';
    tela.lineJoin = 'round';
    tela.strokeStyle = 'green';
  
    let eixo = 600 / palavraSecreta.length;
    tela.fillText(palavraSecreta[index], 505 + (eixo * index), 630);
    tela.stroke();
  };
  
  //Desenhar letra incorreta
  letraIncorreta = (letra, errosLeft) => {
    tela.font = 'bold 20px Arial';
    tela.lineWidth = 6;
    tela.lineCap = 'round';
    tela.lineJoin = 'round';
    tela.strokeStyle = 'red';
    tela.fillText(letra, 535 + (40 * (10 - errosLeft)), 710, 40);
    tela.stroke();
  };