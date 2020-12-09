import React, { ReactElement, useContext, useEffect, useState } from 'react';
import { projects, DataI } from '__data';
import { itemsTools } from '__data/tools';
import { ProjectsStyled, ItemsStyled, ItemStyled, ListProjectsStyled } from './styled';
import { ProjectsContext } from 'state/projests/context';

import Project from './project';

const Projects: React.FC = () => {
  const { getProjects, getFilterProjects, state } = useContext(ProjectsContext);
  const [query, setQuery] = useState<string>('all-projects');

  useEffect(() => {
    getProjects(projects);
  }, []);

  function handleClick(tool: string, projects: any[]) {
    setQuery(tool);
    getFilterProjects(tool, projects);
  }

  function showTools(): ReactElement[] {
    return itemsTools.map((tool: string, index: number) => (
      <ItemStyled active={tool === query} key={index} onClick={() => handleClick(tool, projects)}>
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
          {state?.projects?.map((project: DataI) => {
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
