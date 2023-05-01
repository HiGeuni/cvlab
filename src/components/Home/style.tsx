import styled from '@emotion/styled';
interface EmotionProps {
  isPM: boolean;
}

export const Container = styled.div<EmotionProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  font-weight: 800;
  color: ${(props) => (props.isPM ? '#ffffff' : '#463635')};
`;

export const MarginDiv = styled.div`
  margin-top: 1rem;
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledBtn = styled.button<EmotionProps>`
  background: none;
  background-color: ${(props) => (props.isPM ? '#686969' : '#53A453')};
  border-radius: 2rem;
  height: 100px;
  width: 350px;
  padding: 0;
  margin-top: 6rem;
  font-weight: 700;
  > a {
    text-decoration: none;
    color: ${(props) => (props.isPM ? ' white' : '#463635')};
  }
`;

export const ToRegister = styled.div<EmotionProps>`
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  color: ${(props) => (props.isPM ? ' #ffffff77' : '#46363577')};
  margin-top: 1rem;
  column-gap: 0.5rem;
  > a {
    text-decoration: none;
    color: ${(props) => (props.isPM ? ' #ffffffcc' : '#463635cc')};
  }
`;
