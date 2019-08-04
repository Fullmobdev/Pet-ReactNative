import React from 'react';
import Section from '../_components/Section';
import { Col, Row } from '../../../Components/Layout';
import {
  TextInput,
  Textarea,
  Select,
} from '../../../Components/FormElements';
import { RowAlignEnd } from '../_components/Layout';
import { Checkbox } from '../_components/FormElements';
import data from '../data';

const CoAdopter = () => {
  return (
    <React.Fragment>
      <Section header="Co-Adopter">
        <RowAlignEnd>
          <Col w="50%">
            <TextInput
              label="Date of Birth"
              placeholder="DD/MM/YYYY"
              required
            />
          </Col>
        </RowAlignEnd>
        <RowAlignEnd>
          <Col>
            <TextInput label="First Name" required />
          </Col>
          <Col>
            <TextInput label="Last Name" required />
          </Col>
        </RowAlignEnd>
        <RowAlignEnd>
          <TextInput label="Phone Number" required />
        </RowAlignEnd>
        <RowAlignEnd>
          <TextInput label="Email Address" required />
        </RowAlignEnd>
        <Row>
          <Select options={data.relationship} placeholder="Relationship" />
        </Row>
      </Section>
      <Section header="Co-Adopter Address">
        <Row m="12px 0 10px">
          <Checkbox label="Same as mine" checked />
        </Row>
        <RowAlignEnd>
          <TextInput label="Street Address" required />
        </RowAlignEnd>
        <RowAlignEnd>
          <Col w="69%">
            <TextInput label="City" required />
          </Col>
          <Col w="31%">
            <Select options={data.states} placeholder="State" />
          </Col>
        </RowAlignEnd>
        <RowAlignEnd>
          <Col>
            <TextInput label="Zip Code" required />
          </Col>
          <Col>
            <Select options={data.countries} placeholder="Country" />
          </Col>
        </RowAlignEnd>
      </Section>
      <Section header="Co-Adopter Employment">
        <RowAlignEnd>
          <Col>
            <TextInput label="Status" required />
          </Col>
          <Col>
            <Select options={data.years} placeholder="# of Years" />
          </Col>
        </RowAlignEnd>
        <RowAlignEnd>
          <TextInput label="Company" required />
        </RowAlignEnd>
        <RowAlignEnd>
          <TextInput label="Street Address" required />
        </RowAlignEnd>
        <RowAlignEnd>
          <Col w="69%">
            <TextInput label="City" required />
          </Col>
          <Col w="31%">
            <Select options={data.states} placeholder="State" />
          </Col>
        </RowAlignEnd>
        <RowAlignEnd>
          <Col>
            <TextInput label="Zip Code" required />
          </Col>
          <Col>
            <Select options={data.countries} placeholder="Country" />
          </Col>
        </RowAlignEnd>
        <RowAlignEnd>
          <Textarea
            label="If your relationship were to change, who would the dog remain with?"
            required
          />
        </RowAlignEnd>
      </Section>
    </React.Fragment>
  );
};

export default CoAdopter;