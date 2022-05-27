import { useContext, useState } from 'react';

import { AuthContext } from 'context';
import { useAddress } from 'hooks';

import { ArrowRightIcon } from 'components/icons';
import { AddressCard, Button, CreateNewAddressForm, Modal } from 'components/ui';

import { lightTheme } from 'styles';
import { H3, Wrapper,  Div, P, AddressList } from './styles';

export const CustomerAddresses = () => {

  const { customer } = useContext(AuthContext);
  const { addresses } = useAddress({ uid: customer?.id });
  const [isAddNewAddressModalOpen, setAddNewAddressModalOpen] = useState(false);

  return (
    <div>
      <H3>Addresses</H3>
      <Div>
        <AddressList>
          {
            (addresses?.length !== 0)
              &&
              addresses?.map(({ id, address, zip, province, locality }) => {
                return (
                  <AddressCard 
                    key={id}
                    address={address}
                    zip={zip}
                    province={province}
                    locality={locality}
                  />
                );
              })
          }
        </AddressList>
        <Button
          bgColor={lightTheme.color_neutral_1}
          bRadius="4px"
          textColor={lightTheme.color_ui_text_main}
          onClick={() => setAddNewAddressModalOpen(true)}
        >
          <Wrapper>
            <P>Add new address</P>
            <ArrowRightIcon width="20px" height="20px" />
          </Wrapper>
        </Button>
      </Div>
      {
        isAddNewAddressModalOpen
        &&
        <Modal handleCloseChildren={() => setAddNewAddressModalOpen(false)}>
          <CreateNewAddressForm handleAddNewAddressModalOpen={setAddNewAddressModalOpen}/>
        </Modal>
      }
    </div>
  );
};
