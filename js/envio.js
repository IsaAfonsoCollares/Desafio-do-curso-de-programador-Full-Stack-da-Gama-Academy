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
} 

const createCandidate = async (candidato) => {
        const user = await fetch('https://desafio-gama-iac.herokuapp.com/register', {
            method: "POST",
            headers: {
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
            },
        body: JSON.stringify(Form())
        });
        if (user.status == 200) {
          console.log(Form())
          window.open('/extras/valido.html')
         } 
        if (user.status == 500) {
          window.open('/extras/duplicado.html')
        }
}
function checkForm() {
  let cpf: document.getElementById('id_cpf').value;
  let rg: document.getElementById('id_rg').value;
  let nome: document.getElementById('nome_completo').value;
  let data_nascimento: document.getElementById('data_nascimento').value;
  let estado_civil: document.getElementById('estado_civil').value;
  let genero: document.getElementById('genero').value;
  let cep: document.getElementById('cep').value;
  let uf: document.getElementById('uf').value;
  let logradouro: document.getElementById('end').value;
  let num: document.getElementById('num').value;
  let bairro: document.getElementById('bairro').value;
  let cidade: document.getElementById('cidade').value;
  let telefone_f: document.getElementById('telefone_f').value;
  letcelular: document.getElementById('celular').value;
  let email: document.getElementById('email').value;
  let escolaridade: document.getElementById('escolaridade').value;
  let cargo_pretendido: document.getElementById('cargo').value;
  let profissao: document.getElementById('profissao').value;
  let habilitacao: document.getElementById('habilitacao').value;
  let veiculo: document.getElementById('veiculo').value;

  if (nome == '' || cpf == '' || data_nascimento == '' || cep == '' || logradouro == '' || num == '' || bairro == '' || cidade == ''
  || celular == '' || email == '' || profissao == '' || cargo == ''){
      document.getElementById('errorSubmit').style.display = 'block'; 
  } else {
      createCandidate();
      alert('verificando cadastro...');
  }
}