const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

const app = express();

mongoose.set('useCreateIndex', true)

mongoose.connect('mongodb+srv://oministack:PQoNviG1KuKqFWmL@semana-oministack-m4jii.gcp.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology : true
})

app.use(express.json());
app.use(routes);

// Query Params: req.quer (Filtro, Ordenação, Paginação)
// Route Params:request.params (Identificar um recurso na alteração ou exclusão)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (NoSQL)

app.listen(3333);