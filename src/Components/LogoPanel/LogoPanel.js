import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BackChevron from './BackChevron';

const Wrapper = styled.h1`
  margin: 0 15px;
  border-bottom: ${({ color }) => `1px solid rgba(${color}, .5)`};
  color: ${({ color }) => `rgb(${color})`};
  text-align: center;
  padding: 16px 0 6px;
  font: 300 24px Montserrat, Arial, sans-serif; 
  position: relative;
`;
const LinkBack = styled(Link)`
  position: absolute;
  left: 0;
  top: 16px;
  width: 50px;
  text-align: left;
`;
const LogoLink = styled(Link)`
  color: ${({ color }) => `rgb(${color})`};
  text-decoration: none;
`;

const LogoPanel = ({ color, prevUrl }) => {
  return (
    <Wrapper color={color}>
      { prevUrl && <LinkBack to={prevUrl}><BackChevron /></LinkBack>}
      <LogoLink color={color} to="/">PetParent</LogoLink>
    </Wrapper>
  );
};

LogoPanel.propTypes = {
  color: PropTypes.string,
  prevUrl: PropTypes.string,
};

LogoPanel.defaultProps = {
  color: '35, 132, 204',
  prevUrl: null,
};

export default LogoPanel;