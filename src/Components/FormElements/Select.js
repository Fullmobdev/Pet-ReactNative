import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSelectWrap = styled.div`
  width: 100%;
`;
const StyledSelect = styled(Select)`
  width: 100%;
`;
const Header = styled.p`
  margin: 0 0 5px;
  color: #A2A2A2;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: -0.24px;
`;

const customStyles = {
  menu: (provided) => ({
    ...provided,
    marginTop: 0,
    borderRadius: '0 0 5px 5px',
    borderColor: '#e3e3e3',
    overflow: 'hidden',
  }),
  menuList: (provided) => ({
    ...provided,
    padding: 0,
  }),
  option: (provided, state) => ({
    ...provided,
    font: '600 14px "Open Sans", Arial, sans-serif',
    padding: '10px 25px',
    color: state.isFocused ? '#fff' : '#a2a2a2',
    backgroundColor: state.isFocused ? '#2384CC' : 'transparent',
  }),
  placeholder: p => ({
    ...p,
    color: '#2384CC',
    font: '600 14px "Open Sans", Arial, sans-serif',
    fontSize: 14,
    letterSpacing: -0.28,
    margin: 0,
  }),
  singleValue: p => ({
    ...p,
    color: '#2384CC',
    font: '600 14px "Open Sans", Arial, sans-serif',
    fontSize: 14,
    letterSpacing: -0.28,
    margin: 0,
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: p => ({
    ...p,
    color: '#2384CC',
  }),
  valueContainer: p => ({
    ...p,
    padding: '0 15px',
  }),
  control: (p, s) => ({
    ...p,
    minHeight: 45,
    borderWidth: 2,
    borderColor: '#2384CC',
  }),
}



const SelectInput = ({ header, required, ...rest }) => (
  <StyledSelectWrap>
    { header && <Header>{ header }</Header>}
    <StyledSelect
      {...rest}
      styles={customStyles}
      isSearchable={false}
    />
  </StyledSelectWrap>
);

SelectInput.propTypes = {
  required: PropTypes.bool,
  header: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  placeholder: PropTypes.string,
};

export default SelectInput;