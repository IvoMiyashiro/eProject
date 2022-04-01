import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { Div, H3, Label, Wrapper, InputNumber, Span, Error } from './styles';

interface Props {
  minPrice: number;
  maxPrice: number;
  formError: { ok: boolean; message: string };
  handleMinPrice: (value: number) => void;
  handleMaxPrice: (value: number) => void;
  handleFormError: Dispatch<SetStateAction<{ ok: boolean; message: string; }>>
}

export const PriceFilter = ({ minPrice, maxPrice, formError, handleMinPrice, handleMaxPrice }: Props) => {

  const handleInputMinNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleMinPrice(Number(e.target.value));
  };

  const handleInputMaxNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleMaxPrice(Number(e.target.value));
  };

  return (
    <Div>
      <H3>Price</H3>
      <Wrapper>
        <InputNumber
          type="number"
          placeholder="Min."
          value={ minPrice }
          onChange={ handleInputMinNumberChange }
        />
        <Label>to</Label>
        <InputNumber
          type="number"
          placeholder="Max."
          value={ maxPrice }
          onChange={ handleInputMaxNumberChange }
        />
      </Wrapper>
      {
        formError
        &&
        <Error>
          <Span>{ formError.message }</Span>
        </Error>
      }
      
    </Div>
  );
};
