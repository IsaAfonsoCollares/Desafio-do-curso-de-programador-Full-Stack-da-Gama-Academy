'use strict';
//api VIA CEP
const preencherFormulario = (endereco) => {
    document.getElementById('end').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;
}
const limparEnd = () =>{
    document.getElementById('end').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('uf').value = "";
}
const pesquisarCep = async() => {
    const cep = document.getElementById('cep').value;
    if (cep.length == 8){
        const url_cep = `https://viacep.com.br/ws/${cep}/json/`;
        const dados = await fetch(url_cep);
        const endereco = await dados.json();
        if (endereco.hasOwnProperty('erro')){
            alert('CEP não encontrado. Informar novo CEP');
         }
        else{
             preencherFormulario (endereco);
        }
    }
    if (cep.length>0 && cep.length<8){
        alert('Números faltando, verifique os digitos');
    }
    if (cep.length>8){
        alert('Números demais, verifique os digitos');
    }
}
document.getElementById('cep').addEventListener('click', limparEnd);
document.getElementById('cep').addEventListener('focusout', pesquisarCep);
