const express = require('express')
const rotas = express.Router()

// 
let cursoInfo = [
    {'curso':'node', 'info':'Curso de Node js'},
    {'curso':'react', 'info':'Curso de React'},
    {'curso':'java', 'info':'Curso de Java'},
    {'curso':'arduino', 'info':'Curso de Arduino'},
];

rotas.get('/',(req, res)=>{
    res.json({ola:'Seja Bem vindo'})
})

rotas.get('/:cursoid',(req, res)=>{
    const curso = req.params.cursoid
    const cursoI = cursoInfo.find(i=>i.curso == curso)

    if (!cursoI){
        res.status(404).json(
            {erro:"Curso não encontrado",cursoPesquisa:curso}
        )
    }else{
        res.status(200).json(cursoI)
    }
})

module.exports = rotas