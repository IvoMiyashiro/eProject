import { createContext } from 'react';
import { ICustomer } from 'interfaces';

interface ContextProps {
    isLoading: boolean;
    isLoggedIn: boolean;
    customer?: ICustomer;

    signin: (email: string, password: string) => Promise<{error: boolean;message?: string;}>;
    signup: (name: string, email: string, password: string) => Promise<{error: boolean;message?: string;}>;
    signout: () => void;
    updateCustomerData: ({ name, email, phone_number }: { name: string; email: string; phone_number: string; }) => void;
}


export const AuthContext = createContext({} as ContextProps );
