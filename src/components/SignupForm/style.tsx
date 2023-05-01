import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const FormContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

const FlexCol = css`
  display: flex;
  flex-direction: column;
`;

export const StyledForm = styled.form`
  ${FlexCol};
  width: 50%;
  row-gap: 10px;
`;

export const LabelConatiner = styled.div`
  ${FlexCol};
  > input {
    width: 100%;
    font-size: 2rem;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 20rem;
  background-color: white;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
