import { useEffect, useState } from 'react';
import { useInput } from '../../hooks/useInput';
import {
  FormContainer,
  ImageContainer,
  LabelConatiner,
  StyledForm,
  StyledImage,
} from './style';

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
        <LabelConatiner>
          <label>ID</label>
          <input
            value={id.value}
            onChange={id.onChangeValue}
            placeholder="ID"
          />
        </LabelConatiner>
        <LabelConatiner>
          <label>PIN</label>
          <input
            value={pin.value}
            onChange={pin.onChangeValue}
            placeholder="PIN"
          />
        </LabelConatiner>
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
        <button>Submit</button>
      </StyledForm>
    </FormContainer>
  );
};

export default SignupForm;
