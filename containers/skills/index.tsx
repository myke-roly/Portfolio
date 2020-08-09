import React from 'react';
import { SkillsStyled, Card } from './styled';


const Skills: React.SFC = () => {
  return (
    <SkillsStyled>
      <div className="container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </SkillsStyled>
  )
}

export default Skills;
