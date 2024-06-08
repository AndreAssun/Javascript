let px = 0;
let canto = 0;
function movimentaRed(){
    if(px >= 600){
        px = 600

    }
    else{
        px +=5;
    }

    document.getElementById("um").style.marginLeft=px+"px";
    document.getElementById("um").style.borderRadius=canto+"px";
    canto+=1;

    let r = parseInt(Math.random()*255);
    let g = parseInt(Math.random()*255);
    let b = parseInt(Math.random()*255);

    document.getElementById("um").style.backgroundColor=`rgb(${r},${g},${b})`;
    
}

function relogio(){
    //referencia da biblioteca Date

    let tempo = new Date();
    let hora = tempo.getHours();
    let minuto = tempo.getMinutes();
    let segundo = tempo.getSeconds();
    document.getElementById("dois").innerHTML=`${hora} : ${minuto} : ${segundo}`;
}

window.setInterval(relogio,300)

//window.setInterval(movimentaRed,300)