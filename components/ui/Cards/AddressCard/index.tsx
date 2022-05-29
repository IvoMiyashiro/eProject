import { Dispatch, SetStateAction, useState } from 'react';

import { IAddress } from 'interfaces';
import { deleteAddress, updateAddress } from 'services';

import { DotsIcon, HomeIcon } from 'components/icons';
import { Button, TabMenu , ConfirmTab, Spinner, AddressForm, Modal } from 'components/ui';

import { lightTheme } from 'styles';
import { Div, Section, H2, P, ButtonWrapper, Ul, Li, Wrapper } from './styles';

interface Props {
  address_id: string;
  customer_id: string;
  address: string;
  zip: string;
  province: string;
  locality: string;
  additionalInfo: string;
  handleAddresses:  Dispatch<SetStateAction<IAddress[] | []>>;
}

export const AddressCard = ({ address_id, customer_id, address, zip, province, locality, additionalInfo, handleAddresses }: Props) => {

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isLoadig, setLoading] = useState(false);

  const handleDeleteAddress = async () => {
    setLoading(true);
    await deleteAddress({ address_id, customer_id });
    handleAddresses(prev => (
      prev.filter(address => {
        if (address.id !== address_id) return address;
      })
    ));
  };

  return (
    <Div>
      <Section>
        <HomeIcon width="24px" height="24px" />
      </Section>
      <Section>
        <H2>{ address }</H2>
        <P>Zip code: { zip }</P>
        <P>{ province } - { locality }</P>
      </Section>
      <Wrapper>
        <ButtonWrapper>
          <Button
            bgColor="transparent"
            textColor=""
            onClick={() => setMenuOpen(true)}
          >
            <DotsIcon width="20px" heigth="20px" />
          </Button>
          <TabMenu isOpen={isMenuOpen} handleOpen={setMenuOpen} right="0">
            <Ul>
              <Li onClick={() => {setEditModalOpen(true); setMenuOpen(false);}}>Edit</Li>
              <Li onClick={() => {setDeleteModalOpen(true); setMenuOpen(false);}}>Delete</Li>
              <Li onClick={() => setMenuOpen(false)}>Cancel</Li>
            </Ul>
          </TabMenu>
        </ButtonWrapper>
      </Wrapper>

      <ConfirmTab 
        isOpen={isDeleteModalOpen}
        title="Delete Address"
        text="Are you sure you want to delete this address?"
        mainButtonColor={lightTheme.color_ui_danger}
        mainButtonTextColor={lightTheme.color_ui_text_contrast}
        mainButtonChildren={isLoadig ? <Spinner size="14px" /> : 'Confirm'}
        handleOpen={setDeleteModalOpen}
        onConfirm={handleDeleteAddress}
        onCancel={() => setDeleteModalOpen(false)}
      />
      {
        isEditModalOpen
        &&
        <Modal handleCloseChildren={() => setEditModalOpen(false)}>
          <AddressForm
            type="update"
            address_id={address_id}
            address={address}
            zip={zip}
            province={province}
            locality={locality}
            additionalInfo={additionalInfo}
            onSubmit={updateAddress}
            handleAddressModalOpen={setEditModalOpen}
            handleAddresses={handleAddresses}
          />
        </Modal>
      }
    </Div>
  );
};
