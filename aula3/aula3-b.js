const http = require('http');
const url = require('url');
const porta = 3000; //Porta no localhost 
const host = '127.0.0.1';//localhost


//constante que cria o servidor 
const servidor =http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/html' });
    //res.write(req.url);
    const p = url.parse(req.url,true).query;
    res.write('<br>'+'<h1>Nome: '+ p.nome+'</h1>');
    res.write('<br>'+'<h3>Estou estudando '+ p.curso + '</h3>');
    res.end();
});

servidor.listen(porta, host, ()=>{ //um console log para mostrar que o servidor esta rodando.
    //funçao backlog
    console.log('Servidor rodando');
})