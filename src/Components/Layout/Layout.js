import styled from 'styled-components';

export const Col = styled.div`
  width: ${({ w }) => w || '100%'};

  :not(:last-child) {
    margin-right: 6px;
  }
`;
export const Row = styled.div`
  display: flex;
  margin: ${({ m }) => m || '0 0 15px'};
  justify-content: ${({ jc }) => jc};
`;

Row.defaultProps = {
  jc: 'space-between',
}
