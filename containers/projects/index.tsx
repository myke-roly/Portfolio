import React, { useContext, useEffect } from 'react';
import { projects, DataI } from '__data';
import { itemsTools } from '__data/tools';
import { ProjectsStyled, ItemsStyled, ItemStyled, ListProjectsStyled } from './styled';
import { ProjectsContext } from 'state/projests/context';

import Project from './project';

const Projects: React.FC = () => {
  const { getProjects, state } = useContext(ProjectsContext);

  useEffect(() => {
    getProjects(projects);
  }, []);

  function showTools(): any {
    return itemsTools.map((tool, index) => (
      <ItemStyled key={index} onClick={() => console.log(tool)}>
        {tool}
      </ItemStyled>
    ));
  }

  return (
    <ProjectsStyled id="projects">
      <ItemsStyled>
        <div className="container">{showTools()}</div>
      </ItemsStyled>
      {state.isLoading && <p>Loading...</p>}
      <div className="container">
        <ListProjectsStyled>
          {state.projects.map((project: DataI) => (
            <Project key={project.id} project={project} />
          ))}
        </ListProjectsStyled>
      </div>
    </ProjectsStyled>
  );
};

export default Projects;
