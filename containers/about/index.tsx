import React from 'react';
import { AboutStyled, Content, Image } from './styled';

const AboutMe: React.FC = () => {
  return (
    <AboutStyled id="about">
      <div className="container">
        <Content>
          <h2>
            Hi!
            <br />
            Thanks for stopping by here.
          </h2>
          <p>
            Hi!! My name is Mike, I've been styudy the last two years where I got to know differents technologies and
            tools, what web applications are build with, from basic to deploy. In all this time I have know part of the
            web devepment ecosystem.
          </p>
          <p>How all developer I start with Html, Css, and Js. I scaled with differents frameworks and libraries.</p>
          <p>
            I learning the two parts of web development but Im focused on the Front-End with Js and React, also basic
            knowledge with NodeJs and Php at Back-End and the managment of the information that we do in the database
            with MySQL and MondoDB.
          </p>
          <p>
            I know that I still have many things to learn, that's why I am always willing to do it, learn new
            technologies and meet people with whom to share and exchange knowledge.
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
