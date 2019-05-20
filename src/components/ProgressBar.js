import React from 'react';
import styled from 'styled-components';
import Range from './Range';
import PropTypes from 'prop-types';

const StyledProgressBar = styled.div`
  width: 90%;
  height: 20px;
  border-radius: 10px;
  border: 1px solid #666;
  box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.1);
`;
const ProgressBar = ({ range, status }) => {
  return (
    <StyledProgressBar>
      <Range range={range} status={status} />
    </StyledProgressBar>
  );
};

ProgressBar.propTypes = {
  range: PropTypes.number.isRequired,
  status: PropTypes.string,
};

export default ProgressBar;
