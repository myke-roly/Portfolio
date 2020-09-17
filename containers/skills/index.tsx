import React from 'react';
import { SkillsStyled } from './styled';
import Card from "./card";
import { SiJavascript, SiNodeDotJs, SiStyledComponents, SiSass, SiReact, SiMysql, SiMongodb } from 'react-icons/si';

const DATA: Array<{}> = [
  { id: 0, logo: SiJavascript, color:"#F7DF1E", description: 'My first programming language. ' },
  { id: 1, logo: SiSass, color:"#CD6799", description: 'The magic of the front.' },
  { id: 2, logo: SiReact, color:"#00D8FF", description: 'A set of little ones, they become powerful' },
  { id: 3, logo: SiStyledComponents, color:"#A0616A", description: 'Leveling up in Components' },
  { id: 4, logo: SiNodeDotJs, color:"#539E43", description: 'What we don\'t see but it\'s there' },
  { id: 5, logo: SiMongodb, color:"#539E43", description: 'A different way of writing data.' },
  { id: 6, logo: SiMysql, color:"#087BAA", description: 'Don\'t forget "where" please.' },
];

const Skills: React.FunctionComponent = () => {
  return (
    <SkillsStyled>
      <div className="container">
        {DATA.map(({id, logo, color, description}: any) => (
          <Card key={id} Logo={logo} color={color} description={description} />
        ))}
      </div>
    </SkillsStyled>
  );
};

export default Skills;
