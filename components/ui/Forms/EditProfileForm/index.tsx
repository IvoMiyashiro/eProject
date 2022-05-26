import { useContext, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { useForm, useImage } from 'hooks';
import { AuthContext } from 'context';
import { fileUpload, updateCustomerData as updateCustomerDBData } from 'services';
import { INPUT_CONTROL_INIT_STATE } from 'helpers/input_control_init_state';

import { PhotoIcon } from 'components/icons';
import { InputControl, Button, Spinner, Modal, ConfirmTab } from 'components/ui';

import { lightTheme } from 'styles';
import { ButtonWrapper, Div, Form, H2, ImageWrapper, P, Section, Wrapper } from './styles';

export const EditProfileForm = () => {

  const { customer, signout } = useContext(AuthContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const [nameInputControl, setNameInputControl] = useState(INPUT_CONTROL_INIT_STATE);
  const [emailInputControl, setEmailInputControl] = useState(INPUT_CONTROL_INIT_STATE);
  const [phoneInputControl, setPhoneInputControl] = useState(INPUT_CONTROL_INIT_STATE);
  const [isModalOpen, setModalOpen] = useState(false);
  const { image, handleInputClick, handleImageChange } = useImage({ inputRef });
  const { isLoading, isValidForm, handleSubmit } = useForm({
    states: [{
      state: nameInputControl,
      handleState: setNameInputControl
    },{
      state: emailInputControl,
      handleState: setEmailInputControl
    }],
    callbacks: {
      async updateData() {

        let newProfileImageUrl = customer?.profile_image;
        if (image.file !== undefined) {
          newProfileImageUrl = await fileUpload(image.file);
        }

        await updateCustomerDBData({
          customer_id: customer!.id,
          name: nameInputControl.value,
          email: emailInputControl.value,
          phone_number: phoneInputControl.value,
          profile_image: !!newProfileImageUrl ? newProfileImageUrl : ''
        });

        signout();
        router.push('/auth/signin');
      },
    }
  });

  useEffect(() => {
    if (!!customer) {
      setNameInputControl(prev => {
        return {...prev, value: customer!.name};
      });
      setEmailInputControl(prev => {
        return {...prev, value: customer!.email};
      });
      setPhoneInputControl(prev => {
        return {...prev, value: customer.phone_number ? customer.phone_number : ''};
      });
    }
  }, [customer]);

  return (
    <Form onSubmit={handleSubmit}>
      <H2>Edit profile</H2>
      <P>* After submiting the edit profile form you have to restart your session.</P>
      <Div>
        <ImageWrapper onClick={handleInputClick}>
          <Image
            src={!!image.fileUrl ? image.fileUrl : customer!.profile_image }
            alt={customer?.name}
            layout="fill"
            objectFit="cover"
          />
          <Wrapper>
            <Section>
              <PhotoIcon width="20px" height="20px" color="white" />
            </Section>
          </Wrapper>
          <input hidden type="file" ref={inputRef} onChange={handleImageChange} />
        </ImageWrapper>
        <InputControl
          type="text"
          placeholder="Name"
          state={nameInputControl}
          handleStateValue={setNameInputControl}
        />
        <InputControl
          type="email"
          placeholder="Email"
          state={emailInputControl}
          handleStateValue={setEmailInputControl}
        />
        <InputControl
          type="tel"
          placeholder="Phone (optional)"
          state={phoneInputControl}
          handleStateValue={setPhoneInputControl}
        />
      </Div>
      <ButtonWrapper>
        <Button
          textColor={lightTheme.color_ui_text_contrast}
          bgColor={lightTheme.color_primary_0}
          bRadius="4px"
          onClick={() => setModalOpen(true)}
          disabled={isValidForm ? false : true}
        >
          {
            isLoading
              ? <Spinner size="14px" />
              : 'Confirm'
          }
        </Button>
      </ButtonWrapper>
      {
        isModalOpen
        &&
        <Modal handleCloseChildren={() => setModalOpen(false)}>
          <ConfirmTab 
            title="Edit profile"
            text="Are you sure you want to edit your profile and logout?"
            mainButtonChildren={ isLoading ? <Spinner size="14px" /> : 'Logout'}
            mainButtonColor={lightTheme.color_primary_0}
            mainButtonTextColor={lightTheme.color_ui_text_contrast}
            onConfirm={handleSubmit}
            onCancel={() => setModalOpen(false)}
          />
        </Modal>
      }
    </Form>
  );
};
