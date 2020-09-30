import React from 'react';
import styled from 'styled-components';

/*
 * @param {type} button type "large" "small"
 * @param {text} button text "text into button"
 * @param {color} button color "{primary, secondary, dark, orange, danger}"
 */

interface Props {
  text?: string;
}

const ButtonStyles = styled.button`
  border: 2px solid transparent;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 1em;
  font-weight: 600;
  display: inline-block;
  text-align: center;
  padding: 0.55rem 1.5rem;
  text-transform: uppercase;
  transition: all 500ms ease;
  margin-right: 0.5rem;
  background: ${(props) => props.theme.colors.lightBlue};
`;

const Button: React.FunctionComponent<Props> = ({ text }) => {
  return <ButtonStyles>{text}</ButtonStyles>;
};

export default Button;
