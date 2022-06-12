let prato; 
let bebida; 
let sobremesa;
let valorPrato = 0;
let valorBebida = 0;
let valorSobremesa = 0;
let total = 0; 

function selecionarPrato(elemento) {
    prato = elemento.querySelector(".nomePrato").innerHTML;
    valorPrato = elemento.querySelector(".valor").innerHTML;
    valorPrato = Number(valorPrato);
    let pratoSelecionado = document.querySelector(".selecionado");
    if(pratoSelecionado !== null){
        pratoSelecionado.classList.remove("selecionado");
    }
    elemento.classList.add("selecionado");
    mudaBotao();
    
}


function selecionarBebida(elemento) {
    bebida = elemento.querySelector(".nomeBebida").innerHTML;
    valorBebida = elemento.querySelector(".valor").innerHTML;
    valorBebida = Number(valorBebida);
    let bebidaSelecionada = document.querySelector(".bebidas .selecionado");
    if(bebidaSelecionada !== null){
        bebidaSelecionada.classList.remove("selecionado");
    }
    elemento.classList.add("selecionado");
    mudaBotao();
}

function selecionarSobremesa(elemento) {
    sobremesa = elemento.querySelector(".nomeSobremesa").innerHTML;
    valorSobremesa = elemento.querySelector(".valor").innerHTML;
    valorSobremesa = Number(valorSobremesa);
    let sobremesaSelecionada = document.querySelector(".sobremesas .selecionado");
    if(sobremesaSelecionada !== null){
        sobremesaSelecionada.classList.remove("selecionado");
    }
    elemento.classList.add("selecionado");
    mudaBotao();
}


function mostraIconePrato(elemento) {
    let icone = elemento.querySelector('.pratos .check');
    let aux = document.querySelector('.pratos .show');
    if(aux !== null){
        aux.classList.remove("show");
    }
    icone.classList.add("show");
   
}

function mostraIconeBebida(elemento) {
    let icone = elemento.querySelector('.bebidas .check');
    let aux = document.querySelector('.bebidas .show');
    if(aux !== null){
        aux.classList.remove("show");
    }
    icone.classList.add("show");
   
}

function mostraIconeSobremesa(elemento) {
    let icone = elemento.querySelector('.sobremesas .check');
    let aux = document.querySelector('.sobremesas .show');
    if(aux !== null){
        aux.classList.remove("show");
    }
    icone.classList.add("show");
   
}

function mudaBotao(){
    const botao = document.querySelector("button");
    if(prato && bebida && sobremesa){
       botao.style.backgroundColor = "#32b72f";
       botao.innerHTML = "Fechar pedido";
       
    }
}


function fecharPedido() {
    total = valorPrato + valorBebida + valorSobremesa;
    total = total.toFixed(2);
    let msg = `Olá, gostaria de fazer o pedido:
    - Prato: ${prato}
    - Bebida: ${bebida}
    - Sobremesa: ${sobremesa}
    Total: R$ ${total}`;
    let encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/5521973174494?text=${encoded}`);
}