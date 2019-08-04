import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import flow from '../../flow';

const SubstepsWrap = styled.div`
  // display: flex;
  // justify-content: space-between;
`;
const StyledSubstep = styled.span`
  width: 33.33333%;
  display: inline-flex;
  justify-content: center;
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 600;
  color: ${({ active }) => active ? '#2384CC' : '#A2A2A2'};

  :first-child {
    justify-content: flex-start;
  }

  :last-child {
    justify-content: flex-end;
  }
`;

const flowSubsteps = flow.reduce((s, { substep }) => {
  if (substep && s[substep] === undefined) {
    s[substep] = {
      name: substep,
      count: 1,
    }
  } else if (s[substep]) {
    s[substep].count += 1;
  }

  return s;
}, {});

const Substeps = ({ substep }) => {
  const list = Object.values(flowSubsteps).map(({ name, count }) => (
    <StyledSubstep 
      key={name}
      active={name === substep}
    >
      { name }
    </StyledSubstep>
  ));

  return (
    <SubstepsWrap>
      { list }
    </SubstepsWrap>
  )
};

Substeps.propTypes = {
  substep: PropTypes.string.isRequired,
};

export default Substeps;