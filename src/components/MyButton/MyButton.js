import React from 'react';
import styled from 'styled-components';
import { FieldStyles } from '../../utils/style';

const StyledButton = styled.button`
  ${FieldStyles};
  all: 'unset';
  cursor: pointer;
`;

const MyButton = props => {
  return <StyledButton {...props} />;
};

export default MyButton;
