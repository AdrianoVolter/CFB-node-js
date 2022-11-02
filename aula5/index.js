const http = require('http')
const fs = require('fs')
const porta = process.env.PORT

const server =http.createServer((req, res)=>{
    
    res.send("Bem vindo")
    fs.appendFile("teste.txt", "\nCurso de Node js\n",(err) => {
        if(err)throw err
        console.log('Aquivo criado')
    })

})

server.listen(porta || 3000, ()=>{console.log('Servidor Rodando')})