var miniatura = document.getElementsByClassName("miniatura")[0];
var fullsize = document.getElementsByClassName("fullsize")[0];

/*
O comando abaixo faz uma contagem de 1 a 5 e incrementa de um em um. Dentro do corpo do for é chamada a div miniatura e inserimos nela um comando html para a exibição de imagens e este comando é repetido tantas vezes que é pedido no comando for. Quando há a contagem o nome da foto é incrementado com o número de variável i. Fazendo uma contagem de 1 a 5 e exibir as imagens de foto1 até foto5 dentro da div miniatura.
*/ 

for ( var i = 1 ; i <=5 ; i++){
    miniatura.innerHTML+="<img src=img/foto"+i+".jpg onclick=abrir("+i+")>";

}
//jeito mais trabalhoso e errado de fazer a galeria funcionar, ja que se repetiria muitas vezes
// document.getElementsByTagName("img")[0].onclick = function(){
//     fullsize.innerHTML="<img src=img/foto1.jpg>";
// }
// document.getElementsByTagName("img")[1].onclick = function(){
//     fullsize.innerHTML="<img src=img/foto2.jpg>";
// }

//Jeito correto de fazer a função
/*
A função abrir é chamada todas s vezes que uma foto da miniatura é clicada.
Quando a miniatura é clicada, ela dispara um evento chamando onclick e chama a função abrir passando por parâmetro (argumento) um número, que é a posição da foto. Assim, a função abrir recebe o número passado e armazena na variável p. Esta variável é usada para formar o nome da foto que será carregada na div fullsize como vemos abaixo.
*/ 
function abrir(p){
          fullsize.innerHTML="<img src=img/foto"+(p)+".jpg>";
}

