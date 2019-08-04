import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Para } from '../Typography';

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;
const Text = styled.h2`
  color: ${({ color }) => color};
  font: ${({ fontSize , lineHeight}) => `800 ${fontSize}px/${lineHeight}px 'Open Sans', Arial, sans-serif`};
  text-shadow: ${({ withShadow }) => withShadow ? '0px 1px 3px rgba(0, 0, 0, 0.5)' : 'none'};
  margin: 0 0 18px;
  white-space: pre;
  letter-spacing: -2px;
`;

const Header = ({
  color,
  text,
  fontSize,
  lineHeight,
  withShadow,
  subText,
  subStyles,
}) => {
  return (
    <Wrapper>
      <Text
        color={color}
        fontSize={fontSize}
        withShadow={withShadow}
        lineHeight={lineHeight}
      >
        { text }
      </Text>
      { subText && <Para color={color} style={subStyles}>{ subText }</Para>}
    </Wrapper>
  );
};

Header.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.number,
  text: PropTypes.string.isRequired,
  withShadow: PropTypes.bool,
  subText: PropTypes.string,
  subStyles: PropTypes.object,
  lineHeight: PropTypes.number,
};

Header.defaultProps = {
  color: '#2384CC',
  fontSize: 36,
  lineHeight: 42,
  withShadow: false,
  subText: null,
  subStyles: undefined,
}

export default Header;