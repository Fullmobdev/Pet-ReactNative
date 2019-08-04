import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSection = styled.section`
  margin-top: 43px;
`;
const SectionHeader = styled.h4`
  letter-spacing: -0.3px;
  color: #2384CC;
  font-weight: bold;
  line-height: 14px;
  font-size: 15px;
  border-bottom: 1px solid #F3F3F3;
  padding-bottom: 10px;
  margin: 0 0 5px;
`;

const Section = ({ header, children }) => {
  return (
    <StyledSection>
      <SectionHeader>{ header }</SectionHeader>
      { children }
    </StyledSection>
  );
};

Section.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;