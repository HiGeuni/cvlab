const { useState } = require('react');

export const useInput = () => {
  const [value, setValue] = useState();
  const onChangeValue = (e: any) => {
    setValue(e.target.value);
  };
  return { value, setValue, onChangeValue };
};
