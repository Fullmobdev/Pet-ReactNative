import React from 'react';
import styled from 'styled-components';
import Logo from '../../Components/LogoPanel';
import Header from '../../Components/Header';
import Page from '../../Components/Page';
import Button from '../../Components/Button';
import { Para } from '../../Components/Typography';
import SuccessIcon from './SuccessIcon';

const CodeInputWrap = styled.div`
  margin: 30px 0;
  text-align: center;
`;
const CodeInput = styled.input`
  border: 2px solid #E7E7E7;
  border-radius: 5px;
  height: 50px;
  width: 133px;
  text-align: center;
  color: #888;
  letter-spacing: -0.36px;
  font-size: 15px;
  font-weight: 600;

  :focus {
    border-color: #2384CC;
    outline: none;
  }
`;
const SuccessIcoWrap = styled.div`
  margin: 20px 0 18px;
  text-align: center;
`;
const Row = styled.div`
  display: flex;
  margin: ${({ m }) => m || '0 0 15px'};
  justify-content: space-between;
`;

const Success = props => {
  return (
    <Page logo={<Logo prevUrl="/welcome/account" />}>
      <SuccessIcoWrap>
        <SuccessIcon />
      </SuccessIcoWrap>
      <Header text={`Thanks for\nsigning up!`} />
      <Para m="50px 0 21px 0" fz={15} lh={21}>
        An email has been sent to dana@petparenthub.com with a code to confirm your account. 
      </Para>
      <Para fz={15}>
        Go ahead and fetch it. We’ll wait right here.`
      </Para>
      <CodeInputWrap>
        <CodeInput placeholder="Enter Code" />
      </CodeInputWrap>
      <Row m="0 0 45px">
        <Button to="#">Confirm</Button>
      </Row>
    </Page>
  );
};

export default Success;