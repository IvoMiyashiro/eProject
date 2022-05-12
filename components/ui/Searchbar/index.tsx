import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/router';

import { Button } from 'components/ui';
import { SearchResults } from './SearchResults';

import { lightTheme } from 'styles';
import { Form, Input, InputWrapper } from './styles';

interface Props {
  border?: boolean;
  buttonChildren: any;
  onSubmitPath: string;
  placeholder: string;
  resultsDisplay: ({ data }: any) => JSX.Element;
  handleSearchData: (query: string) => Promise<[] | any[]>;
}

export const Searchbar = ({
  border = false,
  buttonChildren,
  onSubmitPath,
  placeholder,
  resultsDisplay,
  handleSearchData
}: Props) => {

  const [searchListValues, setSearchListValues] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isFocus, setFocus] = useState(false);
  const [isHover, setHover] = useState(false);
  const router = useRouter();

  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setLoading(true);
    const search = await handleSearchData(e.target.value);
    setLoading(false);
    setSearchListValues(search);
  };

  const handleVisibility = () => {
    if (!isHover) setFocus(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(onSubmitPath + inputValue);
  };
  
  return (
    <Form onSubmit={handleSubmit} >
      <InputWrapper
        onBlur={handleVisibility}
      >
        <Input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          withBorder={border}
          onChange={handleSearch}
          onFocus={() => setFocus(true)}
        />
        <SearchResults
          inputValue={inputValue}
          isFocus={isFocus}
          isLoading={isLoading}
          listValues={searchListValues}
          onSubmitPath={onSubmitPath}
          resultsDisplay={resultsDisplay}
          handleFocus={setFocus}
          handleHover={setHover}
          handleInputValue={setInputValue}
        />
      </InputWrapper>
      <Button
        bgColor={lightTheme.color_tertiary_0}
        textColor={lightTheme.color_ui_text_main}
        width="100px"
        bRadius="4px"
        type="submit"
      >
        { buttonChildren }
      </Button>
    </Form>
  );
};
