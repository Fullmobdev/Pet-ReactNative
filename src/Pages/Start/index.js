import React from 'react';
import styled from 'styled-components';
import Logo from '../../Components/LogoPanel';
import { ParaBold } from '../../Components/Typography';
import Page from '../../Components/Page';
import Button from '../../Components/Button';
import back from './images/dog_back@2x.jpg';

const StartHeader = styled(ParaBold)`
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5);
  font-size: 47px;
  line-height: 49px;
  color: #fff;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`
const BottomWrap = styled.div`
  position: absolute;
  bottom: 22px;
  left: 0;
  width: 100%;
`;
const BottomLine = styled.p`
  color: #fff;
  font: 600 14px 'Open Sans', Arial, sans-serif;
  text-align: center;
  margin: 24px 0 0;
  letter-spacing: -1px;
`;
const BottomLineLink = styled.a`
  text-decoration: underline;
`;

const StartPage = () => {
  return (
    <Page
      logo={<Logo color="255, 255, 255" />}
      paddingHorizontal={10}
    >
      <BackgroundImage src={back} />
      <StartHeader as="h2">{`Let’s find your\nperfect pup!`}</StartHeader>
      <BottomWrap>
        <Button to="/welcome/age">Start Quiz</Button>
        <BottomLine>Already have an account? <BottomLineLink>Login</BottomLineLink></BottomLine>
      </BottomWrap>
      
    </Page>
  );
};

export default StartPage;