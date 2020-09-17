import React from 'react';
import { ProjectsStyled, ItemsStyled, ItemStyled } from './styled';

const Projects: React.FunctionComponent = () => {
  return (
    <ProjectsStyled>
      <ItemsStyled>
        <ItemStyled className="active">All Projects</ItemStyled>
        <ItemStyled>React</ItemStyled>
        <ItemStyled>Css</ItemStyled>
        <ItemStyled>JavaScript</ItemStyled>
        <ItemStyled>ReactNative</ItemStyled>
        <ItemStyled>Node</ItemStyled>
      </ItemsStyled>
      <div>
        <ul>
          <li>Projects</li>
          <li>Projects</li>
          <li>Projects</li>
          <li>Projects</li>
        </ul>
      </div>
    </ProjectsStyled>
  );
};

export default Projects;
