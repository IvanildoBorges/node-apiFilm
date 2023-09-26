import { fastify } from 'fastify'

//Servidor
const server = fastify()

//rotas
server.get("/", () => {
    console.log("Hello World!");
})

//Inicia o servidor para escutar chamadas http na porta 3333
server.listen({
    port: 3333,
})