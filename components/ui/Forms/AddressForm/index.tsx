import { Dispatch, SetStateAction, useContext, useState } from 'react';

import { IAddress } from 'interfaces';
import { AuthContext } from 'context';
import { useForm, useLocalities } from 'hooks';
import { provinces } from 'utils';
import { INPUT_CONTROL_INIT_STATE } from 'helpers/input_control_init_state';

import { InputControl, InputTextarea, Button, Spinner, InputSelect } from 'components/ui';

import { lightTheme } from 'styles';
import { Form, H2, Div, ButtonWrapper } from './styles';

interface Props {
  type: 'create' | 'update';
  address_id?: string;
  address?: string;
  zip?: string;
  province?: string;
  locality?: string;
  additionalInfo?: string;
  onSubmit: ({ address_id, customer_id, address, zip, province, locality, additional_info, }: any) => Promise<{
    ok: false;
    message: string;
    address?: undefined;
} | {
    ok: true;
    address: IAddress;
    message?: undefined;
}>
  handleAddresses: Dispatch<SetStateAction<IAddress[] | []>>
  handleAddressModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const AddressForm = ({
  type,
  address_id,
  address,
  zip,
  province,
  locality,
  additionalInfo,
  onSubmit,
  handleAddresses,
  handleAddressModalOpen
}: Props) => {

  const { customer } = useContext(AuthContext);

  const [addressInputControl, setAddressInputControl] = useState(!!address ? { ...INPUT_CONTROL_INIT_STATE, value: address } : INPUT_CONTROL_INIT_STATE);
  const [zipInputControl, setZipInputControl] = useState(!!zip ? { ...INPUT_CONTROL_INIT_STATE, value: zip } : INPUT_CONTROL_INIT_STATE);
  const [provinceInputControl, setProvinceInputControl] = useState(!!province ? { ...INPUT_CONTROL_INIT_STATE, value: province } : INPUT_CONTROL_INIT_STATE);
  const [localityInputControl, setLocalityInputControl] = useState(!!locality ? { ...INPUT_CONTROL_INIT_STATE, value: locality } : INPUT_CONTROL_INIT_STATE);
  const [additionalInfoInputControl, setAdditionalInfoInputControl] = useState(!!additionalInfo ? { ...INPUT_CONTROL_INIT_STATE, value: additionalInfo } : INPUT_CONTROL_INIT_STATE);
  const { localities } = useLocalities(!!province ? province : provinceInputControl.value);
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
      async startSubmiting({ setValidForm, setLoading }: any) {
        const { ok, address: newAddress } = await onSubmit({
          address_id,
          customer_id: customer!.id,
          address: addressInputControl.value,
          zip: zipInputControl.value,
          province: provinceInputControl.value,
          locality: localityInputControl.value,
          additional_info: additionalInfoInputControl.value
        });

        if (!ok) return setLoading(false);

        if (type === 'create') {
          handleAddresses(prev => ([newAddress, ...prev]));
        } else {
          handleAddresses(prev => (
            prev.map(address => {
              if (address.id === address_id) return newAddress;
              return address;
            })
          ));
        }
        handleAddressModalOpen(false);
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
