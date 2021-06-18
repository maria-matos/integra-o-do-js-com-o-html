let header= document.querySelector('header');
header.innerHTML='<h1>Página utilizando JavaScript</h1>    <nav> <ul> <li><a href="../js.html"> JavaScript</a></li>     <li><a href="../index.html"> Homepage</a></li>';

let main = document.querySelector('main');
main.innerHTML = '<article> <h2> Fotos de um coala </h2>  <p>Adulto e bebê:</p>  <ul><li><a href="#bebe">Coala bebê</a></li></ul> <ul><li><a href="#adulto> Coala adulto"</a></li></ul>  <br><br><br><br><br> <h3> Coalas</h3> <p>Os coalas são marsupiais que ficam grande parte do tempo em árvores. Os coalas apresentam entre 5 e 13 quilos e comprimento entre 60 e 85 centímetros. Assim como todos os mamíferos, possuem pelos, que são espessos, pequenos e densos.</p> <img src="coalaAdulto.jpg" id="foto1"/> <button onclick="clicouNoBotaoCoala()">1</button> <button onclick="clicouNoBotaoCoala()">2</button><button onclick="clicouNoBotaoCoala()">3</button> </article> <br><br><br><br><br> <div> <section><h3> Coala bebê</h3> <p>Os coalas são marsupiais que ficam grande parte do tempo em árvores. Os coalas apresentam entre 5 e 13 quilos e comprimento entre 60 e 85 centímetros. Assim como todos os mamíferos, possuem pelos, que são espessos, pequenos e densos.</p> <img scr="coala.jpg" id="foto2"/> <buttobebê onclick="clicouNoBotaobebê()">1</buttobebê><button onclick="clicouNoBotaobebê()">2</button><button onclick="clicouNoBotaobebê()3">1</button> </div>  '

let article = document.querySelector('div');
article.id = "adulto";

let div = document.querySelector('section');
article.id = "bebe";

let img1 = document.querySelector ('img#foto1');
let imagemAtual=1;

function clicouNoBotaoCoalaadulto () {
    if (imagemAtual === 1){
        img1.src="coalaAdulto.jpg";
        imagemAtual = 1;
    } else if (imagemAtual === 1) {
        img1.src="coalaAdulto2.jpg";
    } else {
        img1.src="coalaAdulto3.jpg";
        imagemAtual = 1
    }
}

let img2 = document.querySelector('img#foto2');

function clicouNoBotaobebê () {
    if (imagemAtual === 0) {
        img2.src="coala.jpg";
        imagemAtual = 1;
    } else if (imagemAtual === 1) {
        img2.src="coala2.jpg";
        imagemAtual = 2;
    } else {
        img2.src="coala3.jpg";
        imagemAtual = 0;
    }
}







