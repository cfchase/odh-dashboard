import { KubeFastifyInstance } from '../../../types';
import { FastifyReply, FastifyRequest } from 'fastify';
import { listDataProjects } from './list';
import { createDataProject } from './create';

module.exports = async (fastify: KubeFastifyInstance) => {
  fastify.options('/*', async (request: FastifyRequest, reply: FastifyReply) => {
    reply.code(204).send();
  });

  fastify.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    return listDataProjects(fastify)
      .then((res) => {
        return res;
      })
      .catch((res) => {
        reply.send(res);
      });
  });

  fastify.post('/', async (request: FastifyRequest, reply: FastifyReply) => {
    return createDataProject(fastify, request)
      .then((res) => {
        return res;
      })
      .catch((res) => {
        reply.send(res);
      });
  });

};
