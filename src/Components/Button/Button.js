import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BtnStyled = styled(Link)`
  background-color: ${({ secondary }) => secondary ? '#fff' : '#2384CC'};
  color: ${({ secondary }) => secondary ? '#2384CC' : '#fff'};
  font-weight: ${({ small }) => small ? '600' : '800'};
  font-size: ${({ small }) => small ? 16 : 24}px;
  border: none;
  box-shadow: ${({ noShadow }) => noShadow ? 'none' : '0px 3px 3px rgba(0, 0, 0, 0.434796)'};
  min-width: ${({ small }) => small ? 205 : 225}px;
  height: ${({ small }) => small ? 45 : 65}px;
  margin: 0 auto;
  display: flex;
  padding: 0 30px;
  justify-content: center;
  letter-spacing: -1px;
  align-items: center;
  text-decoration: none;
  border: ${({ secondary }) => secondary ? '2px solid #2384CC' : 'none'};

  :disabled {
    background-color: #e0e0e0;
    box-shadow: none;
  }
`;

const Button = ({ children, disabled, ...rest }) => {
  if (!disabled) {
    return <BtnStyled {...rest}>{ children }</BtnStyled>
  }

  return <BtnStyled {...rest} as="button" disabled={disabled}>{ children }</BtnStyled>
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  secondary: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
  small: false,
  secondary: false,
};

export default Button;