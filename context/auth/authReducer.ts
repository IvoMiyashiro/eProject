import { AuthState } from './';
import { ICustomer } from 'interfaces';

type AuthActionType = 
   | { type: '[AUTH] - Signin', payload: ICustomer }
   | { type: '[AUTH] - Signout' }
   | { type: '[AUTH] - Start Loading' }
   | { type: '[AUTH] - Finish Loading' }
   | { type: '[AUTH] - Update customer', payload: { name: string; email: string; phone_number: string; }}

export const authReducer = ( state: AuthState, action: AuthActionType ): AuthState => {

  switch (action.type) {
  case '[AUTH] - Signin':
    return {
      ...state,
      isLoading: false,
      isLoggedIn: true,
      customer: action.payload
    };

  case '[AUTH] - Signout':
    return {
      ...state,
      isLoggedIn: false,
      customer: undefined,
    };
  
  case '[AUTH] - Start Loading':
    return {
      ...state,
      isLoading: true
    };

  case '[AUTH] - Finish Loading':
    return {
      ...state,
      isLoading: false
    };
  
  case '[AUTH] - Update customer':
    const { name, email, phone_number } = action.payload;
    if (state.customer) {
      return {
        ...state,
        customer: {
          ...state.customer,
          name: name,
          email: email,
          phone_number: phone_number
        }
      };
    };

  default:
    return state;
  }

};
