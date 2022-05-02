import { FormEvent, useEffect, useState } from 'react';
import { useScript } from 'hooks';
import { postMercadoPagoPayment } from 'services';

interface Response {
  resultPayment: {
    id: number;
    status: string;
    status_detail: string; 
  } | undefined
}

export const useMercadoPago = (): Response => {
  const [resultPayment, setResultPayment] = useState(undefined);

  const { MercadoPago }: any = useScript(
    'https://sdk.mercadopago.com/js/v2',
    'MercadoPago'
  );

  useEffect(() => {
    if (MercadoPago) {
      const mp = new MercadoPago(process.env.MERCADO_PAGO_PUBLIC_KEY);
      const cardForm = mp.cardForm({
        amount: '1000',
        autoMount: true,
        form:  {
          id: 'form-checkout',
          cardholderName: {
            id: 'form-checkout__cardholderName',
            placeholder: ' ',
          },
          cardholderEmail: {
            id: 'form-checkout__cardholderEmail',
            placeholder: 'E-mail',
          },
          cardNumber: {
            id: 'form-checkout__cardNumber',
            placeholder: '',
          },
          cardExpirationMonth: {
            id: 'form-checkout__cardExpirationMonth',
            placeholder: '',
          },
          cardExpirationYear: {
            id: 'form-checkout__cardExpirationYear',
            placeholder: '',
          },
          securityCode: {
            id: 'form-checkout__securityCode',
            placeholder: '',
          },
          installments: {
            id: 'form-checkout__installments',
            placeholder: 'Installments',
          },
          identificationType: {
            id: 'form-checkout__identificationType',
          },
          identificationNumber: {
            id: 'form-checkout__identificationNumber',
            placeholder: '',
          },  
          issuer: {
            id: 'form-checkout__issuer',
            placeholder: 'Issuer',
          }
        },
        callbacks: {
          onFormMounted: (error: any) => {
            if (error)
              return console.warn(
                'Form Mounted handling error: ',
                error
              );
          },

          onSubmit: async (e: FormEvent) => {
            const result = await postMercadoPagoPayment(e, cardForm.getCardFormData());
            setResultPayment(result);
          },
          onFetching: (resource: any) => {
            console.log('Fetching resource: ', resource);
          },
        },
      });
    }
  }, [MercadoPago]);

  return { resultPayment };
};
