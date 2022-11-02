const express = require('express');
const app = express();
const fs = require('fs')
const porta = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Seja bem vindo ao servidor!");

    fs.appendFile("teste.txt", "\nCurso de Node js\n ", (err) => {
        if (err) throw err
        console.log('Aquivo criado')
    })


});

app.get("/curso", (req, res) => {
    res.json({
        canal: "Seja bem vindo ao servidor!"
    });
});

app.listen(porta || 3000, () => {
    console.log("\n----TUDO OK----\n>>>>> SERVIDOR RODANDO <<<<<\n");
});
