import { useState } from 'react';

import { DotsIcon, HomeIcon } from 'components/icons';
import { Button, TabMenu } from 'components/ui';

import { Div, Section, H2, P, ButtonWrapper, Ul, Li, Wrapper } from './styles';

interface Props {
  address: string;
  zip: string;
  province: string;
  locality: string;
}

export const AddressCard = ({ address, zip, province, locality }: Props) => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <Div>
      <Section>
        <HomeIcon width="24px" height="24px" />
      </Section>
      <Section>
        <H2>{ address }</H2>
        <P>Zip code: { zip }</P>
        <P>{ province } - { locality }</P>
      </Section>
      <Wrapper>
        <ButtonWrapper>
          <Button
            bgColor="transparent"
            textColor=""
            onClick={() => setMenuOpen(true)}
          >
            <DotsIcon width="20px" heigth="20px" />
          </Button>
          <TabMenu isOpen={isMenuOpen} handleOpen={setMenuOpen} right="0">
            <Ul>
              <Li>Edit</Li>
              <Li>Delete</Li>
              <Li onClick={() => setMenuOpen(false)}>Cancel</Li>
            </Ul>
          </TabMenu>
        </ButtonWrapper>
      </Wrapper>
    </Div>
  );
};
