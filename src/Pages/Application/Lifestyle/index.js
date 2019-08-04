import React from 'react';
import Section from '../_components/Section';
import { Row } from '../../../Components/Layout';
import {
  TextInput,
  Textarea,
  Select,
} from '../../../Components/FormElements';
import { RowAlignEnd } from '../_components/Layout';
import data from '../data';

const Lifestyle = () => {
  return (
    <React.Fragment>
      <Section header="Dog Care">
        <Row>
          <Select options={data.dogLive} placeholder="Where will the dog live?" />
        </Row>
        <RowAlignEnd>
          <TextInput label="If outside, what’s the plan for bad weather?" />
        </RowAlignEnd>
        <RowAlignEnd>
          <TextInput label="On a regular day, how many hours will the dog be left alone?" />
        </RowAlignEnd>
        <Row>
          <Select options={data.dogAlone} placeholder="Where will the dog spend time alone? *" required />
        </Row>
        <RowAlignEnd>
          <Textarea label="What hours of the day will the dog be walked on a normal day and who will be responsible for each walk?" />
        </RowAlignEnd>
        <RowAlignEnd>
          <Textarea label="Describe how you plan to train your new dog." />
        </RowAlignEnd>
        <RowAlignEnd>
          <Textarea label="Describe any experience you have had with medical or behavioral issues." />
        </RowAlignEnd>
        <RowAlignEnd>
          <Textarea label="Are you willing to work through unexpected hardships with your pet and hire a trainer if need be?" />
        </RowAlignEnd>
        <Row>
          <Select
            options={data.energyLevel}
            header="What energy level would work with your lifestyle?"
            defaultValue={data.energyLevel[0]}
            required
          />
        </Row>
      </Section>
    </React.Fragment>
  );
};

export default Lifestyle;