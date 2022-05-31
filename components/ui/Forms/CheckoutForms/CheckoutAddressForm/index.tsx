import { useContext } from 'react';

import { AuthContext, CheckoutContext } from 'context';
import { useAddress } from 'hooks';

import { Spinner } from 'components/ui';
import { AddressesList } from './AddressesList';
import { AddressForm } from './AddressForm';

import { H1 } from '../styles';

export const CheckoutAddressForm = () => {
  
  const { customer } = useContext(AuthContext);
  const { isLoading: isAddressLoading, addresses, setAddresses } = useAddress({ uid: customer!.id });

  return (
    <>
      <H1>Where do we deliver your package?</H1>
      {
        isAddressLoading
          ? <Spinner size="18px" />
          : (addresses.length !== 0)
            ? (
              <AddressesList
                addresses={addresses}
                handleAddressesList={setAddresses}
              />
            )
            : <AddressForm />
      }
    </>
  );
};

