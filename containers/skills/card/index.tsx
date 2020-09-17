import React from 'react';
import { CardStyled } from '../styled';
import { TiHeart } from 'react-icons/ti';

interface Props {
  Logo: any;
  description: string;
  color: string;
}

const Card: React.FunctionComponent<Props> = ({ Logo, description, color }) => {
  return (
    <CardStyled>
      <Logo color={color} fontSize={40} />
      <p>{description}</p>
      <TiHeart color={color} fontSize={24} className="icon" />
    </CardStyled>
  );
};

export default Card;
