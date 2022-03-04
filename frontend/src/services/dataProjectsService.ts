import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { DataProjectsState } from '../redux/types';
import { Action } from 'redux';
import {
  getDataProjectsFulfilled,
  getDataProjectsPending,
  getDataProjectsRejected,
  // createDataProjectPending,
  // createDataProjectFulfilled,
  // createDataProjectRejected,
} from '../redux/actions/actions';
import { Project } from '../types';

export const fetchDataProjects = (): ThunkAction<
  void,
  DataProjectsState,
  unknown,
  Action<string>
> => {
  const url = '/api/data-projects';
  return async (dispatch) => {
    dispatch(getDataProjectsPending());

    try {
      const response = await axios.get(url, {});
      dispatch(getDataProjectsFulfilled(response.data));
    } catch (e) {
      dispatch(getDataProjectsRejected(e.response.data));
    }
  };
};

// export const createDataProject = (): ThunkAction<
//   void,
//   DataProjectsState,
//   unknown,
//   Action<string>
// > => {
//   const url = getBackendURL('/api/data-projects');
//   return async (dispatch) => {
//     dispatch(createDataProjectPending());
//     try {
//       const response = await axios.post(url, {});
//       dispatch(createDataProjectFulfilled(response.data));
//     } catch (e) {
//       dispatch(createDataProjectRejected(e.response.data));
//     }
//   };
// };

export const createDataProject = (name: string, description: string): Promise<Project> => {
  const url = '/api/data-projects';
  const data = {
    metadata: {
      name,
    },
    displayName: name,
    description,
  };

  return axios
    .post(url, data)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      throw new Error(e.response.data.message);
    });
};
