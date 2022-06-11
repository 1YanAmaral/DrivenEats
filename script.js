let prato; 
let bebida; 
let sobremesa; 

function selecionarPrato(elemento) {
    prato = elemento.innerHTML;
    let pratoSelecionado = document.querySelector(".selecionado");
    if(pratoSelecionado !== null){
        pratoSelecionado.classList.remove("selecionado");
    }
    elemento.classList.add("selecionado");
    mudaBotao();
    
}

function selecionarBebida(elemento) {
    bebida = elemento.innerHTML;
    let bebidaSelecionada = document.querySelector(".bebidas .selecionado");
    if(bebidaSelecionada !== null){
        bebidaSelecionada.classList.remove("selecionado");
    }
    elemento.classList.add("selecionado");
    mudaBotao();
}

function selecionarSobremesa(elemento) {
    sobremesa = elemento.innerHTML;
    let sobremesaSelecionada = document.querySelector(".sobremesas .selecionado");
    if(sobremesaSelecionada !== null){
        sobremesaSelecionada.classList.remove("selecionado");
    }
    elemento.classList.add("selecionado");
    mudaBotao();
}


function mudaBotao(){
    const botao = document.querySelector("button");
    if(prato && bebida && sobremesa){
       botao.style.backgroundColor = "#32b72f";
       botao.innerHTML = "Fechar pedido";
       
    }
}

function mostraIcone(elemento) {
    let icone = elemento.querySelector('.pratos .check');
    let aux = document.querySelector('.pratos .show');
    console.log(aux);
    console.log(icone);
    if(aux !== null){
        aux.classList.remove("show");
    }
    icone.classList.add("show");
   
}

/*function fecharPedido() {
    let msg = `Olá, gostaria de fazer o pedido:
    - Prato: ${nomePrato}
    - Bebida: ${nomeBebida}
    - Sobremesa: ${nomeSobremesa}
    Total: R$ ${total}`
}*/