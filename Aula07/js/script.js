function quadradoAzul(){
    //vamos criar um elemento HTML do tipo DIV e adicioná-lo a tela
    const divAzul = document.createElement("div");
    //Vamos adicionar um atributo de classe a nossa DIV
    divAzul.setAttribute("class", "divAzul");
    //Vamos adicionar um atributo de ID a nossa DIV
    divAzul.setAttribute("id", "divAzul");
    //Adicionar a divAzul ao nosso documento
    document.body.appendChild(divAzul);
}


//realizar a chamada da função quadradoAzul com o evento onLoad.
document.body.onload=quadradoAzul();

//quando passar o ponteiro do mouse sobre a div, mudar de cor
document.getElementById("divAzul").onmouseover=function(){
    document.getElementById("divAzul").style.backgroundColor="#800";

}
//quando passar o ponteiro do mouse sobre a div, mudar de cor novamente
document.getElementById("divAzul").onmouseout=function(){
    document.getElementById("divAzul").style.backgroundColor="#006";

}


const msg = function(){
    soma();
}




const soma = function(){
    let n1 = prompt("Digite um valor");
    let n2 = prompt("digite outro valor");
    let rs = parseInt(n1)+parseInt(n2);
    const label = document.createElement("label");
    label.innerHTML=rs
    document.body.appendChild(label);
}


//funções de seta
const msg2 = () =>{
    const es = prompt("digite quantos botões voce quer");
    for(let i = 0; i < es ; i++){
        const bt = document.createElement("button");
        bt.innerHTML=`botão  ${i} `;
        document.body.appendChild(bt);
    }

}

document.getElementById("divAzul").onclick=msg2;