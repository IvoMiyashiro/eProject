import { Dispatch, SetStateAction } from 'react';

import { EyeIcon } from 'components/icons';
import { InputSelectIcon } from 'components/ui';
import { Searchbar } from '../Searchbar';

import { Div, Section } from './styles';

interface Props {
  handleLimitPage: Dispatch<SetStateAction<number>>;
  handleSearchOrders: Dispatch<SetStateAction<string>>;
}

export const Header = ({ handleLimitPage, handleSearchOrders }: Props) => {
  return (
    <Div>
      <Section>
        <Searchbar
          placeholder="Type an order number..."
          handleSearchOrders={handleSearchOrders}
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
