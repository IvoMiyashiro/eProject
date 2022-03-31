import { BrandList, IProduct } from 'interfaces';
import { useEffect, useState } from 'react';
import { uniqueArr } from 'utils';
import { Aside, Div, H3, Section, Input, Label } from './styles';

interface Props {
  productList: IProduct[];
}

export const AsideFilter = ({ productList }: Props) => {

  const [brandsList, setBrandsList] = useState<BrandList[]>();

  useEffect(() => {
    const brands = productList.map(product => {
      return product.brand;
    });

    setBrandsList(uniqueArr(brands));
  }, [productList]);

  return (
    <Aside>
      <Div>
        <H3>Stock</H3>
        <Section>
          <Label>           
            <Input 
              type="checkbox"
            />
            Exclude out of stock items.
          </Label>
        </Section>
      </Div>
      <Div>
        <H3>Manufacturer</H3>
        {
          brandsList?.map((brand, i) => {
            return (
              <Section key={i}>
                <Label>           
                  <Input 
                    type="checkbox"
                  />
                  { brand }
                </Label>
              </Section>
            );
          })
        }

      </Div>
    </Aside>
  );
};

