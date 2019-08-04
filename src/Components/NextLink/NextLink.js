import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Arrow from './Arrow';

const Wrapper = styled.div`
  justify-content: flex-end;
  display: flex;
  align-items: center;
`;
const StyledLink = styled(Link)`
  font-size: 18px;
  font-weight: 800;
  margin-right: 9px;
  text-decoration: none;
  color: ${({ color }) => color} ;
`;
const getColor = e => e ? '#2384CC' : '#a2a2a2';

const NextLink = ({ to, enabled }) => {
  const color = getColor(enabled);
  const link = enabled ?
    <StyledLink to={to} color={color}>Next</StyledLink> :
    <StyledLink as="span" color={color}>Next</StyledLink>;

  return (
    <Wrapper>
      { link } 
      <Arrow fill={color}/>
    </Wrapper>
  );
};

NextLink.propTypes = {
  to: PropTypes.string.isRequired,
  enabled: PropTypes.bool.isRequired,
};

export default NextLink;