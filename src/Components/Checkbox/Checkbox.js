import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import icons from '../Icons';

const Wrapper = styled.div`
  width: 100%;
  min-height: 60px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  border: 1px solid rgba(35, 132, 204, .5);
  padding: 18px 20px 18px 30px;
  background-color: ${({ checked }) => checked ? '#2384CC' : 'transparent'};
  transition: background-color .25s;
`;
const Label = styled.label`
  color: ${({ checked }) => checked ? '#fff' : '#6A6A6A'};
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  transition: color .2s;
  width: 100%;
  letter-spacing: -0.32px;
`;
const LabelSimple = styled.label`
  margin-top: -2px;
`;
const SlimLabel = styled.span`
  font-weight: 400;
`;
const Input = styled.input`
  width: 0;
  height: 0;
  visibility: hidden;
  margin: 0;
`;
const CheckboxWrap = styled.div`
  display: inline-flex;
  margin-right: 10px;
  min-width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

const Checkbox = ({ id, label, labelSlim, value }) => {
  const i = `${id}_${value}`;
  const [ checked, setChecked ] = useState(false);

  return (
    <Wrapper checked={checked}>
      <Input
        type="checkbox"
        value={value}
        id={i}
        onChange={() => setChecked(!checked)}
      />
      { checked && (
        <CheckboxWrap>
          <icons.Checkmark />
        </CheckboxWrap>
      )}
      <Label htmlFor={i} checked={checked}>
        { label }
        { labelSlim && <SlimLabel>{ ` ${labelSlim}` }</SlimLabel>}
      </Label>
    </Wrapper>
  );
};

Checkbox.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  labelSlim: PropTypes.string,
  value: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

Checkbox.defaultProps = {
  labelSlim: null,
};

const CheckboxSimple = ({ id, label }) => {
  const [ checked, setChecked ] = useState(false);

  return (
    <React.Fragment>
      <Input
        type="checkbox"
        id={id}
        onChange={() => setChecked(!checked)}
      />
      <CheckboxWrap>
        { checked ? <icons.Checkmark fill="#2384CC" /> : <icons.UncheckedBox /> }
      </CheckboxWrap>
      <LabelSimple htmlFor={id}>
        { label }
      </LabelSimple>
    </React.Fragment>
  );
};

CheckboxSimple.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  id: PropTypes.string.isRequired,
};

export default {
  Checkbox,
  CheckboxSimple,
};