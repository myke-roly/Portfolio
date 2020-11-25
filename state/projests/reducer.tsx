import { InitialStateI, Types } from './types';

export interface ActionI {
  type: string;
  payload?: any;
}

const projectsReducer = (state: InitialStateI, action: ActionI) => {
  switch (action.type) {
    case Types.getProjectsStart:
      return {
        ...state,
        projects: null,
        isLoading: true,
        error: false,
      };
    case Types.getProjectsSuccess:
      return {
        ...state,
        projects: action.payload,
        isLoading: false,
        error: false,
      };
    case Types.getProjectsFail:
      return {
        ...state,
        projects: null,
        isLoading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default projectsReducer;
