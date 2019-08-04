import styled from 'styled-components';

export const Para = styled.p`
  font-size: ${({ fz = 14 }) => `${fz}px`};
  line-height: ${({ lh = 16 }) => `${lh}px`};
  color: ${({ color = '#2384CC' }) => color};
  margin: ${({ m = 0}) => m};
  text-align: center;
`;

export const ParaBold = styled(Para)`
  font-weight: 800;
  white-space: pre;
  letter-spacing: -2px;
`;