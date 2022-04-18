import { useEffect, useCallback, useState } from 'react';

import { Logo } from '../Logo';
import { ActionButtons, Searchbar, Navigation } from './components';

import { lightTheme } from 'styles';
import { Div, Nav, NavWrapper, Section, Wrapper } from './styles';

interface Props {
  handleAppTheme: any;
}

export const Navbar = ({ handleAppTheme }: Props) => {

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) {
        setShow(false); 
      } else {
        setShow(true);  
      }
      setLastScrollY(window.scrollY); 
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY, controlNavbar]);

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
              <Searchbar />
            </Section>
            <Section>
              <ActionButtons handleAppTheme={handleAppTheme} />
            </Section>
          </Wrapper>
        </Div>
        <Navigation isVisible={show}/>
      </Nav>
    </NavWrapper>
  );
};
