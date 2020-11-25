import React from 'react';
import { projects, DataI } from '__data';
import { itemsTools } from '__data/tools';
import { ProjectsStyled, ItemsStyled, ItemStyled, ListProjectsStyled } from './styled';

import Project from './project';

const Projects: React.FC = () => {
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
      <div className="container">
        <ListProjectsStyled>
          {projects.map((project: DataI) => (
            <Project key={project.id} project={project} />
          ))}
        </ListProjectsStyled>
      </div>
    </ProjectsStyled>
  );
};

export default Projects;
