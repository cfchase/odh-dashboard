import { KubeFastifyInstance, Project} from '../../../types';
import { FastifyRequest } from 'fastify';

export const createDataProject = async (
  fastify: KubeFastifyInstance,
  request: FastifyRequest,
): Promise<Project> => {
  const customObjectsApi = fastify.kube.customObjectsApi;
  try {
    const project = await customObjectsApi
      .createClusterCustomObject('project.openshift.io', 'v1', 'projects', request.body as object)
      .then((res) => res.body as Project);
    return Promise.resolve(project);
  } catch (e) {
    fastify.log.error(`failed to get projects`);
    return Promise.resolve(null);
  }
};
