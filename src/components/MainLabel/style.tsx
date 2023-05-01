import styled from '@emotion/styled';

interface IsPMPRops {
  isPM: boolean;
}

export const Label = styled.div<IsPMPRops>`
  position: fixed;
  color: ${(props) => (props.isPM ? '#ffffff' : '#463635')};
  background: transparent;
  font-size: 2rem;
  left: 2.5rem;
  top: 2.5rem;
  font-weight: 600;
`;
