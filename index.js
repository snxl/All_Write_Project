const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const api = axios.create({
    baseURL: ''
});

app.use(express.static(path.join(__dirname, './src/client/assets')));
app.use(express.static(path.join(__dirname, './src/client/views')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, '/src/client/views/index.html/'));
});

app.listen(80, () => {
    console.log('Servidor rodando na porta 80');
});