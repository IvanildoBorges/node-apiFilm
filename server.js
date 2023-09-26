import { fastify } from 'fastify'

//Servidor
const server = fastify()

//rotas
server.get('/videos', () => {
    return "Hello World!"
}) //Rota padrão

server.post('/videos', () => {
    return "Created!"
})

server.put('/videos/:id', () => {
    return "Updated!"
})

server.delete('/videos/:id', () => {
    return "Deleted!"
})

//Inicia o servidor para escutar chamadas http na porta 3333
server.listen({
    port: 3333,
})