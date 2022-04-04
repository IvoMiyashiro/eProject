import { ChangeEvent, useContext } from 'react';

import { CartContext } from 'context';
import { IProduct } from 'interfaces';

import { Div, Button, Input } from './styles';

interface Props {
  value: number;
  product: IProduct
  handleValue: (value: number | ((prevValue: number) => number)) => void;
}

export const Counter = ({ value, product, handleValue }: Props) => {

  const { updateProductQuantity } = useContext(CartContext);

  const increase = () => {
    if (value === 5) return;
    handleValue(value => value + 1);

    const newValue = Number(value + 1);
    const newQuantityProduct = { ...product, quantity: newValue }; 
    updateProductQuantity(newQuantityProduct);
  };

  const decrease = () => {
    if (value === 1) return;
    handleValue(value => value - 1);

    const newValue = Number(value - 1);
    const newQuantityProduct = { ...product, quantity: newValue }; 
    updateProductQuantity(newQuantityProduct);
  };

  const handleInputChange = (e: ChangeEvent <HTMLInputElement>) => {};

  return (
    <Div>
      <Button onClick={decrease}>-</Button>
      <Input 
        type="number"
        value={value}
        onChange={handleInputChange}
      />
      <Button onClick={increase}>+</Button>
    </Div>
  );
};
