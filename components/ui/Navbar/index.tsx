import { useNavbar } from 'hooks';

import { Logo } from '../Logo';
import { ActionButtons, Navigation, Searchbar } from './components';

import { lightTheme } from 'styles';
import { Div, Nav, NavWrapper, Section, Wrapper } from './styles';

interface Props {
  justLogo?: boolean
}

export const Navbar = ({ justLogo = false }: Props) => {

  const { show } = useNavbar();

  return (
    <NavWrapper>
      <Nav>
        <Div>
          <Wrapper>
            <Section>
              <Logo
                isLink={true}
                textColor="#ffffff"
                logoColor={lightTheme.color_tertiary_0}
              />
              {
                !justLogo && <Searchbar />
              }
            </Section>
            {
              !justLogo
              &&
              <Section>
                <ActionButtons />
              </Section>
            }
          </Wrapper>
        </Div>
        {
          !justLogo
          &&
          <Navigation isVisible={show}/>
        }
      </Nav>
    </NavWrapper>
  );
};
