import React from 'react';
import styled from 'styled-components';
import { FieldStyles } from '../../utils/style';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
  ${FieldStyles};
`;

const ProjectInput = ({ placeholder, name, onChange }) => {
  return (
    <StyledInput
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      data-testid="projectInput"
    />
  );
};

ProjectInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ProjectInput;
