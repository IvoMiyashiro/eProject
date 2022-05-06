import { useNavbar } from 'hooks';

import { searchProduct } from 'services';

import { Logo } from '../Logo';
import { ProductSearchCard, Searchbar } from 'components/ui';
import { ActionButtons, Navigation } from './components';

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
                !justLogo 
                && 
                <Searchbar 
                  buttonChildren="Search"
                  onSubmitPath={'/products?search='}
                  placeholder="Type a product name..."
                  resultsDisplay={ProductSearchCard}
                  handleSearchData={searchProduct}
                />
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
