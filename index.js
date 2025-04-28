const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Bem-vindo ao Projeto Cloud 2026!</h1>");
});

app.get("/contato", (req, res) => {
    res.send("<h1>Página de contato: fale conosco.</h1>");
});

app.get("/sobre", (req, res) => {
    res.send("<h1>Sobre: projeto de deploy em nuvem.</h1>");
});

app.get("/cliente/:id", (req, res) => {
    res.send("Cliente ID: " + req.params.id);
});

app.get("/produto/:nome", (req, res) => {
    const nome = req.params.nome;
    if (nome) {
        res.send("Produto: " + nome);
    } else {
        res.send("Nenhum produto informado.");
    }
});

app.listen(process.env.PORT ?? 3000, () => {
    console.log("Servidor rodando na porta 3000.");
});
