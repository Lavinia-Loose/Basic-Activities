// ------------------ CORRESPONDE AO CARRINHO.HTML ------------------- //
let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

// Função de adicionar + produtos no carrinho (variáveis)
let btnAdicionar = document.getElementById("btn-adicionar-produto-01")
let qtdProduto = document.getElementById("quantidade-produto-01")
let valorProduto = 100.00

// Função de adicionar + produtos no carrinho (variáveis)
let btnSubtrair = document.getElementById("btn-subtrair-produto-01")
let subtotalInfo = {
    quantidade: 1,
    valor: 100.00,
};

function atualizarDom() {
    quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
    valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);
}

function adicionarUm(){
    qtdProduto.value = Number(qtdProduto.value) + 1
    subtotalInfo.quantidade = subtotalInfo.quantidade + 1
    atualizarDom()
    subtotalInfo.valor = valorSubtotal + valorProduto
}
function subtrairUm(){
        qtdProduto.value = Number(qtdProduto.value) - 1
        subtotalInfo.quantidade = subtotalInfo.quantidade - 1
        subtotalInfo.valor = valorSubtotal + valorProduto
        atualizarDom()
}
if (subtotalInfo.quantidade == 1){
    btnAdicionar.addEventListener("click", adicionarUm)
} else{
    btnAdicionar.addEventListener("click", adicionarUm)
    btnSubtrair.addEventListener("click", subtrairUm)
}
// Manipular eventos
