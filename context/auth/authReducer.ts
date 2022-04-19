import { AuthState } from './';
import { ICustomer } from '../../interfaces';


type AuthActionType = 
   | { type: '[Auth] - Signin', payload: ICustomer }
   | { type: '[Auth] - Signout' }


export const authReducer = ( state: AuthState, action: AuthActionType ): AuthState => {

  switch (action.type) {
  case '[Auth] - Signin':
    return {
      ...state,
      isLoggedIn: true,
      customer: action.payload
    };

  case '[Auth] - Signout':
    return {
      ...state,
      isLoggedIn: false,
      customer: undefined,
    };


  default:
    return state;
  }

};
