import React from 'react';
import Section from '../_components/Section';
import { Col, Row } from '../../../Components/Layout';
import { CheckboxGroup } from '../../../Components/CheckboxWithLabel';
import {
  TextInput,
  Textarea,
  Select,
} from '../../../Components/FormElements';
import { RowAlignEnd } from '../_components/Layout';
import { Checkbox } from '../_components/FormElements';
import data from '../data';

const Home = () => {
  return (
    <React.Fragment>
      <Section header="Housing">
        <Row>
          <Select options={data.homeKind} placeholder="What kind of home do you have?" />
        </Row>
        <Row>
          <CheckboxGroup header="Do you have a pool?">
            <Checkbox label="Yes" checked />
            <Checkbox label="No" />
          </CheckboxGroup>
        </Row>
        <Row>
          <CheckboxGroup header="Is the pool fenced in?">
            <Checkbox label="Yes" checked />
            <Checkbox label="No" />
            <Checkbox label="N/A" />
          </CheckboxGroup>
        </Row>
        <Row>
          <Select options={data.yard} placeholder="Do you have a yard? *" required />
        </Row>
        <Row>
          <CheckboxGroup header="Please select one of the following: *">
            <Checkbox label="Rent" checked />
            <Checkbox label="Own" />
          </CheckboxGroup>
        </Row>
      </Section>
      <Section header="Landlord Contact Information">
        <Row>
          <CheckboxGroup header="Does your landlord allow pets?">
            <Checkbox label="Yes" checked />
            <Checkbox label="No" />
          </CheckboxGroup>
        </Row>
        <RowAlignEnd>
          <Col>
            <TextInput label="First Name" />
          </Col>
          <Col>
            <TextInput label="Last Name" />
          </Col>
        </RowAlignEnd>
        <RowAlignEnd>
          <TextInput label="Phone Number" />
        </RowAlignEnd>
        <RowAlignEnd>
          <TextInput label="Email Address" />
        </RowAlignEnd>
        <Row>
          <Checkbox
            label="You may contact my landlord for approval."
            labelFZ={12}
            checked
          />
        </Row>
      </Section>
    </React.Fragment>
  );
};

export default Home;