import { createContext } from 'react';
import { ICustomer } from 'interfaces';

interface ContextProps {
    isLoggedIn: boolean;
    customer?: ICustomer;

    signin: (email: string, password: string) => Promise<boolean>;
    signup: (name: string, email: string, password: string) => Promise<{ hasError: boolean; message?: string; }>;
    signout: () => void;
}


export const AuthContext = createContext({} as ContextProps );
