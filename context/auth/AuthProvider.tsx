import { FC, useReducer, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';

import Cookies from 'js-cookie';

import { ICustomer } from 'interfaces';
import { AuthContext, authReducer } from './';

import { tesloApi } from '../../api';

export interface AuthState {
    isLoggedIn: boolean;
    user?: IUser;
}

const AUTH_INITIAL_STATE: AuthState = {
  isLoggedIn: false,
  user: undefined,
};

export const AuthProvider:FC = ({ children }) => {

  const [state, dispatch] = useReducer( authReducer, AUTH_INITIAL_STATE );
  const { data, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if ( status === 'authenticated' ) {
      console.log({user: data?.user});
      dispatch({ type: '[Auth] - Login', payload: data?.user as IUser });
    }
    
  }, [ status, data ]);


  const loginUser = async( email: string, password: string ) => {



  };


  const registerUser = async( name: string, email: string, password: string ) => {

  };


  const logout = () => {
    signOut();
  };



  return (
    <AuthContext.Provider value={{
      ...state,

      // Methods
      loginUser,
      registerUser,
      logout,
    }}>
      { children }
    </AuthContext.Provider>
  );
};
