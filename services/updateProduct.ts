import { IProduct } from 'interfaces';

export const updateProduct = async (product: IProduct) => {
  const resp = await fetch(`/api/products/${product.id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ product })
  });

  const { ok, message } = await resp.json();

  return message;
};
