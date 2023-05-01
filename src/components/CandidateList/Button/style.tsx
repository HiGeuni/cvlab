import styled from '@emotion/styled';

interface EmotionProps {
  flag: boolean;
}

export const StyledButton = styled.button<EmotionProps>`
  width: 350px;
  background: none;
  border: none;
  color: #463535;
  font-weight: 800;
  margin-bottom: 8;
  padding: 1rem 0;
  border-radius: 1rem;
  background-color: ${(props) => (props.flag ? '#d6ebf0' : '#fbf5df')};
`;
