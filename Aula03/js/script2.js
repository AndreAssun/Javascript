// escolha = prompt("digite uma das opções para a cor de fundo:\n 1-Azul\n 2-Vermelho\n 3-Amarelo\n 4-Cinza");

// if(escolha==1){
//     document.body.style.backgroundColor="blue";
// }
// else if(escolha==2){
//     document.body.style.backgroundColor="red";
// }
// else if(escolha==3){
//     document.body.style.backgroundColor="yellow";
// }
// else if(escolha==4){
//     document.body.style.backgroundColor="gray";
// }
// else{
//     document.body.style.backgroundColor="white";
// }

escolha = prompt("digite uma das opções para a cor de fundo:\n 1-Azul\n 2-Vermelho\n 3-Amarelo\n 4-Cinza");
var cor ="white";

if(escolha==1){
    cor="blue";
}
else if(escolha==2){
    cor="red";
}
else if(escolha==3){
    cor="yellow";
}
else if(escolha==4){
    cor="gray";
}
else{
    cor;
}

document.body.style.backgroundColor=cor;