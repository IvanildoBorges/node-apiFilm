# node-apiFilm
Aplicação de uma API de um streaming de video em NodeJS com Fastify

### Projeto de um sistema de streaming de video usando o framework Fastify no NodeJS.

### Tecnologias
- NodeJS v19.7
- Fastify
- PostgreSQL v16

### Como rodar o projeto

1 - Clone o repositório

2 - Instale as dependências:
    
    npm install

3 - Crie o banco dbApiFilm no PostgreSQL

4 - Crie um arquivo .env com as variáveis:

    PGHOST='localhost'
    PGPORT='5432'
    PGDATABASE='dbApiFilm'
    PGUSER='postgres'
    PGPASSWORD='sua_senha_do_banco_postgres'

5 - Instale o plugin DOTENV no seu VSCode

6 - Execute o comando para criar a tabela videos:

    npm run db

7 - Execute o projeto

    npm run dev
