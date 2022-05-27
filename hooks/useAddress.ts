import { IAddress } from 'interfaces';
import { useEffect, useState } from 'react';

interface Props { uid: string | undefined; }
interface Return { isLoading: boolean; addresses: IAddress[]; }

export const useAddress = ({ uid }: Props): Return => {
  
  const [isLoading, setLoading] = useState(true);
  const [addresses, setAddresses] = useState([]);

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
    addresses
  };
};
