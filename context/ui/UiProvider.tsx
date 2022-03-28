import { FC, useReducer } from 'react';
import { UiContext, uiReducer } from './';

export interface UiState {
  isMenuOpen: boolean;
  isCartOpen: boolean;
}

const UI_INIT_STATE: UiState = {
  isMenuOpen: false,
  isCartOpen: false
};

export const UiProvider: FC = ({ children }) => {

  const [state, dispatch] = useReducer(uiReducer, UI_INIT_STATE);

  const toggleMenu = () => {
    dispatch({ type: '[UI] - ToggleMenu' });
  };

  const toggleCartMenu = () => {
    dispatch({ type: '[UI] - ToggleCartMenu' });
  };

  return (
    <UiContext.Provider value={{
      ...state,

      //Methods
      toggleMenu,
      toggleCartMenu
    }}>
      { children }
    </UiContext.Provider>
  );
};
