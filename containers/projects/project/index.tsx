import React from 'react';
import { ProjectStyled, Modal } from '../styled';
import { DataI } from '__data';

interface Props {
  project: DataI;
}

const Project: React.FC<Props> = ({
  project: { title, tools, code, live, description },
}) => {
  return (
    <ProjectStyled>
      <img src="./images/bg-contact.jpg" alt="project" />
      <Modal>
        <h1>{title}</h1>
        <span>{tools}</span>
        <a href={code} target="_blank noreferrer noopener">
          code
        </a>
        <a href={live} target="_blank noreferrer noopener">
          live
        </a>
        <p>{description}</p>
      </Modal>
    </ProjectStyled>
  );
};

export default Project;
