const img = "https://image.tmdb.org/t/p/w500";
const estrutura = document.querySelector("#estrutura");

/*
Para carregar os dados da API do themoviedb, iremos usar o comando fetch(buscar) para buscar os dados dos filmes populares. Este comando tem dois elementos atrelados, sãoe eles:

then -> então: Quando a execução comando fetch funciona
catch -> captura de erro: Quando a execução do comando fetch falha.

O fetch é uma Promise
*/
fetch("https://api.themoviedb.org/3/movie/popular?language=pt-br&page=1&api_key=030ff439ce40f227bef56936ead9bed9")
.then((response)=>response.json())
.then((dados)=>{
    
    dados.results.map((filme)=>{
        let cartaz = document.createElement("div");
        cartaz.setAttribute("class","cartaz");
        let poster = document.createElement("img");
        poster.src = img+filme.poster_path;


        let votos = document.createElement("div");
        votos.setAttribute("class","votos")
        votos.innerHTML = Math.round(filme.vote_average)+"%";

        let titulo = document.createElement("h2");
        titulo.innerHTML = filme.title;

        let lancamento = document.createElement("p");
        lancamento.setAttribute("class", "lancamento");

        /* Vamos utilizar o comando chamado substring, que nos ajuda a quebrar uma string com base na posição do caracter e a quantidade de caracteres
        Por exemplo: 2024-06-29. Para pegar os quatro primeiros digitos usamos:
        substring(0,4) */

        let ano = filme.release_date.substring(0,4);
        let mes = filme.release_date.substring(5,7);
        let dia = filme.release_date.substring(8,10);

        switch(mes){
            case "01":
                mes = "Jan";
                break;

            case "02":
                mes = "Fev";
                break;
            
            case "03":
                mes = "Mar";
                break; 
                
            case "04":
                mes = "Apr";
                break;    

            case "05":
                mes = "May";
                break;    

            case "06":
                mes = "Jun";
                break;
                
                
            case "07":
                mes = "Jul";
                break; 

            case "08":
                mes = "Aug";
                break;
                
            case "09":
                mes = "Set";
                break; 
                
            case "10":
                mes = "Out";
                break;

            case "11":
                mes = "Nov";
                break;
            default:

            case "12":
                mes = "Dez";
                break;

                
        }





        lancamento.innerHTML=`${dia} de ${mes} de ${ano}`;



        cartaz.appendChild(poster);
        cartaz.appendChild(votos);
        cartaz.appendChild(titulo);
        cartaz.appendChild(lancamento);


        estrutura.appendChild(cartaz);
    })


})
.catch((erro)=>console.error(erro));


// const cidades = ["Leme","Guarulhos","São Paulo","Maua","Suzano"];
// let p=1;

//cidades.forEach(exibir);
//function exibir(itens){
//   console.log(`${p}ª${itens}`);
//  p++;
//}

// cidades.forEach((itens)=>{
//     console.log(`${p}ª${itens}`);
//     p++;
// });

// cidades.map((itens)=>{
//     console.log(`${p}ª${itens}`);
//     p++
// });