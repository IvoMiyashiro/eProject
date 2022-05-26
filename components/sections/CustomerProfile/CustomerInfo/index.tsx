import { Dispatch, SetStateAction, useContext } from 'react';
import Image from 'next/image';

import { AuthContext } from 'context';
import { EditIcon, EmailIcon, PhoneIcon } from 'components/icons';
import { Skeleton } from './Skeleton';

import { Section, ImageWrapper, Ul, Li, P, H2, Button } from './styles';
import { lightTheme } from 'styles';

interface Props {
  handleEditProfileModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const CustomerInfo = ({ handleEditProfileModalOpen }: Props) => {

  const { customer } = useContext(AuthContext);
  const USER_PROFILE_IMAGE = !!customer?.profile_image ? customer?.profile_image : '/images/profile_image.png';

  return (
    <>
      <Section>
        <ImageWrapper>
          <Image 
            src={USER_PROFILE_IMAGE}
            alt={customer?.name}
            layout="fill"
            objectFit="cover"
          />
        </ImageWrapper>
        {
          customer === undefined
            ? <Skeleton />
            : (
              <Ul>
                <Li>
                  <H2>{ customer?.name }</H2>
                </Li>
                <Li>
                  <EmailIcon width="22px" height="22px" />
                  <P>{ customer?.email }</P>
                </Li>
                { 
                  customer.phone_number 
                  && 
                  <Li>
                    <PhoneIcon width="22px" height="22px" />
                    <P>{ customer?.phone_number }</P>
                  </Li>
                }
              </Ul>
            )
        }
      </Section>
      <Button onClick={() => handleEditProfileModalOpen(true)}>
        <EditIcon width="25px" height="25px" color={lightTheme.color_primary_0 } />
      </Button>
    </>
  );
};
