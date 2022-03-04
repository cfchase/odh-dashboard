import { KubeFastifyInstance, ProjectList} from '../../../types';

export const listDataProjects = async (fastify: KubeFastifyInstance): Promise<ProjectList> => {
  const customObjectsApi = fastify.kube.customObjectsApi;
  try {
    const projectList = await customObjectsApi
      .listClusterCustomObject('project.openshift.io', 'v1', 'projects')
      .then((res) => res.body as ProjectList);
    return Promise.resolve(projectList);
  } catch (e) {
    fastify.log.error(`failed to get projects`);
    return Promise.resolve(null);
  }
};
