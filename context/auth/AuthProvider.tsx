import { FC, useReducer, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';

import { ICustomer } from 'interfaces';
import { signUp, signIn } from 'services';

import { AuthContext, authReducer } from './';

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

  const router = useRouter();

  useEffect(() => {
    if ( status === 'authenticated' ) {
      dispatch({ type: '[AUTH] - Signin', payload: data?.user as ICustomer });
    } else if (status === 'loading') {
      dispatch({ type: '[AUTH] - Start Loading' });
    } else if (status === 'unauthenticated') {
      dispatch({ type: '[AUTH] - Finish Loading' });
    }
  }, [ status, data ]);


  const signin = async( email: string, password: string ) => {
    try {
      const { customer, message } = await signIn(email, password);

      if (!!message) return { error: true, message };

      dispatch({
        type: '[AUTH] - Signin',
        payload: customer!
      });
      const destination = router.query.p?.toString() || '/';
      router.replace(destination);
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
        type: '[AUTH] - Signin',
        payload: customer!
      });
      
      const destination = router.query.p?.toString() || '/';
      router.replace(destination);
      return { error: false };
    } catch(error) {
      console.log(error);
      return { error: true };
    }
  };

  const updateCustomerData = ({ name, email, phone_number }: { name: string; email: string; phone_number: string; }) => {
    dispatch({
      type: '[AUTH] - Update customer',
      payload: { name, email, phone_number }
    });
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
      updateCustomerData,
    }}>
      { children }
    </AuthContext.Provider>
  );
};
