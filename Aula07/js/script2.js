// Esta função cria um elemento de sombra e uma imagem para exibição em tela cheia.
function showImage(img){
    // Cria um elemento div para o efeito de sombra.
    const shadow = document.createElement("div");
    shadow.setAttribute("class","shadow"); // Define a classe CSS para o efeito de sombra.
    shadow.setAttribute("id", "shadow"); // Define um ID para o elemento de sombra.
    
    // Cria um elemento de imagem.
    const image = document.createElement("img");
    image.setAttribute("class","image"); // Define a classe CSS para a imagem.
    image.src=`img/${img}`; // Define o caminho da imagem para exibição.

    // Cria um link para fechar a imagem.
    const close = document.createElement("a");
    close.setAttribute("id", "close"); // Define um ID para o link de fechar.
    close.href="#"; // Define o destino do link para o mesmo local, simulando uma ação de fechar.
    close.innerHTML="&times;"; // Define o conteúdo do link como um símbolo 'x'.

    // Adiciona a imagem e o link de fechar ao elemento de sombra.
    shadow.appendChild(image);
    shadow.appendChild(close);
    
    // Adiciona o elemento de sombra ao corpo do documento HTML.
    document.body.appendChild(shadow);
}


const fotos = document.getElementById("fotos");
fotos.getElementsByTagName("img")[0].onclick=()=>{

    let url = fotos.getElementsByTagName("img")[0].src.split("/");

    showImage(url[url.length-1]);
}

fotos.getElementsByTagName("img")[1].onclick=()=>{
    let url = fotos.getElementsByTagName("img")[1].src.split("/");
    showImage(url[url.length-1]);
}


fotos.getElementsByTagName("img")[2].onclick=()=>{
    let url = fotos.getElementsByTagName("img")[2].src.split("/");
    showImage(url[url.length-1]);
}


fotos.getElementsByTagName("img")[3].onclick=()=>{
    let url = fotos.getElementsByTagName("img")[3].src.split("/");
    showImage(url[url.length-1]);
}


fotos.getElementsByTagName("img")[4].onclick=()=>{
    let url = fotos.getElementsByTagName("img")[4].src.split("/");
    showImage(url[url.length-1]);
}


fotos.getElementsByTagName("img")[5].onclick=()=>{
    let url = fotos.getElementsByTagName("img")[5].src.split("/");
    showImage(url[url.length-1]);
}


fotos.getElementsByTagName("img")[6].onclick=()=>{
    let url = fotos.getElementsByTagName("img")[6].src.split("/");
    showImage(url[url.length-1]);
}


  















/*function showImage(img) {
    // Cria um elemento <div> para servir como sombra de fundo da janela modal.
    const shadow = document.createElement("div");
    shadow.setAttribute("class", "shadow"); // Adiciona a classe "shadow" para aplicar estilos de sombra.
    shadow.setAttribute("id", "shadow"); // Define um ID único para o elemento de sombra.

    // Cria um elemento <img> para exibir a imagem desejada.
    const image = document.createElement("img");
    image.setAttribute("class", "image"); // Adiciona a classe "image" para aplicar estilos à imagem.
    image.src = `img/${img}`; // Define o caminho da imagem com base no parâmetro 'img'.

    // Cria um elemento <a> para permitir fechar a janela modal.
    const close = document.createElement("a");
    close.setAttribute("id", "close"); // Define um ID único para o botão de fechar.
    close.href = "#"; // Define o link de destino como "#" para evitar redirecionamentos.
    close.innerHTML = "&times;"; // Adiciona o símbolo '×' como conteúdo do botão de fechar.

    // Adiciona a imagem e o botão de fechar à sombra da janela modal.
    shadow.appendChild(image);
    shadow.appendChild(close);

    // Adiciona a sombra da janela modal ao corpo do documento HTML.
    document.body.appendChild(shadow);
}
*/