import { GridIcon, ListIcon } from 'components/icons';
import { Div, Button, Wrapper, Label, Select, Option, Section } from './styles';

export const Header = () => {
  return (
    <Div>
      <Section>
        <Button>
          <GridIcon width="22px" height="20px" />
        </Button>
        <Button>
          <ListIcon width="22px" height="22px" />
        </Button>
      </Section>
      <Wrapper>
        <Label>Sort by:</Label>
        <Select>
          <Option>Low to High</Option>
          <Option>High to Low</Option>
        </Select>
      </Wrapper>
    </Div>
  );
};
