import { Dispatch, SetStateAction, useContext, useState } from 'react';

import { useForm, useLocalities } from 'hooks';
import { createAddress } from 'services';
import { AuthContext } from 'context';
import { provinces } from 'utils';
import { INPUT_CONTROL_INIT_STATE } from 'helpers/input_control_init_state';

import { InputControl, InputTextarea, Button, Spinner, InputSelect } from 'components/ui';

import { lightTheme } from 'styles';
import { Form, H2, Div, ButtonWrapper } from './styles';

interface Props {
  handleAddNewAddressModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const CreateNewAddressForm = ({ handleAddNewAddressModalOpen }: Props) => {

  const { customer } = useContext(AuthContext);

  const [addressInputControl, setAddressInputControl] = useState(INPUT_CONTROL_INIT_STATE);
  const [zipInputControl, setZipInputControl] = useState(INPUT_CONTROL_INIT_STATE);
  const [provinceInputControl, setProvinceInputControl] = useState(INPUT_CONTROL_INIT_STATE);
  const [localityInputControl, setLocalityInputControl] = useState(INPUT_CONTROL_INIT_STATE);
  const [additionalInfoInputControl, setAdditionalInfoInputControl] = useState(INPUT_CONTROL_INIT_STATE);
  const { localities } = useLocalities(provinceInputControl.value);
  const { isLoading, isValidForm, handleSubmit } = useForm({
    states: [{
      state: addressInputControl,
      handleState: setAddressInputControl
    }, {
      state: zipInputControl,
      handleState: setZipInputControl
    }, {
      state: provinceInputControl,
      handleState: setProvinceInputControl
    }, {
      state: localityInputControl,
      handleState: setLocalityInputControl
    }],
    callbacks: {
      async startCreatingAddress({ setValidForm, setLoading }: any) {
        const { ok } = await createAddress({
          customer_id: customer!.id,
          address: addressInputControl.value,
          zip: zipInputControl.value,
          province: provinceInputControl.value,
          locality: localityInputControl.value,
          additional_info: additionalInfoInputControl.value
        });

        if (!ok) return setLoading(false);
        handleAddNewAddressModalOpen(false);
      }
    }
  });

  return (
    <Form onSubmit={handleSubmit}>
      <H2>Add new address</H2>
      <Div>
        <InputControl 
          type="text"
          placeholder="Address"
          state={addressInputControl}
          handleStateValue={setAddressInputControl}
        />
        <InputControl 
          type="text"
          placeholder="Zip"
          state={zipInputControl}
          handleStateValue={setZipInputControl}
        />
        <InputSelect
          placeholder="Province"
          state={provinceInputControl}
          options={provinces.provincias.slice(0).reverse().map(province => province.iso_nombre).sort()}
          handleStateValue={setProvinceInputControl}
        />
        <InputSelect
          placeholder="Locality"
          options={localities.sort()}
          state={localityInputControl}
          handleStateValue={setLocalityInputControl}
        />
        <InputTextarea
          placeholder="Additional Info (Optional)"
          state={additionalInfoInputControl}
          handleStateValue={setAdditionalInfoInputControl}
        />
      </Div>
      <ButtonWrapper>
        <Button
          textColor={lightTheme.color_ui_text_contrast}
          bgColor={lightTheme.color_primary_0}
          bRadius="4px"
          type="submit"
          disabled={isValidForm ? false : true}
        >
          {
            isLoading
              ? <Spinner size="14px" />
              : 'Confirm'
          }
        </Button>
      </ButtonWrapper>
    </Form>
  );
};
