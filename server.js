import { fastify } from 'fastify' // Servidor Node HTTP com Fastify
import { DatabasePostgres } from './database-postgre.js'

//Servidor
const server = fastify()

//Banco de dados postgres
const database = new DatabasePostgres()

//rotas
server.get('/videos', async (request) => {
    const search = request.query.search
    const videos = await database.list(search)

    return videos
}) //Rota padrão

server.post('/videos', async (request, reply) => {
    const { title, description, duration } = request.body

    await database.create({ 
        title, 
        description, 
        duration 
    }) //short syntax

    return reply.status(201).send()
})

server.put('/videos/:id', async (request, reply) => {
    const videoId = request.params.id
    const { title, description, duration } = request.body
    
    await database.update(videoId, {
        title, 
        description, 
        duration
    })

    return reply.status(204).send()
})

server.delete('/videos/:id', async (request, reply) => {
    const videoId = request.params.id

    await database.delete(videoId)

    return reply.status(204).send()
})

//Inicia o servidor para escutar chamadas http na porta 3333
server.listen({
    port: process.env.PORT ?? 3333,
})