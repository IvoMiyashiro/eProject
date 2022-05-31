import { Dispatch, SetStateAction, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { CheckoutContext } from 'context';
import { IAddress } from 'interfaces';
import { createAddress } from 'services';

import { ArrowRightIcon } from 'components/icons';
import { Button, Modal, AddressForm } from 'components/ui';
import { InputRadioContainer } from '../InputRadioContainer';

import { lightTheme } from 'styles';
import { Div, P, Section, Wrapper } from './styles';

interface Props {
  addresses: IAddress[];
  handleAddressesList: Dispatch<SetStateAction<IAddress[] | []>>;
}

export const AddressesList = ({ addresses, handleAddressesList }: Props) => {

  const { address, setAddressInfo } = useContext(CheckoutContext);
  const [isAddressFormModalOpen, setAddressFormModalOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <Div>
        {
          addresses?.map(address => {
            return (
              <InputRadioContainer
                key={address.id}
                address={address}
                handleDeliveryAddress={setAddressInfo}
              />
            );
          })
        }
      </Div>
      <Section>
        <Button
          bgColor={lightTheme.color_neutral_1}
          bRadius="4px"
          textColor={lightTheme.color_ui_text_main}
          onClick={() => setAddressFormModalOpen(true)}
        >
          <Wrapper>
            <P> Add new address </P>
            <ArrowRightIcon width="20px" height="20px" />
          </Wrapper>
        </Button>
      </Section>

      <ButtonWrapper>
        <Button
          textColor={lightTheme.color_ui_text_contrast}
          bgColor={lightTheme.color_primary_0}
          bRadius='4px'
          disabled={!!!address}
          onClick={() => router.push('/checkout/payments')}
        >
          Confirm
        </Button>
      </ButtonWrapper>

      {
        isAddressFormModalOpen
        &&
        <Modal handleCloseChildren={() => setAddressFormModalOpen(false)}>
          <AddressForm
            type="create"
            onSubmit={createAddress}
            handleAddressModalOpen={setAddressFormModalOpen}
            handleAddresses={handleAddressesList}
          />
        </Modal>
      }
    </>
  );
};

const ButtonWrapper = styled.div`
  margin-left: auto;
  width: 150px;
  height: 40px;
`;
