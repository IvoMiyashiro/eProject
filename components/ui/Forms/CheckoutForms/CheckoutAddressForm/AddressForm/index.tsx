import { useContext, useState } from 'react';
import { useRouter } from 'next/router';

import { createAddress } from 'services';
import { useLocalities, useForm } from 'hooks';
import { addressRegEx, provinces } from 'utils';
import { INPUT_CONTROL_INIT_STATE } from 'helpers/input_control_init_state';

import { AuthContext, CheckoutContext } from 'context';
import { InputControl, InputSelect, InputTextarea } from 'components/ui/Inputs';
import { ButtonSection } from '../../ButtonSection';

import { Form } from '../../styles';
import { Div, Checkbox, Label, Span } from './styles';

export const AddressForm = () => {
  
  const router = useRouter();
  const { customer } = useContext(AuthContext);
  const { setAddressInfo } = useContext(CheckoutContext);
  const [saveAddress, setSaveAddress] = useState(false);
  const [addressInput, setAddressInput] = useState(INPUT_CONTROL_INIT_STATE);
  const [zipInput, setZipInput] = useState(INPUT_CONTROL_INIT_STATE);
  const [provinceSelect, setProvinceSelect] = useState(INPUT_CONTROL_INIT_STATE);
  const [localitySelect, setLocalitySelect] = useState(INPUT_CONTROL_INIT_STATE);
  const [additionalInfo, setAdditionalInfo] = useState(INPUT_CONTROL_INIT_STATE);
  const { localities } = useLocalities(provinceSelect.value);
  const { isLoading, isValidForm, handleSubmit } = useForm({
    states: [{
      state: addressInput,
      handleState: setAddressInput
    }, {
      state: zipInput,
      handleState: setZipInput
    }, {
      state: provinceSelect,
      handleState: setProvinceSelect
    }, {
      state: localitySelect,
      handleState: setLocalitySelect
    }], 
    callbacks: {
      async addNewAddress({ setValidForm, setLoading }: any) {
        setLoading(true);
        setAddressInfo({
          address: addressInput.value,
          zip: zipInput.value,
          province: provinceSelect.value,
          locality: localitySelect.value,
          additional_info: additionalInfo.value,
        });

        if (saveAddress) {
          await createAddress({
            customer_id: customer!.id,
            address: addressInput.value,
            zip: zipInput.value,
            province: provinceSelect.value,
            locality: localitySelect.value,
            additional_info: additionalInfo.value,
          });
        }

        router.push('/checkout/payments');
      }
    }
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Div>
        <InputControl
          type="text"
          placeholder="Address"
          regEx={addressRegEx}
          state={addressInput}
          handleStateValue={setAddressInput}
        />
        <InputControl
          type="text"
          placeholder="Zip Code"
          regEx={addressRegEx}
          state={zipInput}
          handleStateValue={setZipInput}
        />
      </Div>
      <Div>
        <InputSelect 
          placeholder="Province"
          state={provinceSelect}
          options={provinces.provincias.slice(0).reverse().map(province => province.iso_nombre).sort()}
          handleStateValue={setProvinceSelect}
        />
        <InputSelect
          placeholder="Locality"
          options={localities.sort()}
          state={localitySelect}
          handleStateValue={setLocalitySelect}
        />
      </Div>
      <Div>
        <InputTextarea
          placeholder="Additional Info (Optional)"
          optional={true}
          state={additionalInfo}
          handleStateValue={setAdditionalInfo}
        />
      </Div>
      <Div>
        <Label>
          <Checkbox 
            type="checkbox"
            onChange={(e: any) => setSaveAddress(e.target.checked)}
          />
          <Span>Save this address for my next purchase.</Span>
        </Label>
      </Div>
      <ButtonSection
        isLoading={isLoading}
        disabled={!isValidForm}
      />
    </Form>
  );
};
