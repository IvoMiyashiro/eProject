import { useState, ChangeEvent, RefObject } from 'react';

interface Props {
  inputRef: RefObject<HTMLInputElement>;
}

export const useImage = ({ inputRef }: Props) => {
  const [image, setImage] = useState({
    file: undefined,
    fileUrl: ''
  });

  const handleInputClick = () => {
    if (inputRef.current === null) return;
    inputRef.current.click();
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage((prev: any) => {
        if (e.target.files) {
          return {
            ...prev,
            file: e.target.files[0],
            fileUrl: URL.createObjectURL(e.target.files[0])
          };
        }
      });
    }
  };

  return {
    image,
    handleInputClick,
    handleImageChange
  };
};
