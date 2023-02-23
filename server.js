const fastify = require('fastify')();
fastify.get('/', (request, reply) => {
  reply.send({ hello: 'world' })
})
fastify.listen(3000, (err, address) => {
  if (err) throw err
  // Server is now listening on ${address}
}) 