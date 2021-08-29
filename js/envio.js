const Form = () => {

    let form = {
        cpf: document.getElementById('id_cpf').value,
        rg: document.getElementById('id_rg').value,
        nome: document.getElementById('nome_completo').value,
        data_nascimento: document.getElementById('data_nascimento').value,
        estado_civil: document.getElementById('estado_civil').value,
        genero: document.getElementById('genero').value,
        cep: document.getElementById('cep').value,
        uf: document.getElementById('uf').value,
        logradouro: document.getElementById('end').value,
        num: document.getElementById('num').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        telefone_f: document.getElementById('telefone_f').value,
        celular: document.getElementById('celular').value,
        email: document.getElementById('email').value,
        escolaridade: document.getElementById('escolaridade').value,
        cargo_pretendido: document.getElementById('cargo').value,
        profissao: document.getElementById('profissao').value,
        habilitacao: document.getElementById('habilitacao').value,
        veiculo: document.getElementById('veiculo').value,
    };
    
    console.log(form);
    return form
    
} 

const createCandidate = async (candidato) => {
  
const user = await fetch('https://desafio-gama-iac.herokuapp.com/register', {
    method: "POST",
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Accept': 'application/json',
        'Content-Type':'application/json'
        },
    body: JSON.stringify(Form())
    });
      if (user.status == 200) {
          console.log(Form())
          window.open('/extras/valido.html')
      } if (user.status == 500) {
          window.open('/extras/duplicado.html')
      }
    
}
document.getElementById('enviar').addEventListener('click', createCandidate)