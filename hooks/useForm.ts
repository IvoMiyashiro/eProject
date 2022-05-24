import { SetStateAction, useState, Dispatch, FormEvent } from 'react';

interface Props {
  states: {
    state: {
      value: string;
      hasError: boolean;
      errorMsj: string;
    },
    handleState: Dispatch<SetStateAction<{
      value: string;
      hasError: boolean;
      errorMsj: string;}>>
  }[],
  callbacks: any
}

export const useForm = ({ states, callbacks }: Props) => {
  const [isLoading, setLoading] = useState(false);
  const [isValidForm, setValidForm] = useState(true);

  const callbacksFunctions = () => {
    Object.values(callbacks).map(value => {
      if (typeof value === 'function') {
        value();
      }
    });
  };
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let valid = true;
    setLoading(true);

    states.map(({ state, handleState }) => {
      const { value } = state;
      if (value.length === 0) {
        handleState({
          ...state,
          hasError: true,
          errorMsj: '* This field must be filled.'
        });
        setValidForm(false);
        valid = false;
      }
    });

    if (!valid) setLoading(false);
    callbacksFunctions();
  };

  return {
    isLoading,
    isValidForm,
    handleSubmit
  };
};
