import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { searchProduct } from 'services';

import { IProduct } from 'interfaces';
import { Spinner, Button, ProductSearchCard } from 'components/ui';

import { lightTheme } from 'styles';
import { Form, Input, InputWrapper, P, SearchBox, Section, SpinnerWrapper } from './styles';


export const Searchbar = () => {

  const [inputValue, setInputValue] = useState('');
  const [searchList, setSearchList] = useState<IProduct[] | []>([]);
  const [isLoading, setLoading] = useState(false);
  const [isFocus, setFocus] = useState(false);
  const [isHover, setHover] = useState(false);
  const searchBoxRef = useRef<HTMLDivElement>(null);
  const isSearchBoxVisible = inputValue.length > 0 && searchList.length !== 0 && isFocus;
  const router = useRouter();

  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setLoading(true);
    const search = await searchProduct(e.target.value);
    setLoading(false);
    setSearchList(search);
  };

  const handleVisibility = () => {
    if (!isHover) {
      setFocus(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/products?search=${inputValue}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputWrapper
        onBlur={handleVisibility}
      >
        <Input
          type="text"
          placeholder="Type a product name..."
          value={inputValue}
          onChange={handleSearch}
          onFocus={() => setFocus(true)}
        />
        {
          isSearchBoxVisible
          &&
          <SearchBox
            ref={searchBoxRef}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {
              isLoading
                ? <SpinnerWrapper><Spinner size="18px" /></SpinnerWrapper>
                : searchList.map((product, i) => {
                  if (i < 4) {
                    return (
                      <ProductSearchCard 
                        key={product.id}
                        id={product.id}
                        image={product.image_urls[0]}
                        title={product.title}
                        onClick={() => {setFocus(false); setInputValue('');}}
                      />
                    );
                  }
                })
            }
            {
              searchList.length > 4
              &&
              <Link href={`/products?search=${inputValue}`} passHref>
                <Section>
                  <P>And {searchList.length - 4} more products</P>
                </Section>
              </Link>
            }
          </SearchBox>
        }
      </InputWrapper>
      <Button
        bgColor={lightTheme.color_tertiary_0}
        textColor={lightTheme.color_ui_text_main}
        width="100px"
        bRadius="2px"
        type="submit"
      >
        Search
      </Button>
    </Form>
  );
};
