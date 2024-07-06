const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const morgan = require("morgan");
const app = express()
app.use(express.json());
app.use(cors());
app.use(morgan("combined"));

const con = mysql.createConnection({
    host:"127.0.0.1",
    port:3307,
    user:"root",
    password:"",
    database:"bancolivros"
})
con.connect((error)=>{
    if(error)
        return console.error(`Erro ao tentar estabelecer a conexao com o banco de dados -> ${error}`);
})

const rota = `/api/v1/livros`;

app.get(`${rota}/listar`,(req,res)=>{
    con.query("Select * from livro order by idlivro desc",(error, result)=>{
        if(error){
            return res.status(500).send({ msg: `Erro ao tentar carregar os livros -> ${error}`});
        }
        res.status(200).send({msg:"OK", payload:result});
    });
});

app.get(`${rota}/pesquisar/:titulo`,(req,res)=>{
    con.query("Select * from livro  where titulo like ?",['%'+req.params.titulo+'%'],(error, result)=>{
        if(error){
            return res.status(500).send({ msg: `Erro ao tentar carregar os livros -> ${error}`});
        }
        res.status(200).send({msg:"OK", payload:result});
    });
});

app.post(`${rota}/cadastrar`,(req,res)=>{
    con.query("insert into livro set ?",req.body,(error,result)=>{
        if(error){
            return res.status(500).send({ msg: `Erro ao tentar carregar os livros -> ${error}`});
        }
        res.status(201).send({msg:"OK", payload:result});
    });
});



app.listen(5000,()=>console.log(`Servidor Online`))