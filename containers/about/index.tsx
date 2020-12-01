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
            My name is Mike, Im learning web developent to can to work in this word of IT, I find my pasion in my life, I love coding, resolved problems , metting people on
            different part of the world.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia perferendis doloremque corporis. Cum, veniam a quasi eum quis totam impedit adipisci nisi vel facilis
            quisquam culpa quaerat similique consequatur exercitationem. Velit nulla fugiat accusamus vero quaerat perferendis consectetur, qui voluptates quasi illum quo
            temporibus perspiciatis molestias excepturi atque culpa, odit esse dolorum, quia tempore. Fuga optio asperiores tenetur doloremque quisquam.
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
