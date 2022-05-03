export const mercadoPagoPayment = async (data: any, productsIDs: string[] = []) => {
  
  const {
    payment_method_id,
    issuer_id,
    cardholderEmail: email,
    amount,
    token,
    installments,
    identificationNumber,
    identificationType,
  } = data;
  
  try {
    const resp = await fetch('/api/process_payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token,
        issuer_id,
        payment_method_id,
        transaction_amount: Number(amount),
        installments: Number(installments),
        description: JSON.stringify(productsIDs),
        payer: {
          email,
          identification: {
            type: identificationType,
            number: identificationNumber,
          },
        },
      }),
    });

    const result = await resp.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};
