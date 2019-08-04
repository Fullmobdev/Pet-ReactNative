import React from 'react';
import PropTypes from 'prop-types';
import { CheckboxWithLabel } from '../../../../Components/CheckboxWithLabel';
import { Label } from '../Layout';

export const Checkbox = ({
  label,
  labelFZ,
  labelStyle,
  ...rest,
}) => (
  <CheckboxWithLabel
    {...rest}
    label={<Label fz={labelFZ} style={labelStyle}>{label}</Label>}
    onColor="#2384CC"
    value={1}
    showCheckbox
  />
);

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  labelFZ: PropTypes.number,
  labelStyle: PropTypes.object,
}

Checkbox.defaultProps = {
  iconWrapStyles: {
    width: 18,
    height: 18,
  },
}