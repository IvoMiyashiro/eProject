import { EyeIcon } from 'components/icons';
import { Searchbar, InputSelectIcon } from 'components/ui';
import { Div, Section } from './styles';

export const Header = () => {
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
        name="orders-length-view"
        values={['10', '15', '20', '25']}
      />
    </Div>
  );
};
