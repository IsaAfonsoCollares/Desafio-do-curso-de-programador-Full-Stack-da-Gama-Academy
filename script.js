'use strict';
//página principal
//validador de cpf
/*const validarCpf = () =>{
    var cpfPessoa = document.getElementById('id_cpf').value;
    if (!!cpfPessoa.match(/(\d)\1{10}/)) {
        alert('CPF invalido')
    }
    if (cpfPessoa.length == 11){
        var Soma;
        var Resto;
        var i;
        Soma = 0;  
        var digitos = Array.from(cpfPessoa);  
        for (i=1; i<=9; i++) {
            Soma = Soma + (digitos[i-1]*(11 - i));
        }
        Resto = (Soma*10) % 11;
        Soma=0;
        if ((Resto == 10) || (Resto == 11)){
            Resto = 0;
        } 
        if (Resto != digitos[9]){
            alert("CPF inválido");
        }
        else{
            for (i= 1; i <= 10; i++) {
                Soma = Soma + (digitos[i-1] * (12 -i));
            }
            Resto = (Soma * 10) % 11;
            if ((Resto == 10) || (Resto == 11)){
                 Resto = 0;
            }
            if (Resto != digitos[10]){
                alert("CPF inválido");
            }
        }  
    }
    if (cpfPessoa.length>0 && cpfPessoa.length<11){
        alert("Números faltando, verifique os digitos");
    }
    if (cpfPessoa.length>11){
        alert("Números demais, verifique os digitos");
    }
}
document.getElementById('id_cpf').addEventListener('focusout',validarCpf)
*/
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
        const url = `http://viacep.com.br/ws/${cep}/json/`;
        const dados = await fetch(url);
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
