import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  height: 45px;
`;
const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: -0.24px;
  color: #2384CC;
  margin-bottom: 6px;
  display: inline-block;
  position: absolute;
  background-color: #fff;
  top: -11px;
  left: 10px;
  padding: 3px;
`;
const StyledInput = styled.input`
  display: block;
  border: 2px solid #2384CC;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  line-height: 42px;
  color: #6a6a6a;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.36px;
  padding: 0 14px;

  :focus {
    border-color: #2384CC;
    outline: none;
  }
`;
const InfoIcon = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 2px 0 4px;
  top: 1px;
  width: 13px;
  height: 13px;
  background-color: #2384CC;
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

const TextInput = ({
  label,
  id,
  placeholder,
  withInfo,
  type,
  required,
  onChange,
}) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>
        { required ? `${label} *` : label }
        { withInfo && <InfoIcon /> }
      </Label>
      <StyledInput
        type={type}
        placeholder={placeholder}
        id={id}
        name={id}
        onChange={(e) => onChange && onChange(e.target.value.trim())}
      />
    </Wrapper>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  withInfo: PropTypes.bool,
  type: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
};

TextInput.defaultProps = {
  placeholder: '',
  withInfo: false,
  type: 'text',
  required: true,
};

export default TextInput;