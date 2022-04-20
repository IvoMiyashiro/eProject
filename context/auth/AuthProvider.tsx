import { FC, useReducer, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';

import { signUp } from 'services/signUp';

import { ICustomer } from 'interfaces';
import { AuthContext, authReducer } from './';
import { signIn } from 'services/signIn';

export interface AuthState {
    isLoading: boolean;
    isLoggedIn: boolean;
    customer?: ICustomer;
}

const AUTH_INITIAL_STATE: AuthState = {
  isLoading: true,
  isLoggedIn: false,
  customer: undefined,
};

export const AuthProvider:FC = ({ children }) => {

  const [state, dispatch] = useReducer( authReducer, AUTH_INITIAL_STATE );
  const { data, status } = useSession();

  useEffect(() => {
    if ( status === 'authenticated' ) {
      dispatch({ type: '[Auth] - Signin', payload: data?.user as ICustomer });
    } else if (status === 'loading') {
      dispatch({ type: '[Auth] - Start Loading' });
    } else if (status === 'unauthenticated') {
      dispatch({ type: '[Auth] - Finish Loading' });
    }
  }, [ status, data ]);


  const signin = async( email: string, password: string ) => {
    try {
      const { customer, message } = await signIn(email, password);

      if (!!message) return { error: true, message };

      dispatch({
        type: '[Auth] - Signin',
        payload: customer!
      });

      return { error: false };
    } catch (error) {
      console.log(error);
      return { error: true };
    }
  };


  const signup = async( name: string, email: string, password: string ): Promise<{error: boolean; message?: string}> => {
    try {
      const { customer, message } = await signUp(name, email, password);

      if (!!message) return { error: true, message };

      dispatch({
        type: '[Auth] - Signin',
        payload: customer!
      });

      return { error: false };
    } catch(error) {
      console.log(error);
      return { error: true };
    }
  };


  const signout = () => {
    signOut();
  };


  return (
    <AuthContext.Provider value={{
      ...state,

      // Methods
      signin,
      signup,
      signout,
    }}>
      { children }
    </AuthContext.Provider>
  );
};
