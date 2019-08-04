import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BLUE = '#2384CC';

const INPUT_TYPES = {
  props: {
    label: PropTypes.string.isRequired,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    withInfo: PropTypes.bool,
    type: PropTypes.oneOf([
      'text', 'password'
    ]),
    required: PropTypes.bool,
    onChange: PropTypes.func,
    color: PropTypes.oneOf([
      'normal', 'blue'
    ]),
  },
  defaults: {
    placeholder: '',
    withInfo: false,
    type: 'text',
    required: true,
    color: 'normal',
  },
};

const StyledInput = styled.div`
  width: 100%;
`;
const StyledTextarea = styled(StyledInput)`
  min-height: 84px;
`;

const StyledLabel = styled.label`
  font-size: 12px;
  font-weight: 600;
  line-heigth: 14px;
  letter-spacing: -0.24px;
  color: ${BLUE};
  display: inline-block;
  position: relative;
  background-color: #fff;
  left: 10px;
  padding: 0 3px;
  max-width: 95%;
`;
const InputField = styled.input`
  display: block;
  border: 2px solid ${BLUE};
  border-radius: 5px;
  width: 100%;
  line-height: 42px;
  color: #6a6a6a;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.36px;
  padding: 0 14px;
  margin-top: -9px;
  height: 45px;

  &:focus {
    border-color: ${BLUE};
    outline: none;
  }

  ::placeholder {
    color: #A2A2A2;
  }
`;
const TextareaField = styled(InputField)`
  height: auto;
  min-height: 84px;
  resize: vertical;
  line-height: 120%;
  padding: 10px 15px;
`;
const InfoIcon = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 2px 0 4px;
  top: 1px;
  width: 13px;
  height: 13px;
  background-color: ${BLUE};
  border-radius: 50%;

  ::after {
    content: 'i';
    position: absolute;
    display: flex;
    flex: 1;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: #fff;
    width: 100%;
    font-size: 12px;
  }
`;

const Label = ({ id, color, label, required, withInfo }) => (
  <StyledLabel htmlFor={id} c={color}>
    { required ? `${label} *` : label }
    { withInfo && <InfoIcon c={color}/> }
  </StyledLabel>
);

const makeInputProps = p => ({
  type: p.type,
  placeholder: p.placeholder,
  id: p.id,
  c: p.color,
  name: p.id,
  onChange: (e) => p.onChange && p.onChange(e.target.value.trim())
});
const makeLabelProps = p => ({
  withInfo: p.withInfo,
  id: p.id,
  color: p.color,
  label: p.label,
  required: p.required,
});

export const Textarea = props => (
  <StyledTextarea>
    <Label {...makeLabelProps(props)} />
    <TextareaField {...makeInputProps(props)} as="textarea" />
  </StyledTextarea>
);

Textarea.propTypes = INPUT_TYPES.props;
Textarea.defaultProps = INPUT_TYPES.defaults;

export const TextInput = props => (
  <StyledInput>
    <Label {...makeLabelProps(props)} />
    <InputField {...makeInputProps(props)} />
  </StyledInput>
);

TextInput.propTypes = INPUT_TYPES.props;
TextInput.defaultProps = INPUT_TYPES.defaults;