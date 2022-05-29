import { useContext, useState } from 'react';

import { AuthContext } from 'context';
import { useAddress } from 'hooks';

import { createAddress } from 'services';
import { ArrowRightIcon } from 'components/icons';
import { AddressCard, Button, AddressForm, Modal } from 'components/ui';

import { lightTheme } from 'styles';
import { H3, Wrapper,  Div, P, AddressList } from './styles';

export const CustomerAddresses = () => {

  const { customer } = useContext(AuthContext);
  const { addresses, setAddresses } = useAddress({ uid: customer?.id });
  const [isAddressFormModalOpen, setAddressFormModalOpen] = useState(false);

  return (
    <div>
      <H3>Addresses</H3>
      <Div>
        {
          (addresses?.length !== 0)
          &&
          <AddressList >
            {
              addresses?.map(({ id, address, zip, province, locality, additional_info }) => {
                return (
                  <AddressCard
                    key={id}
                    address_id={id}
                    customer_id={customer!.id}
                    address={address}
                    zip={zip}
                    province={province}
                    locality={locality}
                    additionalInfo={additional_info}
                    handleAddresses={setAddresses}
                  />
                );
              })
            }
          </AddressList>
        }
        <Button
          bgColor={lightTheme.color_neutral_1}
          bRadius="4px"
          textColor={lightTheme.color_ui_text_main}
          onClick={() => setAddressFormModalOpen(true)}
        >
          <Wrapper>
            <P>Add new address</P>
            <ArrowRightIcon width="20px" height="20px" />
          </Wrapper>
        </Button>
      </Div>
      {
        isAddressFormModalOpen
        &&
        <Modal handleCloseChildren={() => setAddressFormModalOpen(false)}>
          <AddressForm
            type="create"
            onSubmit={createAddress}
            handleAddressModalOpen={setAddressFormModalOpen}
            handleAddresses={setAddresses}
          />
        </Modal>
      }
    </div>
  );
};
