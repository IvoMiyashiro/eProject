import { useState } from 'react';
import styled from 'styled-components';

import { MapLinks, Modal, SideInfoCard, EditProfile } from 'components/ui';
import { CustomerInfo } from './CustomerInfo';
import { CustomerAddresses } from './CustomerAddresses';

import { Wrapper } from '../Catalog/styles';

export const CustomerProfile = () => {

  const links = [{
    name: 'Home',
    link: '/'
  },{
    name: 'My profile',
    link: '/profile'
  }];
  
  const [isEditProfileModalOpen, setEditProfileModalOpen] = useState(false);
  const [isAddNewAddressModalOpen, setAddNewAddressModalOpen] = useState(false);

  return (
    <>
      <MapLinks links={links}/>
      <Div>
        <Wrapper>
          <SideInfoCard
            title="Info."
            content="In this section you can see all the information about your profile, like address, email, name, etc."
          />
        </Wrapper>
        <CustomerInfoWrapper>
          <CustomerInfo handleEditProfileModalOpen={setEditProfileModalOpen}/>
          <CustomerAddresses />
        </CustomerInfoWrapper>
      </Div>
      {
        isEditProfileModalOpen
        &&
        <Modal handleCloseChildren={() => setEditProfileModalOpen(false)}>
          <EditProfile handleCloseChildren={() => setEditProfileModalOpen(false)} />
        </Modal>
      }
      {
        isAddNewAddressModalOpen
        &&
        <Modal handleCloseChildren={() => setAddNewAddressModalOpen(false)}>
          
        </Modal>
      }
    </>
  );
};

const Div = styled.div`
  display: grid;
  grid-template-columns: 275px 1fr;
  gap: 2em;
`;

const CustomerInfoWrapper = styled.div`
  border-radius: 6px;
  box-shadow:
  0px 0px 1.6px rgba(0, 0, 0, 0.011),
  0px 0px 3.8px rgba(0, 0, 0, 0.016),
  0px 0px 7.1px rgba(0, 0, 0, 0.02),
  0px 0px 12.7px rgba(0, 0, 0, 0.024),
  0px 0px 23.8px rgba(0, 0, 0, 0.029),
  0px 0px 57px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding: 2em;
  position: relative;
`;
