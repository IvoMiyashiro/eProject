import { ChangeEvent, Dispatch, SetStateAction, useContext } from 'react';

import { array } from 'utils';

import { BrandList } from 'interfaces';
import { CatalogContext } from 'context';
import { Section, Label, Input } from '../../styles';

interface Props {
  inputValue: string;
  checkedState: boolean[] | [],
  index: number;
  prevCheckedState:  [] | boolean[];
  handleCheckedState: Dispatch<SetStateAction<[] | boolean[]>>;
  handleButtonVisible: Dispatch<SetStateAction<boolean>>;
}

export const InputCheckbox = ({ 
  inputValue,
  checkedState,
  index,
  prevCheckedState,
  handleCheckedState,
  handleButtonVisible 
}: Props) => {

  const { updateBrandsFilter } = useContext(CatalogContext);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>, position: number) => {
    updateBrandsFilter(e.target.value as BrandList);
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    
    handleCheckedState(updatedCheckedState);

    if (prevCheckedState.length === 0) {
      if (!updatedCheckedState.includes(true)) return handleButtonVisible(false);
      return handleButtonVisible(true);
    }

    if (array.arraysEqual(prevCheckedState, updatedCheckedState)) {
      return handleButtonVisible(false);
    }
    return handleButtonVisible(true);
  };

  return (
    <Section>
      <Label>
        <Input
          type="checkbox"
          value={inputValue}
          onChange={(e) => handleOnChange(e, index)}
          checked={checkedState[index] || false}
        />
        { inputValue }
      </Label>
    </Section>
  );
};
