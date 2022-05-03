import { useContext } from 'react';
import { AuthContext } from 'context';

interface Props {
  visaCardSelected: boolean;
}

export const MercadoPagoForm = ({ visaCardSelected }: Props) => {

  const { customer } = useContext(AuthContext);
  const testingCardNumber = visaCardSelected ? '4509 9535 6623 3704' : '5031 7557 3453 0604';

  return (
    <>
      <input hidden type="text" name="cardNumber" id="form-checkout__cardNumber" defaultValue={testingCardNumber}/>
      <input hidden type="text" name="expirationDate" id="form-checkout__cardExpirationMonth" defaultValue="11"/>
      <input hidden type="text" name="expirationDate" id="form-checkout__cardExpirationYear" defaultValue="25"/>
      <input hidden type="text" name="cardholderName" id="form-checkout__cardholderName" defaultValue={customer?.name}/>
      <input hidden type="email" name="cardholderEmail" id="form-checkout__cardholderEmail" defaultValue={customer?.email}/>
      <input hidden type="text" name="securityCode" id="form-checkout__securityCode" defaultValue="123" />
      <select hidden name="issuer" id="form-checkout__issuer"></select>
      <select hidden name="identificationType" id="form-checkout__identificationType" defaultValue="cuil"></select>
      <input hidden type="text" name="identificationNumber" id="form-checkout__identificationNumber" defaultValue="23011111114" />
      <select hidden name="installments" id="form-checkout__installments" defaultValue="1"></select>
    </>
  );
};
