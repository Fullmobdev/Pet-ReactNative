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

const Family = () => {
  return (
    <React.Fragment>
      <Section header="Family">
        <Row>
          <CheckboxGroup header="Do you live with children?">
            <Checkbox label="Yes" />
            <Checkbox label="No" />
          </CheckboxGroup>
        </Row>
        <RowAlignEnd>
          <TextInput label="If yes, what ages?" required={false} />
        </RowAlignEnd>
        <Row>
          <CheckboxGroup header="Is anyone in the household allergic to dogs? *">
            <Checkbox label="Yes" />
            <Checkbox label="No" />
          </CheckboxGroup>
        </Row>
        <RowAlignEnd>
          <Textarea label="If yes, how will this be managed?" />
        </RowAlignEnd>
      </Section>
      <Section header="Current / Past Animal History">
        <Row>
          <CheckboxGroup header="Do you currently own any pets? *">
            <Checkbox label="Yes" checked />
            <Checkbox label="No" />
          </CheckboxGroup>
        </Row>
        <RowAlignEnd>
          <TextInput label="Name of Pet"/>
        </RowAlignEnd>
        <RowAlignEnd>
          <Col>
            <Select options={data.species} placeholder="Species" />
          </Col>
          <Col>
            <TextInput label="Breed" required={false} />
          </Col>
        </RowAlignEnd>
        <RowAlignEnd>
          <Col>
            <Select options={data.sex} placeholder="Sex" />
          </Col>
          <Col>
            <Select options={data.age} placeholder="Age" />
          </Col>
        </RowAlignEnd>
        <Row>
          <CheckboxGroup header="Have you owned pets in the past?">
            <Checkbox label="Yes" checked />
            <Checkbox label="No" />
          </CheckboxGroup>
        </Row>
        <Row>
          <CheckboxGroup header="Do you currently have a veterinarian?">
            <Checkbox label="Yes" checked />
            <Checkbox label="No" />
          </CheckboxGroup>
        </Row>
      </Section>
      <Section header="Veterinarian">
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
        <RowAlignEnd>
          <TextInput label="Name of Practice" />
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
        <Row>
          <Checkbox
            label="You may contact my veterinarian for a reference."
            labelFZ={12}
            checked
          />
        </Row>
        <RowAlignEnd>
          <Textarea label="What is your contigency plan for unexpected emergency vet bills?" />
        </RowAlignEnd>
        <Row>
          <CheckboxGroup header="Do you plan to get pet insurance?">
            <Checkbox label="Yes" checked />
            <Checkbox label="No" />
          </CheckboxGroup>
        </Row>
      </Section>
    </React.Fragment>
  );
};

export default Family;