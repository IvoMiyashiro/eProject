import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useLocalities } from 'hooks';
import { addressRegEx, provinces } from 'utils';

import { InputControl, Button } from 'components';
import { InputSelect } from '../InputSelect';
import { InputPhoneNumber } from '../InputNumber';
import { InputTextarea } from '../InputTextarea';

import { lightTheme } from 'styles';
import { Div, Form, H1 } from './styles';
import { ButtonWrapper, P } from '../CheckoutShippingForm/styles';

export const CheckoutAddressForm = () => {

  const INPUT_CONTROL_INIT_STATE = {
    value: '',
    hasError: false,
    errorMsj: ''
  };
  
  const [isValidForm, setValidForm] = useState(false);
  const [addressInput, setAddressInput] = useState(INPUT_CONTROL_INIT_STATE);
  const [zipInput, setZipInput] = useState(INPUT_CONTROL_INIT_STATE);
  const [provinceSelect, setProvinceSelect] = useState(INPUT_CONTROL_INIT_STATE);
  const [localitySelect, setLocalitySelect] = useState(INPUT_CONTROL_INIT_STATE);
  const [phoneInput, setPhoneInput] = useState(INPUT_CONTROL_INIT_STATE);
  const [altPhoneInput, setAltPhoneInput] = useState(INPUT_CONTROL_INIT_STATE);
  const [additionalInfo, setAdditionalInfo] = useState(INPUT_CONTROL_INIT_STATE);
  const { localities } = useLocalities(provinceSelect.value);
  const router = useRouter();

  useEffect(() => {
    if (!addressInput.hasError && !zipInput.hasError && !provinceSelect.hasError && !localitySelect.hasError && !phoneInput.hasError && !additionalInfo.hasError) {
      setValidForm(true);
    }
  }, [addressInput.hasError, zipInput.hasError ,provinceSelect.hasError ,localitySelect.hasError ,phoneInput.hasError ,additionalInfo.hasError]);

  const handleInputSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let hasError = false;

    if (addressInput.value.length === 0) {
      setAddressInput({
        ...addressInput,
        hasError: true,
        errorMsj: '* Address must be filled'
      });
      hasError = true;
    }

    if (zipInput.value.length === 0) {
      setZipInput({
        ...zipInput,
        hasError: true,
        errorMsj: '* Zip must be filled'
      });
      hasError = true;
    }

    if (provinceSelect.value.length === 0) {
      setProvinceSelect({
        ...provinceSelect,
        hasError: true,
        errorMsj: '* Province must be filled'
      });
      hasError = true;
    }

    if (localitySelect.value.length === 0) {
      setLocalitySelect({
        ...localitySelect,
        hasError: true,
        errorMsj: '* Locality must be filled'
      });
      hasError = true;
    }

    if (phoneInput.value.length === 0) {
      setPhoneInput({
        ...phoneInput,
        hasError: true,
        errorMsj: '* Phone must be filled'
      });
      hasError = true;
    }

    if (hasError) return setValidForm(false);
    router.push('/checkout/payments');
  };

  return (
    <Form onSubmit={handleInputSubmit}>
      <H1>Where do we deliver your package?</H1>
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
        <InputPhoneNumber
          placeholder="Phone Number"
          type="tel"
          state={phoneInput}
          handleStateValue={setPhoneInput}
        />
        <InputPhoneNumber
          placeholder="Phone Number 2 (Optional)"
          type="tel"
          optional={true}
          state={altPhoneInput}
          handleStateValue={setAltPhoneInput}
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
      <ButtonWrapper>
        <Button
          textColor={lightTheme.color_ui_text_contrast}
          bgColor={lightTheme.color_primary_0}
          bRadius='4px'
          disabled={!isValidForm}
          type="submit"
        >
          <P>Confirm</P>
        </Button>
      </ButtonWrapper>
    </Form>
  );
};
