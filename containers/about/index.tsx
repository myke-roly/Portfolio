import React from 'react';
import { AboutStyled, Content, Image } from './styled';

const AboutMe: React.SFC = () => {
  return (
    <AboutStyled>
      <div className="container">
        <Content>
          <h2>
            Hi!! <br />
            Thanks for stopping by here.
          </h2>
          <p>My name is Mike, Im learning web developent to can to work in this word of IT, I find my pasion in my life, I love coding,  resolved problems , metting people on different part of the world.</p>
        </Content>
        <Image>
          <img src="./images/porfile.jpeg" width="300px" alt="porfile"/>
        </Image>
      </div>
    </AboutStyled>
  )
}

export default AboutMe;