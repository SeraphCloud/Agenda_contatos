const form = document.getElementById('form')
const contatos = [];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    removeTfoot();
});

function adicionaLinha() {
    const nomeContato = document.getElementById('nome-contato');
    const numeroContato = document.getElementById('numero-contato');

    if (isNaN(numeroContato.value) || numeroContato.value.trim() === '') {
        alert('Por favor, insira um número de contato válido.');
        return;
    }

    if (contatos.some(contato => contato.numero === numeroContato.value)) {
        alert (`O numero ${numeroContato.value} já foi adicionado`);
    }else {
        contatos.push({ nome: nomeContato.value, numero: numeroContato.value });
    }

    let linha = '<tr>';
    linha += `<td>${nomeContato.value}</td>`;
    linha += `<td>${numeroContato.value}</td>`;
    linha += '<tr>';
    
    linhas += linha;
    
    nomeContato.value = '';
    numeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela  = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function removeTfoot(){
    const tfoot = document.querySelector('tfoot');
    if (tfoot) {
        tfoot.remove();
    }
}