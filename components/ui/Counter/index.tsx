import styled from 'styled-components';

interface Props {
  value: number;
  handleValue: (value: number | ((prevValue: number) => number)) => void;
}

export const Counter = ({ value, handleValue }: Props) => {

  const increase = () => {
    if (value === 5) return;
    handleValue(value => value + 1);
  };

  const decrease = () => {
    if (value === 1) return;
    handleValue(value => value - 1);
  };

  return (
    <Div>
      <Button onClick={decrease}>-</Button>
      <Input 
        type="number"
        value={value}
      />
      <Button onClick={increase}>+</Button>
    </Div>
  );
};

const Div = styled.div`
  align-items: center;
  display: flex;
  gap: 0.25em;
`;
  
const Button = styled.button`
  align-items: center;
  background-color: transparent;
  background-color: ${props => props.theme.color_tertiary_0};
  border-radius: 4px;
  border: none;
  display: flex;
  font-family: sans-serif;
  font-size: 1rem;
  height: 20px;
  justify-content: center;
  padding: 0;
  width: 20px;
`;

const Input = styled.input`
  -moz-appearance: textfield;
  border: none;
  font-size: 1rem;
  height: 25px;
  text-align: center;
  width: 25px;
  font-family: 'Inter';

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
`;
