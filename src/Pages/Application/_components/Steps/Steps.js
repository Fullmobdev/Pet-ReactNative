import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import flow from '../../flow';
import CheckIcon from './CheckIcon';

const StyledSteps = styled.div`
  position: relative;
  margin-bottom: 45px;
`;
const StepsList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
`;
const StepItem = styled.li`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 4px solid #2384CC;
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${({ active }) => active ? '#2384CC' : '#fff'};
`;
const StepsStick = styled.div`
  background-color: #2384CC;
  width: 100%;
  height: 5px;
  position: absolute;
  top: 50%;
  margin-top: -2px;
  z-index: -1;
`;
const StepText = styled.span`
  position: absolute;
  top: 27px;
  transform: translateX(-36%);
  font-weight: 600;
  font-size: 15px;
  text-transform: capitalize;
  color: ${({ active }) => active ? '#2384CC' : '#E7E7E7'};
`;

const flowSteps = flow.reduce((s, { step }) => {
  if (s.indexOf(step) === -1) {
    s.push(step);
  }
  return s;
}, []);

function isActive(step, currentStep) {
  if (currentStep === step) return true;
  else if (currentStep === 'verify' && step === 'apply') return true;
  else if (currentStep === 'adopt' && (step === 'verify' || step === 'apply')) return true;
}

const Steps = ({ currentStep }) => {
  return (
    <StyledSteps>
      <StepsList>
        {
          flowSteps.map(step => {
            const active = isActive(step, currentStep);

            return (
              <StepItem key={step} active={active}>
                { active && <CheckIcon style={{ position: 'absolute', top: -8 }}/> }
                <StepText active={active}>{ step }</StepText>
              </StepItem>
            );
          })
        }
      </StepsList>
      <StepsStick />
    </StyledSteps>
  );
};

Steps.propTypes = {
  currentStep: PropTypes.string.isRequired,
};

export default Steps;