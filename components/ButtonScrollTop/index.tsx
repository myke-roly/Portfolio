import React from 'react';
import { Button } from './styled';
import UpIcon from 'assets/icons/UpIcon';

const ButtonUP = () => (
  <Button onClick={() => window.scrollTo({ top: 0 })}>
    <UpIcon />
  </Button>
);
export default ButtonUP;
