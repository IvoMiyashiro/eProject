import { createContext } from 'react';

interface ContextProps {
  isCartOpen: boolean;
  isMenuOpen: boolean;

  //Methods
  toggleMenu: () => void;
}

export const UiContext = createContext( {} as ContextProps );
