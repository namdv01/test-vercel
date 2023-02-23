const fastify = require('fastify')();
fastify.get('/', (request, reply) => {
  reply.send({ hello: 'world' })
})
fastify.listen({ port: 3000, host: '0.0.0.0' }, (err, address) => {
  if (err) throw err
  // Server is now listening on ${address}
}) 