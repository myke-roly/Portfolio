import React from 'react';
import { DataI } from '__data';
import { ProjectStyled, InfoStyled, InfoTitleStyled, Tools } from './styled';
import GithubIcon from 'assets/icons/GithubIcon';
import LinkIcon from 'assets/icons/LinkIcon';

interface Props {
  project: DataI;
}

const Project: React.FC<Props> = ({ project: { title, tools, code, live, img, description } }) => {
  return (
    <ProjectStyled>
      <a href={live} target="_blank noreferrer noopener" title="live">
        <img src={`./projects/${img}.png`} alt={title} />
      </a>
      <InfoStyled>
        <InfoTitleStyled>
          <h2>{title}</h2>
          <a href={code} target="_blank noreferrer noopener" title="code">
            <GithubIcon />
          </a>
          <a href={live} target="_blank noreferrer noopener" title="live">
            <LinkIcon />
          </a>
        </InfoTitleStyled>
        <Tools>
          <span>Tools:</span>
          <ul>{tools && tools.map((tool, index) => <li key={index}>{tool}</li>)}</ul>
        </Tools>
        <p className="description">{description}</p>
      </InfoStyled>
    </ProjectStyled>
  );
};

export default Project;
