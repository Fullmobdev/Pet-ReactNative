import styled from 'styled-components';
import { Row } from '../../../../Components/Layout';

export const RowAlignEnd = styled(Row)`
  align-items: flex-end
`;
export const Label = styled.p`
  font-weight: 600;
  line-height: 14px;
  font-size: ${({ fz = 14 }) => fz}px;
  letter-spacing: -0.24px;
  display: inline-block;
  color: #A2A2A2;
  margin: 0;
  vertical-align: 4px;
`;