import { useEffect, useState } from 'react';
import { useInput } from '../../hooks/useInput';
import {
  FlexDiv,
  FormContainer,
  ImageContainer,
  LabelConatiner,
  StyledButton,
  StyledForm,
  StyledImage,
  StyledInput,
  StyledLabel,
} from './style';
import axios from 'axios';

// localhost:8000/attendence/members/sign_up
const SignupForm = () => {
  const id = useInput();
  const pin = useInput();
  const [selectedImage, setSelectedImage] = useState();
  const [isDragOver, setIsDragOver] = useState<boolean>();

  const handleDragOver = (e: any) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: any) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  return (
    <FormContainer>
      <StyledForm>
        <FlexDiv>
          <StyledLabel>기본 정보</StyledLabel>
          <StyledInput
            value={id.value}
            onChange={id.onChangeValue}
            placeholder="ID"
          />
          <StyledInput
            value={pin.value}
            onChange={pin.onChangeValue}
            placeholder="PIN"
          />
        </FlexDiv>
        <FlexDiv>
          <StyledLabel>얼굴 정보</StyledLabel>
          <ImageContainer
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            isDragOver={isDragOver}
          >
            {selectedImage ? (
              <StyledImage
                alt="selectedImage"
                src={URL.createObjectURL(selectedImage)}
              />
            ) : (
              <>
                <div> Drag and Drop Image </div>
              </>
            )}
          </ImageContainer>
        </FlexDiv>
        <StyledButton>Submit</StyledButton>
      </StyledForm>
    </FormContainer>
  );
};

export default SignupForm;
