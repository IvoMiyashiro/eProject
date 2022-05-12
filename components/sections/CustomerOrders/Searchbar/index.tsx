import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

import { Form, Input, InputWrapper } from './styles';

interface Props {
  placeholder: string;
  handleSearchOrders: Dispatch<SetStateAction<string>>;
}

export const Searchbar = ({ placeholder, handleSearchOrders }: Props) => {

  const [inputValue, setInputValue] = useState('');
  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    handleSearchOrders(e.target.value);
  };

  return (
    <Form>
      <InputWrapper>
        <Input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleSearch}
        />
      </InputWrapper>
    </Form>
  );
};
