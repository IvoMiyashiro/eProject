import { useState } from 'react';
import { addressRegEx } from 'utils';
import { InputControlled } from '../InputControlled';
import { Div, Form, H1 } from './styles';

export const CheckoutAddressForm = () => {

  const INPUT_CONTROL_INIT_STATE = {
    value: '',
    hasError: false,
    errorMsj: ''
  };

  const [addressInput, setAddressInput] = useState(INPUT_CONTROL_INIT_STATE);
  const [secondAddressInput, setSecondAddressInput] = useState(INPUT_CONTROL_INIT_STATE);
  const [zipInput, setZipInput] = useState(INPUT_CONTROL_INIT_STATE);
  const [provinceSelect, setProvinceSelect] = useState(INPUT_CONTROL_INIT_STATE);
  const [localitySelect, setLocalitySelect] = useState(INPUT_CONTROL_INIT_STATE);
  const [phoneInput, setPhoneInput] = useState(INPUT_CONTROL_INIT_STATE);
  const [additionalInfo, setAdditionalInfo] = useState(INPUT_CONTROL_INIT_STATE);

  return (
    <Form>
      <H1>Where do we deliver your package?</H1>
      <Div>
        <InputControlled
          type="text"
          placeholder="Main Address"
          regEx={addressRegEx}
          state={addressInput}
          handleStateValue={setAddressInput}
        />
        <InputControlled
          type="text"
          placeholder="Second Address (Optional)"
          optional={true}
          state={secondAddressInput}
          handleStateValue={setSecondAddressInput}
        />
      </Div>
      <Div>
        <InputControlled
          type="text"
          placeholder="Zip Code"
          regEx={addressRegEx}
          state={zipInput}
          handleStateValue={setZipInput}
        />
        <InputControlled
          type="text"
          placeholder="Province"
          state={provinceSelect}
          handleStateValue={setProvinceSelect}
        />
      </Div>
      <Div>
        <InputControlled
          type="text"
          placeholder="Locality"
          regEx={addressRegEx}
          state={localitySelect}
          handleStateValue={setLocalitySelect}
        />
        <InputControlled
          type="text"
          placeholder="Phone Number"
          state={phoneInput}
          handleStateValue={setPhoneInput}
        />
      </Div>
      <Div>
        <InputControlled
          type="text"
          placeholder="Additional Info"
          optional={true}
          state={additionalInfo}
          handleStateValue={setAdditionalInfo}
        />
      </Div>
    </Form>
  );
};
