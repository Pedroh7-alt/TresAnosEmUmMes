import express from 'express';

const app = express();

app.listen(3002, () => console.log("servidor inciado"));

app.get('/'), (req, res) =>
    res.send('<h1 style="color: blue"> Criando um servidor </h1> ')