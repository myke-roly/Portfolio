import { createContext, useReducer } from 'react';
import projectReducer from './reducer';
import { Types } from './types';

interface initialStateI {
  projects: [];
  isLoading: Boolean;
  error: Boolean;
}

const initialState = {
  projects: [],
  isLoading: false,
  error: false,
};

interface ProjectsI {
  id: number;
  title: string;
  img: string;
  description: string;
  live: string; //"https://healthy-front.vercel.app/"
  code: string; //"https://github.com/Healthy-Dev"
  tools: string;
}

interface ContextI {
  state: initialStateI;
  getProjects: (projects: ProjectsI[]) => void;
}

export const ProjectsContext = createContext<any>(undefined);

const ProjestsProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(projectReducer, initialState);

  function getProjects(projects: ProjectsI[]): void {
    dispatch({ type: Types.getProjectsStart });

    dispatch({
      type: Types.getProjectsSuccess,
      payload: projects,
    });
  }

  const providers: ContextI = {
    state,
    getProjects,
  };

  return <ProjectsContext.Provider value={providers}>{children}</ProjectsContext.Provider>;
};

export default ProjestsProvider;
