import React from 'react';
import { AboutStyled, Content, Image } from './styled';

const AboutMe: React.FC = () => {
  return (
    <AboutStyled id="about">
      <div className="container">
        <Content>
          <h2>
            Hi! <br /> Thanks for stopping by.
          </h2>
          <p>
            My name is Mike I've been styuding for the last two years where I got to know different technologies and
            tools used to build web applications, from the most basic to deployment. In all this time I've just been
            able to learn a part of the web development ecosystem. Like all developers I started with Html, Css, and Js.
            I scaled up my knowledge with different frameworks and libraries.
            <br />
            I'm learning both parts most important of web development but Im focused on the Front-End with Js and React
            and I also have basic knowledge of NodeJs at the Back-End. I know database management with MySQL and
            MongoDB.
            <br />I still have many things to learn, that's why I am always willing to do it, to add new technologies
            and to meet people with whom to share and exchange knowledge.
          </p>
        </Content>
        <Image>
          <img src="./images/porfile.jpeg" width="300px" alt="porfile" />
        </Image>
      </div>
    </AboutStyled>
  );
};

export default AboutMe;
