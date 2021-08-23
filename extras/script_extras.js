'use strict';
//botão enviar da página de contato
window.onload = function (){
    const mesangem_contato = () => {
        var nomePessoa =document.getElementById('nome').value;
        var emailPessoa =document.getElementById('email_c').value;
        var campoMensagem = document.getElementById('mens').value;
        if (nomePessoa=="" || emailPessoa=="" || campoMensagem=="" ){
            alert("Preencher todos os campos");
        }
        else{
            alert("Mensagem Enviada");
            document.getElementById('nome').value = "";
            document.getElementById('email_c').value= "";
            document.getElementById('mens').value= "";
        }
    }
    document.getElementById('mensagem').addEventListener('click', mesangem_contato)

}