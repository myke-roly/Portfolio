import React from 'react';
import styled from 'styled-components';

/*
 * @param {type} button type "large" "small"
 * @param {text} button text "text into button"
 * @param {color} button color "{primary, secondary, dark, orange, danger}"
 */

 interface Props{
  hrefLink?: string;
  type?: string;
  color?: string;
  text?: string
 }


const ButtonStyles = styled.a`
  border: 2px solid transparent;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;;
  display: inline-block;
  text-align: center;
  padding: .7rem 1.2rem;
  text-transform: uppercase;
  transition: all 500ms ease;
  margin-right: .5rem;
  background: ${props => props.theme.colors.dark};
`;

const Button: React.SFC<Props> = ({ hrefLink, type, color, text }) => {
  return <ButtonStyles href={hrefLink} role="button" >{text}</ButtonStyles>;
};

export default Button;
