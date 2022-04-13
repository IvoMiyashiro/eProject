import { useContext, useState } from 'react';
import { useRouter } from 'next/router';

import { handleInputMaxNumberChange, handleInputMinNumberChange, handleSubmit } from '../../_handlers';

import { CatalogContext } from 'context';
import { Button } from 'components/ui/Button';

import { lightTheme } from 'styles';
import { ButtonWrapper } from '../../styles';
import { Form, H3, Label, Wrapper, InputNumber, Span, Error } from './styles';

export const PriceFilter = () => {

  const { filters, updatePriceFilter } = useContext(CatalogContext);
  const [isButtonVisible, setButtonVisible] = useState(false);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>();
  const [validPriceFilter, setValidPriceFilter] = useState<{ ok: boolean; message: string }>({ ok: true, message: '' });
  const router = useRouter();

  return (
    <Form onSubmit={(e) => handleSubmit(e, filters, router, setButtonVisible)}>
      <H3>Price</H3>
      <Wrapper>
        <InputNumber
          type="number"
          placeholder="Min."
          min="0"
          value={ minPrice }
          onChange={(e) => handleInputMinNumberChange(e, maxPrice!, setMinPrice, updatePriceFilter)}
        />
        <Label>to</Label>
        <InputNumber
          type="number"
          placeholder="Max."
          value={ maxPrice }
          onChange={ 
            (e) => handleInputMaxNumberChange(e, minPrice, setValidPriceFilter, setButtonVisible, setMaxPrice, updatePriceFilter)
          }
        />
      </Wrapper>
      {
        isButtonVisible
        &&
        <ButtonWrapper>
          <Button
            bgColor={lightTheme.color_primary_0}
            textColor={lightTheme.color_neutral_1}
            bRadius="2px"
            fontSize='0.75rem'
            width="75px"
            type="submit"
          >
            Apply
          </Button>
        </ButtonWrapper>
      }
      {
        !validPriceFilter.ok
        &&
        <Error>
          <Span>{ validPriceFilter.message }</Span>
        </Error>
      }
    </Form>
  );
};
