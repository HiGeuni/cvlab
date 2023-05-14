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
  min-width: 800px;
  max-width: 750px;
  padding: 50px 0;
  background-color: white;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  max-width: 620px;
  background-color: #fbeded;
  border-radius: 10px;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const StyledLabel = styled.label`
  color: #593333;
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const StyledInput = styled.input`
  min-width: 620px;
  font-size: 30px;
  height: 60px;
  background-color: #fbeded;
  border: none;
  border-radius: 10px;
  margin-bottom: 1rem;
  ::-webkit-input-placeholder {
    text-indent: 1rem;
  }
`;

export const StyledButton = styled.div`
  border-radius: 10px;
  width: 620px;
  background-color: #fbeded;
  margin-top: 1rem;
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 620px;
`;
