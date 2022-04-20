import { AuthState } from './';
import { ICustomer } from 'interfaces';

type AuthActionType = 
   | { type: '[Auth] - Signin', payload: ICustomer }
   | { type: '[Auth] - Signout' }
   | { type: '[Auth] - Start Loading' }
   | { type: '[Auth] - Finish Loading' }

export const authReducer = ( state: AuthState, action: AuthActionType ): AuthState => {

  switch (action.type) {
  case '[Auth] - Signin':
    return {
      ...state,
      isLoading: false,
      isLoggedIn: true,
      customer: action.payload
    };

  case '[Auth] - Signout':
    return {
      ...state,
      isLoggedIn: false,
      customer: undefined,
    };
  
  case '[Auth] - Start Loading':
    return {
      ...state,
      isLoading: true
    };

  case '[Auth] - Finish Loading':
    return {
      ...state,
      isLoading: false
    };

  default:
    return state;
  }

};
