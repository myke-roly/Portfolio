import React from 'react';
import { DataI } from '__data';
import { ProjectStyled, Modal, Tool } from '../styled';
import GithubIcon from 'assets/icons/GithubIcon';
import LinkIcon from 'assets/icons/LinkIcon';

interface Props {
  project: DataI;
}

const Project: React.FC<Props> = ({
  project: { title, tools, code, live, description },
}) => {
  return (
    <ProjectStyled>
      <img src="./images/bg-contact.jpg" alt="project" />
      <Tool>{tools}</Tool>
      <Modal>
        <div>
          <h2>{title}</h2>
          <a href={code} target="_blank noreferrer noopener">
            <GithubIcon />
          </a>
          <a href={live} target="_blank noreferrer noopener">
            <LinkIcon />
          </a>
        </div>
        <p className="description">{description}</p>
      </Modal>
    </ProjectStyled>
  );
};

export default Project;
