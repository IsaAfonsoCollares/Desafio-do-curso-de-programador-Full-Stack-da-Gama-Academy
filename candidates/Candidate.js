const Candidate = require('../models/candidate_model');


module.exports = {
    async register(req, res) {

        const { cpf, rg, nome, data_nascimento, estado_civil, genero, cep, uf, logradouro, num, bairro, cidade, 
            telefone_f, celular, email, escolaridade, cargo_pretendido, profissao, habilitacao, veiculo } = req.body;

        const newCandidate = new Candidate();

        newCandidate.cpf = cpf;
        newCandidate.rg = rg;
        newCandidate.nome = nome;
        newCandidate.data_nascimento = data_nascimento,
        newCandidate.estado_civil = estado_civil,
        newCandidate.genero = genero;
        newCandidate.cep = cep;
        newCandidate.uf = uf;
        newCandidate.logradouro = logradouro;
        newCandidate.num = num;
        newCandidate.bairro = bairro;
        newCandidate.cidade = cidade;
        newCandidate.telefone_f = telefone_f;
        newCandidate.celular =celular;
        newCandidate.email = email;
        newCandidate.escolaridade = escolaridade;
        newCandidate.cargo_pretendido = cargo_pretendido;
        newCandidate.profissao = profissao;
        newCandidate.habilitacao = habilitacao;
        newCandidate.veiculo = veiculo;

        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Deu ruim!');
            }

            return res.status(200).send(savedCandidate);
        });
    },



};