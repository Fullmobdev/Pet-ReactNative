import React, { useState } from 'react';
import styled from 'styled-components';
import Section from '../_components/Section';
import { Col, Row } from '../../../Components/Layout';
import Button from '../../../Components/Button';
import {
  TextInput,
  Select,
} from '../../../Components/FormElements';
import { Para } from '../../../Components/Typography';
import { Checkbox } from '../_components/FormElements';
import data from '../data';

const StyledPlusButton = styled.button`
  display: flex;
  align-items: center;
  color: #2384CC;
  padding: 0;
  font-size: 16px;
  font-weight: 600;
`;
const PlusIco = styled.div`
  position: relative;
  background-color: #2384CC;
  width: 27px;
  height: 27px;
  margin-left: 5px;

  ::after {
    content: '+';
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    font: 700 19px 'Open Sans', Arial, sans-serif;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
`;

const PlusButton = props => (
  <StyledPlusButton {...props}>
    Add <PlusIco />
  </StyledPlusButton>
);

const Reference = ({ nextUrl }) => {
  const [ refsAmount, setRefsAmount ] = useState(1);
  const refs = Array(refsAmount).fill(1)
  const canAddMore = refsAmount < 3;

  return (
    <React.Fragment>
      <Para style={{
        marginTop: -20,
        fontWeight: '800',
        lineHeight: '30px',
        fontSize: 24,
        letterSpacing: -1,
      }}>Please add 3 references.</Para>
      {
        refs.map((_, i) => (
          <Section header={`Reference #${i + 1}`} key={i}>
            <Row>
              <Col>
                <TextInput label="First Name" required />
              </Col>
              <Col>
                <TextInput label="Last Name" required />
              </Col>
            </Row>
            <Row>
              <TextInput label="Phone Number" required />
            </Row>
            <Row>
              <TextInput label="Email Address" required />
            </Row>
            <Row>
              <Select options={data.refRelations} placeholder="Relationship" />
            </Row>
          </Section>
        ))
      }
      {
        canAddMore && (
        <Row jc="flex-end" m="20px 0 15px">
          <PlusButton onClick={() => {
            const next = refsAmount + 1;

            if (next > 3) return;
            setRefsAmount(next);
          }}/>
        </Row>
      )}
      <Row m="40px 0 0">
        <Checkbox
          label="You may contact my references."
          labelFZ={18}
          checked
        />
      </Row>
      <Row m="28px 0">
        <Button to={nextUrl}>
          Submit References
        </Button>
      </Row>
    </React.Fragment>
  );
};

export default Reference;
