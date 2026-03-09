# API Escola - Node.Js + Express
API REST simples para gerenciar alunos e professores
 
## Pré-requisitos
- Node.js instalado
 
##   Como rodar
 
### Instalar dependências
```bash
npm i
```
 
### Iniciar  servidor
```bash
node index.js
```
 
### Acessar
Abra o nevegador em: `http://localhost:3000`
 
## Endpoints
 
### Alunos
 
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/alunos` | Lista todos os alunos |
| GET | `/alunos/:id` | Buscar um aluno específico |
| POST | `/alunos` | Cria um aluno |
| PUT | `/aluno/:id` | Atualiza um aluno |
| DELETE | `/aluno/:id` | Remove um aluno |
 
### Professores
 
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/professores` | Lista todos os professores |
| POST | `/professores` | Cria um professor |
| PUT | `/professores/:id` | Atualiza um professor |
| DELETE | `/professores/:id` | Remove um professor |
 
## Tenologias 
- Node.js
- Express
 
## Notas 
- Os dados são armazenados em memória (reiniciar o servidor apaga tudo)
