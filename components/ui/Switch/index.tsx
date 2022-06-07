import { Dispatch, SetStateAction } from 'react';
import { Input, Label, Span } from './styles';

interface Props {
  id: string;
  isOn: boolean;
  handleToggle: () => Promise<void>;
}

export const Switch = ({ id, isOn, handleToggle }: Props) => {
  return (
    <>
      <Input
        checked={isOn}
        onChange={handleToggle}
        id={`react-switch-${id}`}
        type="checkbox"
      />
      <Label htmlFor={`react-switch-${id}`} isOn={isOn}>
        <Span />
      </Label>
    </>
  );
};
