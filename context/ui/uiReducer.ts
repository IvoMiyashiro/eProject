import { UiState } from './';

type UiActionType = 
 | { type: '[UI] - ToggleMenu' }
 | { type: '[UI] - ToggleCartMenu' }

export const uiReducer = ( state: UiState, action: UiActionType ): UiState => {

  switch (action.type) {

  case '[UI] - ToggleMenu':
    return {
      ...state,
      isMenuOpen: !state.isMenuOpen
    };
  
  case '[UI] - ToggleCartMenu':
    return {
      ...state,
      isCartOpen: !state.isCartOpen
    };

  default:
    return state;
  }
};
