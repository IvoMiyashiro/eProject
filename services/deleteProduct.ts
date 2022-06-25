interface Props {
  product_id: string;
}
interface Response { ok: boolean; message: string;}

export const deleteProduct = async ({ product_id }: Props) => {
  
  const resp = await fetch(`/api/products/${product_id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ product_id })
  });
  const { ok, message }: Response = await resp.json();

  if (!ok) return { message };
};
