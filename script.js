
function selecionar(elemento) {
    let pratoSelecionado = document.querySelector(".selecionado");
    if(pratoSelecionado !== null){
        pratoSelecionado.classList.remove("selecionado");
    }
    elemento.classList.add("selecionado");
    
}

