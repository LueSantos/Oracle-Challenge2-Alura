//Seletores e variáveis

let palavras = [
  'VERMELHO',
  'AMARELO',
  'VERDE',
  'AZUL',
  'BRANCO',
  'CINZA',
  'MAGENTA',
];
let tela = document.getElementById('forca').getContext('2d');
let letras = [];
let palavraCorreta = '';
let erros = 5;



//Função para sortear a palavra secreta do jogo
let palavraSecreta = () => {
  let sorteio = palavras[Math.floor(Math.random() * palavras.length)];
  palavraSecreta = sorteio;
  console.log(sorteio);
  return sorteio;
};


// Caracterícas da linha para desenhar os traços
let desenhaTraco = () => {
  tela.lineWidth = 6;
  tela.lineCap = 'round';
  tela.lineJoin = 'round';
  tela.strokeStyle = 'white';
  tela.beginPath();
  let eixo = 600 / palavraSecreta.length; //ajusta os traços de acordo com  quantidade de letras

  // loop para desenhar e validar cada um dos traços
  for (i = 0; i < palavraSecreta.length; i++) {
    //escrevendo os traços
    tela.moveTo(500 + eixo * i, 640);
    tela.lineTo(550 + eixo * i, 640);
  }
  //encerrando o desenho
  tela.stroke();
  tela.closePath();
};
desenhaTraco(palavraSecreta());


//Desenhando a estrutura da forca 
baseForca = (x, y, width, height, color) => {
  tela.fillStyle = color;
  tela.fillRect(x, y, width, height);
  tela.fill();
};
//base X "Topo"
baseForca(200, 150, 550, 30, 'black');

//base Y "Topo"
baseForca(590, 150, 30, 120, 'black');

//base Y "Vertical"
baseForca(200, 150, 30, 650, 'black');

//base "Piso"
baseForca(100, 790, 500, 30, 'black');



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


//Validar letras corretas
validaLetraCorreta = (key) => {
  if (letras.length < 1 || letras.indexOf(key) < 0) {
      console.log(key);
      letras.push(key);
      return false;
  } else {
      letras.push(key.toUpperCase());
      return true;
  }
}

adicionarLetraCorreta = (i) => {
  palavraCorreta += palavraSecreta[i].toUpperCase();
};

adicionarLetraIncorreta = (letter) => {
  if (palavraSecreta.indexOf(letter) <= 0) {
    erros -= 1;
  }
};

//Capturar teclas do teclado
document.onkeydown = (e) => {
  let letra = e.key.toUpperCase();
  if (!validaLetraCorreta(e.key)) {
    if (palavraSecreta.includes(letra)) {
      adicionarLetraCorreta(palavraSecreta.indexOf(letra));

      for (let i = 0; i < palavraSecreta.length; i++) {
        if (palavraSecreta[i] === letra) {
          letraCorreta(i);
        }
      }
    } else {
      if (!validaLetraCorreta(e.key)) return;
        adicionarLetraIncorreta(letra);
        letraIncorreta(letra, erros);
    }
  }
};
/* 
// left eye
pincel.fillStyle = 'black';
pincel.fillRect(150, 90, 100, 100);

// right eye
pincel.fillStyle = 'black';
pincel.fillRect(350, 90, 100, 100);

// center nose
pincel.fillStyle = 'black';
pincel.fillRect(230, 170, 140, 100);


// center "baseline" tongue
pincel.fillStyle = 'red';
pincel.fillRect(270, 270, 60, 100);

// center "baseline" tongue-line
pincel.fillStyle = 'white';
pincel.fillRect(295, 270, 10, 70);



//iris of the lefth eye
pincel.fillStyle = 'yellow';
pincel.arc(200, 140, 20, 0, 2 * 3.14);
pincel.fill();

//iris of the right eye
pincel.fillStyle = 'yellow';
pincel.arc(400, 140, 20, 0, 2 * 3.14);
pincel.fill();

// right gap nose
pincel.fillStyle = 'pink';
pincel.moveTo(230, 170)
pincel.arc(330, 220, 10, 0, 2 * 3.14);
pincel.fill();

// left gap nose
pincel.fillStyle = 'pink';
pincel.moveTo(230, 170)
pincel.arc(270, 220, 10, 0, 2 * 3.14);
pincel.fill();


  */
