import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PageInner = styled.div`
  padding: ${({ ph }) => `30px ${ph}px`};
`;

const Page = ({ header, logo, children, paddingHorizontal }) => {
  return (
    <React.Fragment>
      { logo }
      <PageInner ph={paddingHorizontal}>
        { children }
      </PageInner>
    </React.Fragment>
  );
};

Page.propTypes = {
  logo: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  paddingHorizontal: PropTypes.number,
};

Page.defaultProps = {
  paddingHorizontal: 30,
}

export default Page;