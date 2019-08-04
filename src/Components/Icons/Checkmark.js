import React from 'react';
import PropTypes from 'prop-types';

const Checkmark = ({ fill }) => (
  <svg width="18" height="15" viewBox="0 0 18 15" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.0863 0.677554C16.2013 -0.226177 14.767 -0.226177 13.882 0.677554L5.87048 8.83885L3.86801 6.79853C2.98302 5.90034 1.54818 5.90034 0.663742 6.79853C-0.221247 7.70226 -0.221247 9.16597 0.663742 10.0642L4.26862 13.7401C5.15361 14.6438 6.5879 14.6438 7.47289 13.7401L17.0863 3.94318C17.9712 3.03945 17.9712 1.57574 17.0863 0.677554Z"
      fill={fill}
    />
  </svg>
);

Checkmark.propTypes = {
  fill: PropTypes.string,
};

Checkmark.defaultProps = {
  fill: '#fff',
};

export default Checkmark;