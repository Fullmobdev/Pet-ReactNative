import React from 'react';
import { Row } from '../../../Components/Layout';
import Button from '../../../Components/Button';
import { Para } from '../../../Components/Typography';

const Success = () => (
  <React.Fragment>
    <Para style={{
      marginTop: -20,
      fontWeight: '800',
      lineHeight:'24px',
      fontSize: 18,
      letterSpacing: -0.36,
    }}>
      Give them a heads up. We’ll let you know when they are complete
    </Para>
    <Row m="70px 0 30px">
      <Button to="#">
        Browse Pets
      </Button>
    </Row>
  </React.Fragment>
);

export default Success;
