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

const You = props => {
  return (
    <React.Fragment>
      <Section header="About You">
        <RowAlignEnd>
          <Select options={data.pronoun} placeholder="Preferred Pronoun" />
        </RowAlignEnd>
        <RowAlignEnd>
          <Select options={data.familyStatus} placeholder="Family Status" />
        </RowAlignEnd>
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
          <TextInput label="Phone Number" required />
        </RowAlignEnd>
        <Row m="0 0 10px">
          <Checkbox
            label="Please send text message updates to this number."
            labelFZ={12}
            checked
          />
        </Row>
      </Section>
      <Section header="Address">
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
      <Section header="Employment">
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
          <Col w="69%">
            <TextInput label="City" required />
          </Col>
          <Col w="31%">
            <Select options={data.states} placeholder="State" />
          </Col>
        </RowAlignEnd>
        <RowAlignEnd>
          <Textarea
            label="If unemployed or retired, please explain how you will fund the costs of keeping the dog healthy."
            required
          />
        </RowAlignEnd>
      </Section>
      <Section header="More About You">
        <RowAlignEnd>
          <Textarea
            label="Please tell us about yourself."
            required
          />
        </RowAlignEnd>
        <RowAlignEnd>
          <Textarea
            label="Describe your ideal dog."
            required
          />
        </RowAlignEnd>
        <RowAlignEnd>
          <Textarea
            label="Why do you want to adopt a dog."
            required
          />
        </RowAlignEnd>
        <RowAlignEnd>
          <Textarea
            label="If deployed, what is the plan for the dog."
            required
          />
        </RowAlignEnd>
      </Section>
      <Section header="Co-Adopter">
        <Row m="0 0 10px">
          <CheckboxGroup header="Do you have a co-adopter? *">
            <Checkbox label="Yes" />
            <Checkbox label="No" />
          </CheckboxGroup>
        </Row>
      </Section>
    </React.Fragment>
  )
};

export default You;