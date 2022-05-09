import { Dispatch, SetStateAction } from 'react';

import { EyeIcon } from 'components/icons';
import { Searchbar, InputSelectIcon } from 'components/ui';

import { Div, Section } from './styles';

interface Props {
  handleLimitPage: Dispatch<SetStateAction<number>>
}

export const Header = ({ handleLimitPage }: Props) => {
  return (
    <Div>
      <Section>
        <Searchbar 
          placeholder="Type an order number..."
          buttonChildren="Search"
          border
        />
      </Section>
      <InputSelectIcon 
        icon={EyeIcon}
        name="orders-limit"
        values={['10', '15', '20', '25']}
        onChange={handleLimitPage}
      />
    </Div>
  );
};
