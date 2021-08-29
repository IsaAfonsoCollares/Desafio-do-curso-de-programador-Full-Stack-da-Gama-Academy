//carregando módulos
const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('./routes');
const app = express();
//configurando o mongoose
mongoose.Promise=global.Promise;
mongoose.connect("mongodb+srv://isa:01062926@gama.jju3d.mongodb.net/gama?retryWrites=true&w=majority", { 
    useNewUrlParser: true
}).then(() =>{
    console.log("mongodb conectado")
}).catch(err =>{
    console.log("Houve um error: " + err)
})

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(routes);

const port = process.env.PORT || 2903
app.listen(port, () =>{
    console.log('rodando na porta 2903')
})