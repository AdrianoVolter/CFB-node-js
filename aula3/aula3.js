const http = require('http');
const porta = 3000; //Porta no localhost 
const host = '127.0.0.1';//localhost


//constante que cria o servidor 
const servidor =http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type':'text/html' 
    });
    //condicional se requisição for igual a raiz =>
    if(req.url == '/'){
        res.write('<h1>Seja Bem Vindo  ! </h1>');

    }else if(req.url == '/canal'){
        res.write('<h1> CFB cursos !</h1>');

    }else if(req.url == '/curso'){
        res.write('<h1>Curso de Node js</h1>');

    }
    res.end();
});

servidor.listen(porta, host, ()=>{ //um console log para mostrar que o servidor esta rodando.
    //funçao backlog
    console.log('Servidor rodando');
})