import React, { useContext, useEffect } from 'react';
import { projects, DataI } from '__data';
import { itemsTools } from '__data/tools';
import { ProjectsStyled, ItemsStyled, ItemStyled, ListProjectsStyled, Wrapper } from './styled';
import { ProjectsContext } from 'state/projests/context';

import Project from './project';

const Projects: React.FC = () => {
  const { getProjects, getFilterProjects, state } = useContext(ProjectsContext);

  useEffect(() => {
    getProjects(projects);
  }, []);

  function showTools(): any {
    return itemsTools.map((tool, index) => (
      <ItemStyled key={index} onClick={() => getFilterProjects(tool, projects)}>
        {tool}
      </ItemStyled>
    ));
  }

  return (
    <ProjectsStyled id="projects">
      <ItemsStyled>
        <div className="container">{showTools()}</div>
      </ItemsStyled>
      {state.isLoading && <p style={{ color: 'white' }}>Loading...</p>}
      <ListProjectsStyled>
        <div className="container">
          {state.projects &&
            state.projects.map((project: DataI) => {
              if (Object.entries(project).length > 0) {
                return <Project key={project.id} project={project} />;
              }
            })}
        </div>
      </ListProjectsStyled>
    </ProjectsStyled>
  );
};

export default Projects;
