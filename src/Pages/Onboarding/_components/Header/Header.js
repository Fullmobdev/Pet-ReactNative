import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ParaBold, Para } from '../../../../Components/Typography';

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;
const Text = styled(ParaBold)`
  margin: 0 0 18px;
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
        as="h2"
        color={color}
        fz={fontSize}
        withShadow={withShadow}
        lh={lineHeight}
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