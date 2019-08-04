import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CheckboxWithLabel } from '../../../Components/CheckboxWithLabel';

const StyledQuizItem = styled.div`
  width: 100%;
  min-height: 60px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  border: 1px solid rgba(35, 132, 204, .5);
  background-color: ${({ checked }) => checked ? '#2384CC' : 'transparent'};
  transition: background-color .25s;
`;

const StyledLabel = styled.p`
  margin: 0;
  color: ${({ checked }) => checked ? '#fff' : '#2384CC'};
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  transition: color .2s;
  padding: 18px 20px 18px 30px;
  padding-left: ${({ checked }) => checked ? 55 : 30}px;
  width: 100%;
  letter-spacing: -0.32px;
  position: relative;
`;
const SlimLabel = styled.span`
  font-weight: 400;
`;

const iconWrapStyles = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  left: 25,
  width: 21,
  height: 21,
};

const Label = ({ label, labelSlim, checked }) => (
  <StyledLabel checked={checked}>
    { label }
    { labelSlim && <SlimLabel>{ ` ${labelSlim}` }</SlimLabel> }
  </StyledLabel>
)

const QuizItem = ({
  checked,
  o,
  id,
  onToggle,
}) => (
  <StyledQuizItem checked={checked}>
    <CheckboxWithLabel
      {...o}
      checked={checked}
      showCheckbox={checked}
      iconWrapStyles={iconWrapStyles}
      id={id}
      label={<Label {...o} checked={checked} />}
      onToggle={(nextChecked) => {
        onToggle({ value: o.value, checked: nextChecked })
      }}
    />
  </StyledQuizItem>
);

QuizItem.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  o: PropTypes.shape({
    value: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    labelSlim: PropTypes.string,
  }).isRequired
}

export default QuizItem;
