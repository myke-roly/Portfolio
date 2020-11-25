export enum Types {
  getProjectsStart = 'GET_PROJECTS_START',
  getProjectsSuccess = 'GET_PROJECTS_SUCCESS',
  getProjectsFail = 'GET_PROJECTS_FAIL',
}

type ProjectI = {
  title: string;
  img: string;
  url: string;
  description: string;
  tools: {};
};

export interface InitialStateI {
  projects: ProjectI[] | null;
  isLoading: boolean;
  error: boolean;
}
