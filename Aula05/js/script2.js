var opcao = "";
opcao = prompt("Digite:\n1-Soma\n2-Subtrair\n3-Multiplicar\n4-Dividir\nS-para sair")

//while(opcao != "S" || opcao != "s" - uma opção de realizar a comparação--------------

while(opcao.toUpperCase() != "S"){
    
    if(opcao < 1 || opcao > 4){
        alert("Opção Inválida")
    }
    else{

    

    var n1 = prompt("Digite um número");
    var n2 = prompt("Digite outro número");
    var resultado = 0;
    //converter n1 e n2 para números de ponto flutuante (Float)
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    

    if(opcao == "1"){
        resultado = n1 + n2;
    }
    else if(opcao == "2"){
        resultado = n1 - n2;
    }
    else if(opcao == "3"){
        resultado = n1 * n2;
    }
    else if(opcao == "4"){
        resultado = n1 / n2;
    }
    else{
        resultado = "Opção inválida";
    }

    alert(resultado)
    }


    opcao = prompt("Digite:\n1-Soma\n2-Subtrair\n3-Multiplicar\n4-Dividir\nS-para sair")
}