import { FormEvent, useContext, useEffect, useState } from 'react';
import { useScript } from 'hooks';
import { mercadoPagoPayment } from 'services';
import { CartContext } from 'context';
import { useRouter } from 'next/router';

interface Response {
  resultPayment: {
    id: number;
    status: string;
    status_detail: string; 
  } | undefined;
  hasError: boolean;
}

export const useMercadoPago = (setLoading: (value: boolean) => void): Response => {

  const [resultPayment, setResultPayment] = useState(undefined);
  const [hasError, setError] = useState(false);
  const [productsIDs, setProductsIDs] = useState<string[] | []>([]);
  const { cart, orderTotalPrice } = useContext(CartContext);
  const { MercadoPago }: any = useScript(
    'https://sdk.mercadopago.com/js/v2',
    'MercadoPago'
  );
  const router = useRouter();

  useEffect(() => {
    cart.map(product => {
      setProductsIDs(prev => ([...prev, product.id]));
    });
  }, [cart]);

  useEffect(() => {
    if (MercadoPago) {
      const mp = new MercadoPago(process.env.MERCADO_PAGO_PUBLIC_KEY);
      const cardForm = mp.cardForm({
        amount: orderTotalPrice.toString(),
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
            if (error) {
              setLoading(false);
              return console.warn(
                'Form Mounted handling error: ',
                error
              );
            }
          },

          onSubmit: async (e: FormEvent) => {
            e.preventDefault();
            const { status } = await mercadoPagoPayment(cardForm.getCardFormData(), productsIDs);
            setResultPayment(status);
          },
          onFetching: (resource: any) => {
            if (resource === 'cardToken') setLoading(true);
          },
        },
      });
    }
  }, [MercadoPago, productsIDs, orderTotalPrice, setLoading]);

  useEffect(() => {
    if (resultPayment === 'rejected') {
      setLoading(false);
      return setError(true);
    };

    if (resultPayment === 'approved') router.push('/checkout/success');
  }, [resultPayment, router, setLoading]);

  return { 
    resultPayment,
    hasError
  };
};
