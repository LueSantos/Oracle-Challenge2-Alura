//Seletores e variáveis

let palavras = [
  'SONHAR',
  'VIVER',
  'REALIZAR',
  'CONQUISTAR',
  'DIVERTIR',
  'DIVIDIR',
  'PROSPERAR',
];
let tela = document.getElementById('forca').getContext('2d');
let letras = [];
let palavraCorreta = '';
let erros = 8;

//Função para sortear a palavra secreta do jogo

let palavraSecreta = () => {
  let sorteio = palavras[Math.floor(Math.random() * palavras.length)];
  palavraSecreta = sorteio;
  console.log(sorteio);
  return sorteio;
};

let desenhaTraco = () => {
  // Caracterícas da linha para desenhar os traços
  tela.lineWidth = 6;
  tela.lineCap = 'round';
  tela.lineJoin = 'round';
  tela.strokeStyle = 'white';
  tela.beginPath();

  //ajusta os traços de acordo com  quantidade de letras
  let eixo = 600 / palavraSecreta.length;

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

poleBase = (x, y, width, height, color) => {
  tela.fillStyle = color;
  tela.fillRect(x, y, width, height);
  tela.fill();
};
//base horizontal "X"
poleBase(300, 1, 550, 50, 'darkGray');

//base vertical "Y"
poleBase(300, 1, 50, 750, 'darkGray');

//base from the "bottom"
poleBase(150, 750, 750, 50, 'darkGray');

//base from the "top-down"
poleBase(790, 1, 50, 150, 'darkGray');

//Desenhar letra correta
letraCorreta = (index) => {
  tela.font = 'bold 20px Arial';
  tela.lineWidth = 6;
  tela.lineCap = 'round';
  tela.lineJoin = 'round';
  tela.strokeStyle = 'yellow';

  let eixo = 600 / palavraSecreta.length;
  tela.fillText(palavraSecreta[index], 505 + eixo * index, 620);
  tela.stroke();
};

//Desenhar letra incorreta
letraIncorreta = (letra, errosLeft) => {
  tela.font = 'bold 20px Arial';
  tela.lineWidth = 6;
  tela.lineCap = 'round';
  tela.lineJoin = 'round';
  tela.strokeStyle = 'yellow';

  tela.fillText(letra, 535 + 40 * (10 - errosLeft), 710, 40);
  tela.stroke();
};

validaLetraCorreta = (key) => {
  if (letras.length < 1 || letras.indexOf(key) < 0) {
    console.log(key);
    letras.push(key);
    return false;
  } else {
    letras.push(key.toUpperCase());
    return true;
  }
};

adicionarLetraCorreta = (i) => {
  palavraCorreta += palavraSecreta[i].toUpperCase();
};

adicionarLetraIncorreta = (letter) => {
  if (palavraSecreta.indexOf(letter) <= 0) {
    erros -= 1;
  }
};

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
    }
  }
   else {
    if (!validaLetraCorreta(e.key)) 
      return;
      adicionarLetraIncorreta(letra);
      letraIncorreta(letra, erros);
    }
  }


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
