import { useEffect, useState } from 'react';
import { useInput } from '../../hooks/useInput';

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
    <div className="flex h-full justify-center items-center text-2xl">
      <form className="flex flex-col w-6/12 gap-y-8">
        <div className="flex flex-col items-start ">
          <label>ID</label>
          <input
            className="w-full"
            value={id.value}
            onChange={id.onChangeValue}
            placeholder="ID"
          />
        </div>
        <div className="flex flex-col items-start ">
          <label>PIN</label>
          <input
            className="w-full"
            value={pin.value}
            onChange={pin.onChangeValue}
            placeholder="PIN"
          />
        </div>
        <div
          className="w-full h-80 bg-white"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          isDragOver={isDragOver}
        >
          {selectedImage ? (
            <img
              alt="selectedImage"
              src={URL.createObjectURL(selectedImage)}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          ) : (
            <>
              <div> Drag and Drop Image </div>
            </>
          )}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SignupForm;
