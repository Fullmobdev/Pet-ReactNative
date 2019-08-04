import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCheckboxGroup = styled.div`
  width: 100%;
`;
const CheckboxEl = styled.div`
  display: inline-flex;

  :not(:last-child) {
    margin-right: 45px;
  }
`;
const GroupHeader = styled.p`
  letter-spacing: -0.24px;
  color: #A2A2A2;
  font-weight: 600;
  font-size: 12px;
  margin: 5px 0 8px;
`;

const CheckboxGroup = ({ children, header }) => {
  return (
    <StyledCheckboxGroup>
      <GroupHeader>{ header }</GroupHeader>
      { React.Children.map(children, (ch) => (
        <CheckboxEl>{ ch }</CheckboxEl>
      )) }
    </StyledCheckboxGroup>
  );
};

CheckboxGroup.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string.isRequired,
};

export default CheckboxGroup;