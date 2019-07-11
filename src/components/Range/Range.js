import React from 'react';
import styled from 'styled-components';
import { rangeStatus } from '../../utils/rangeStatus';
import PropTypes from 'prop-types';

const StyledRange = styled.div`
  background: ${props => props.background};
  width: ${props => props.range}%;
  height: 100%;
  border-radius: inherit;
`;

const Range = ({ range, status }) => {
  const rangeLimitCheck = range => {
    if (range < 0) {
      return 0;
    } else if (range > 100) {
      return 100;
    } else {
      return range;
    }
  };

  const { alert, warning, normal } = rangeStatus;
  let bakcgroundBasedOnStatus = normal;
  switch (status) {
    case 'alert':
      bakcgroundBasedOnStatus = alert;
      break;
    case 'warning':
      bakcgroundBasedOnStatus = warning;
      break;
    default:
      bakcgroundBasedOnStatus = normal;
  }
  return (
    <StyledRange
      data-testid="range"
      range={rangeLimitCheck(range)}
      background={bakcgroundBasedOnStatus}
    />
  );
};

Range.propTypes = {
  range: PropTypes.number.isRequired,
  status: PropTypes.string,
};

export default Range;
