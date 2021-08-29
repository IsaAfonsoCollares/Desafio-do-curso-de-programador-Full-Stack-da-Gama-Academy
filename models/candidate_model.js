const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    cpf: {type: String, unique: true, required: true},
    rg: {type: String, unique: true, required: true},
    nome: { type: String, unique: false, required: true },
    data_nascimento: { type: Date, unique: false, required: true},
    estado_civil: { type: String, enum: ["#", "solteiro", "casado", "separado", "divorciado"], 
        unique: false, required: false},
    genero: { type: String, enum: ["#","feminino", "masculino","naobinario","outro", "naodeclarar"], unique : false, required: false},
    cep: { type: String, unique: false, required: true },
    uf: { type: String, unique: false, required: true},
    logradouro: { type: String, unique: false, required: true},
    num: { type: String, unique: false, required: true},
    bairro: { type: String, unique: false, required: true},
    cidade: { type: String, unique: false, required: true},
    telefone_f: { type: String, unique: false, required: false},
    celular: { type: String, unique: false, required: true},
    email: { type: String, unique: true, required: true },
    escolaridade: { type: String, enum: ["fund_i", "fund_c", "med_i", "med_c", "sup_i", 
        "sup_c", "pg_i", "pg_c", "mes_i", "mes_c", "dou_i", "dou_c"], 
        unique: false, required: false},
    cargo_pretendido:{ type: String, unique: false, required: false},
    profissao: { type: String, unique: false, required: false},
    habilitacao: { type: String, enum: ["#", "A", "B", "C", "D", "E","nao"], unique: false, required: false},
    veiculo:{ type: String, enum:["sim", "nao"] , unique: false, required: false}
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);