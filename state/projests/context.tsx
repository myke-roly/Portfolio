import { createContext, useReducer } from 'react';
import projectReducer from './reducer';
import { Types } from './types';

const initialState = {
  projects: null,
  isLoading: false,
  error: false,
};

export const ProjectsContext = createContext<any>(undefined);

const ProjestsProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(projectReducer, initialState);

  function getProjects() {
    dispatch({ type: Types.getProjectsStart });

    setTimeout(
      () =>
        dispatch({
          type: Types.getProjectsSuccess,
          payload: [{ title: 'Hei' }],
        }),
      3500
    );
  }

  const providers: any = {
    projects: state.projects,
    getProjects,
  };

  return <ProjectsContext.Provider value={providers}>{children}</ProjectsContext.Provider>;
};

export default ProjestsProvider;
