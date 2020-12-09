import { createContext, useReducer } from 'react';
import projectReducer from './reducer';
import { Types } from './types';

interface initialStateI {
  projects: [] | any;
  filterProjects?: [];
  isLoading: Boolean;
  error: Boolean;
}

const initialState = {
  projects: [],
  filterProjects: [],
  isLoading: false,
  error: false,
};

interface ProjectsI {
  id: number;
  title: string;
  img: string;
  description: string;
  live: string;
  code: string;
  tools: string[];
}

interface ContextI {
  state: initialStateI;
  getFilterProjects: (query: string, projects: ProjectsI[]) => void;
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

  function getFilterProjects(query: string, projects: ProjectsI[]): any {
    dispatch({ type: Types.getProjectsStart });

    const filter = projects.map((project: ProjectsI) => {
      if (query === 'all projects') return project;
      const tools = project?.tools?.map((tool: string) => tool);

      if (tools.find((tool: string) => tool === query)) {
        return project;
      }
      return {};
    });

    dispatch({
      type: Types.filterProjects,
      payload: filter,
    });
  }

  const providers: ContextI = {
    state,
    getProjects,
    getFilterProjects,
  };

  return <ProjectsContext.Provider value={providers}>{children}</ProjectsContext.Provider>;
};

export default ProjestsProvider;
