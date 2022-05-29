import { IAddress } from 'interfaces';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface Props { uid: string | undefined; }
interface Return { isLoading: boolean; addresses: IAddress[]; setAddresses:  Dispatch<SetStateAction<IAddress[] | []>>}

export const useAddress = ({ uid }: Props): Return => {
  
  const [isLoading, setLoading] = useState(true);
  const [addresses, setAddresses] = useState<IAddress[] | []>([]);

  useEffect(() => {
    if (uid === undefined) return;
    fetch(`/api/customer/${uid}/address`)
      .then(resp => resp.json())
      .then(({address}) => {
        setAddresses(address);
        setLoading(false);
      });
  }, [uid]);

  return {
    isLoading,
    addresses,
    setAddresses
  };
};
