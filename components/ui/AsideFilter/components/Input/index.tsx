import { useContext, useState, ChangeEvent, Dispatch, SetStateAction } from 'react';

import { BrandList, CategoryList } from 'interfaces';
import { CatalogContext } from 'context';

import { Section, Label, Input as StyledInput } from '../../styles';

interface Props {
  data: BrandList | CategoryList
  handleButtonVisible: Dispatch<SetStateAction<boolean>>
}

export const Input = ({ data, handleButtonVisible }: Props) => {

  const { updateBrandsFilter } = useContext(CatalogContext);
  const [isChecked, setChecked] = useState(false);
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value: any = e.target.value;
    updateBrandsFilter(value);
    setChecked(prev => !prev);
    handleButtonVisible(prev => !prev);
  };

  return (
    <Section>
      <Label>
        <StyledInput
          type="checkbox"
          value={data}
          onChange={handleInputChange}
          checked={isChecked}
        />
        {data}
      </Label>
    </Section>
  );
};
