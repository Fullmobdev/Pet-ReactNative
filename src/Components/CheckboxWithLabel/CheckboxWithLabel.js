import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import icons from './icons';

const StyledCheckboxWithLabel = styled.label`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Input = styled.input`
  width: 0;
  height: 0;
  visibility: hidden;
  margin: 0;
  position: absolute;
`;
const CheckboxIconWrap = styled.div`
  margin-right: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const CheckboxWithLabel = ({
  id,
  label,
  value,
  onToggle,
  checked,
  showCheckbox,
  iconWrapStyles,
  onColor,
}) => {
  const i = `${id}_${value}`;

  return (
    <StyledCheckboxWithLabel htmlFor={i}>
      <Input
        type="checkbox"
        value={value}
        id={i}
        onChange={() => {
          onToggle && onToggle(!checked);
        }}
      />
      { showCheckbox && (
        <CheckboxIconWrap style={iconWrapStyles}>
          { checked ? <icons.CheckboxkWithCheckmark fill={onColor} /> : <icons.Checkbox /> }
        </CheckboxIconWrap>
      )}
      { label }
    </StyledCheckboxWithLabel>
  );
};

CheckboxWithLabel.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  value: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
  showCheckbox: PropTypes.bool.isRequired,
  iconWrapStyles: PropTypes.object,
  onColor: PropTypes.string,
};

CheckboxWithLabel.defaultProps = {
  iconWrapStyles: null,
  onColor: '#fff',
  checked: false,
};

export default CheckboxWithLabel;
