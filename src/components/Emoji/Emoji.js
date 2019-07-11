import React from 'react';
import PropTypes from 'prop-types';

const Emoji = ({ label, symbol }) => (
  <span
    role="img"
    aria-label={label ? label : ''}
    aria-hidden={label ? 'false' : 'true'}
    data-testid="emoji"
  >
    {symbol}
  </span>
);

Emoji.propTypes = {
  label: PropTypes.string,
  symbol: PropTypes.string.isRequired,
};

export default Emoji;
