import React from 'react';
import { projects, DataI } from '__data';
import { itemsTools } from '__data/tools';
import {
  ProjectsStyled,
  ItemsStyled,
  ItemStyled,
  ListProjectsStyled,
} from './styled';

import Project from './project';

const Projects: React.FC = () => {
  function showTools(): any {
    return itemsTools.map((tool, index) => (
      <ItemStyled key={index}>{tool}</ItemStyled>
    ));
  }

  return (
    <ProjectsStyled id="projects">
      <ItemsStyled>{showTools()}</ItemsStyled>
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
