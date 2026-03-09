const express = require('express')
const app = express()
 
app.use(express.json())
 
const alunos = [
    {
        id: 1,
        nome: "Lavinia Bispo",
        email: "lavinia@gmail.com"
    },
    {
        id: 2,
        nome: "Livia Stockl",
        email: "livia@gmail.com"
    },
    {
        id: 3,
        nome: "Alexia Soares",
        email: "alexia@gmail.com"
    }
]
 
const professores = [
    {
        id: 1,
        nome: "Carlos",
        disciplina: "História",
        anoContratacao: 2025
    },
    {
        id: 2,
        nome: "Raul",
        disciplina: "Geografia",
        anoContratacao: 2026
    },
    {
        id: 3,
        nome: "Ana",
        disciplina: "Inglês",
        anoContratacao: 2015
    }
]
 
 
 
 
// rota padrão
app.get("/", function (req, res) {
    res.send("Hello World, você conseguiu!")
 
})
 
// rota específica
app.get("/alunos", function (req, res) {
    const nome = req.query.nome
 
 
    if (!nome) {
        return res.json(alunos)
    }
 
    const alunosFiltrados = alunos.filter(a =>
        a.nome.toLowerCase().includes(nome.toLowerCase())
    )
    res.json(alunosFiltrados)
 
})
 
app.post("/alunos", function (req, res) {
    const nomeQueVeioDoCliente = req.body.nome
    const emailQueVeioDoCliente = req.body.email
 
 
    if (!nomeQueVeioDoCliente || !emailQueVeioDoCliente) {
        return res.status(400).json({ erro: "Nome e e-mail são obrigatórios" })
    }
 
 
 
    // criando um obj novo, com as informações que veio do cliente
    const novoAluno = {
        id: 4,
        nome: nomeQueVeioDoCliente,
        email: emailQueVeioDoCliente
    }
 
    // add o novo aluno no final da lista
    alunos.push(novoAluno)
 
    res.status(201).send()
})
 
app.get("/alunos/:id", function (req, res) {
    const id = parseInt(req.params.id)
 
    const aluno = alunos.find(a => a.id == id)
 
    if (aluno) {
        return res.json(aluno)
    } else {
        res.status(404).json("Aluno não encontrado.")
    }
})
 
app.put("/alunos/:id", function (req, res) {
    const id = parseInt(req.params.id)
    /*  const nome = req.body.nome
     const email = req.body.email */
 
    const { nome, email } = req.body
 
    if (!nome || !email) {
        return res.status(400).json("Nome e email são obrigatórios")
    }
 
    const indexDoAluno = alunos.findIndex(a => a.id == id)
 
    if (indexDoAluno === -1) {
        return res.status(404).json("Aluno não encontrado")
    }
 
    alunos[indexDoAluno].email = email
    alunos[indexDoAluno].nome = nome
 
    return res.json(alunos[indexDoAluno])
 
})
 
app.delete("/alunos/:id", function (req, res) {
    const id = parseInt(req.params.id)
 
    const index = alunos.findIndex(a => a.id == id)
 
    const alunoRemovido = alunos.splice(index, 1)
    return res.status(204).json("Aluno deletado com sucesso")
}) 
 
//Monitora / escuta a porta 3000
app.listen(3000, function(){
    console.log("Servidor rodando na porta 3000!")
})
 
 
 
 
 
 
 
 
 
 
//Professores
 
//2- criar professor
app.post("/professores", function (req, res) {
    const nome = req.body.nome
    const disciplina = req.body.disciplina
    const anoContratacao = req.body.anoContratacao
 
    if (!nome || !disciplina || !anoContratacao) {
        return res.status(400).json("Nome, disciplina e ano de contratação são obrigatórios")
    }
 
    const novoProfessor = {
        id: 4,
        nome: nome,
        disciplina: disciplina,
        anoContratacao: anoContratacao
    }
 
    professores.push(novoProfessor)
 
    return res.status(201).json(novoProfessor)
})
 
 
 //3- Retorna od professores cadastrados
app.get("/professores/:id", function (req, res) {
    const id = parseInt(req.params.id)
 
    const professor = professores.find(p => p.id == id)
 
    if (!professor) {
        return res.status(404).json("Professor não encontrado")
    }
 
    return res.json(professor)
})
 
 
//3.1- listar professores (com filtro por ano)
app.get("/professores", function (req, res) {
    const anoContratacao = req.query.anoContratacao
 
    if (!anoContratacao) {
        return res.json(professores)
    }
 
    const filtrados = professores.filter(p =>
        p.anoContratacao == parseInt(anoContratacao)
    )
 
    return res.json(filtrados)
})
 

 //4- deletar professor
app.delete("/professores/:id", function (req, res) {
    const id = parseInt(req.params.id)
 
    const index = professores.findIndex(p => p.id == id)
 
    const professorRemovido = professores.splice(index, 1)
    return res.status(204).json("Professor deletado com sucesso")
})


//5- editar professor
app.put("/professores/:id", function (req, res) {
    const id = parseInt(req.params.id)
 
    const nome = req.body.nome
    const disciplina = req.body.disciplina
    const anoContratacao = req.body.anoContratacao
 
    if (!nome || !disciplina || !anoContratacao) {
        return res.status(400).json("Nome, disciplina e ano de contratação são obrigatórios")
    }
 
    const index = professores.findIndex(p => p.id == id)
 
    if (index === -1) {
        return res.status(404).json("Professor não encontrado")
    }
 
    professores[index].nome = nome
    professores[index].disciplina = disciplina
    professores[index].anoContratacao = anoContratacao
 
    return res.json(professores[index])
})
 
 
 
