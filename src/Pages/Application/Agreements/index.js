import React from 'react';
import Section from '../_components/Section';
import { Row } from '../../../Components/Layout';
import Button from '../../../Components/Button';
import { Checkbox } from '../_components/FormElements';

const agreementLabelStyle = {
  lineHeight: '22px',
  fontSize: 16,
  paddingLeft: 33,
  marginTop: -4,
};
const agreementIconWrapStyles = {
  position: 'absolute',
  width: 18,
  height: 18,
};

const AgreementCheckbox = props => (
  <Checkbox
    {...props}
    iconWrapStyles={agreementIconWrapStyles}
    labelStyle={agreementLabelStyle}
  />
)

const Agreements = ({ nextUrl }) => {
  return (
    <React.Fragment>
      <Section header="Agreements">
        <Row m="20px 0 15px">
          <AgreementCheckbox
            label="I agree to a home visit prior to being approved for adoption, if required."
            checked
          />
        </Row>
        <Row>
          <AgreementCheckbox
            label="I agree to pay the adoption fee stated on the dog’s profile page when the adoption is approved by me and the rescue."
            checked
          />
        </Row>
        <Row m="25px 0 15px">
          <Button to={nextUrl} small noShadow>
            Complete Application
          </Button>
        </Row>
        <Row>
          <Button secondary small noShadow as="button">
            Save for later
          </Button>
        </Row>
      </Section>
    </React.Fragment>
  );
};

export default Agreements;