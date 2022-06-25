
interface Props {
    maxAmountPerCustomer: string;
    productCategory: string;
    productDescription: string;
    productLabelsList: string[];
    productMedia: (string | undefined)[];
    productPrice: string;
    productSEOSlug: string;
    productStatus: string;
    productStock: string;
    productTitle: string;
    productVendor: string;
}

interface Response {
  ok: boolean;
  message: string;
}

export const createProduct = async (data: Props) => {

  const {
    maxAmountPerCustomer,
    productCategory,
    productDescription,
    productLabelsList,
    productMedia,
    productPrice,
    productSEOSlug,
    productStatus,
    productStock,
    productTitle,
    productVendor } = data;

  const resp = await fetch('/api/products', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      max_quantity: maxAmountPerCustomer,
      category: productCategory,
      description: productDescription,
      labels: productLabelsList,
      image_urls: productMedia,
      price: productPrice,
      slug: productSEOSlug,
      status: productStatus.toLowerCase(),
      stock: productStock,
      title: productTitle,
      brand: productVendor 
    }),
  });

  const { ok, message }: Response = await resp.json();

  if (!ok) return { ok, message };

  return { ok };
};
