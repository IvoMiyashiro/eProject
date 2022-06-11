import { ChangeEvent, Dispatch, SetStateAction, useContext } from 'react';

import { array } from 'utils';

import { BrandList } from 'interfaces';
import { Section, Label, Input } from '../../styles';
import { CatalogContext } from 'context';

interface Props {
  inputValue: string;
  checkedState: boolean[] | [],
  index: number;
  prevCheckedState:  [] | boolean[];
  handleCheckedState: Dispatch<SetStateAction<[] | boolean[]>>;
  handleButtonVisible: Dispatch<SetStateAction<boolean>>;
  handleUpdateFilters: any;
}

export const InputCheckbox = ({ 
  inputValue,
  checkedState,
  index,
  prevCheckedState,
  handleUpdateFilters,
  handleCheckedState,
  handleButtonVisible,
}: Props) => {

  const { filters } = useContext(CatalogContext);
  const { categories, brands, stock } = filters;
  const isChecked = categories.includes(inputValue as any) || brands.includes(inputValue as any);


  const handleOnChange = (e: ChangeEvent<HTMLInputElement>, position: number) => {
    handleUpdateFilters(e.target.value as BrandList);
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
          checked={isChecked}
        />
        { inputValue }
      </Label>
    </Section>
  );
};
