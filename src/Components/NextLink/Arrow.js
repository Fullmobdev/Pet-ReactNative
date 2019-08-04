import React from 'react';

const Arrow = ({ fill }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 0L6.6 1.4L12.2 7H0V9H12.2L6.6 14.6L8 16L16 8L8 0Z"
      fill={fill}
    />
  </svg>

);

export default Arrow;