import { TableSkeleton } from '../TableSkeleton';
import { TableRow } from './TableRow';

import { Div, Table, TBody, Th, THead, Tr } from '../styles';

interface Props {
  reviews: any;
  isLoading: boolean;
}

export const CustomerReviewsTable = ({ reviews, isLoading }: Props) => {
  return (
    <Div>
      <Table>
        <THead>
          <Tr>
            <Th> Product </Th>
            <Th> Date </Th>
            <Th> Rating </Th>
            <Th> Actions </Th>
          </Tr>
        </THead>
        <TBody>
          {
            isLoading
              ? <TableSkeleton numOfTr={10} numOfTd={6} />
              : (
                reviews.map(({ 
                  id,
                  product_id,
                  title,
                  pros,
                  cons,
                  overall,
                  created_at,
                  rating,
                  image_urls
                }: any) => {
                  return (
                    <TableRow
                      key={id}
                      review_id={id}
                      product_id={product_id}
                      title={title}
                      created_at={created_at}
                      rating={rating}
                      image_url={image_urls}
                      pros={pros}
                      cons={cons}
                      overall={overall}
                    />
                  );
                })
              )
          }
        </TBody>
      </Table>
    </Div>
  );
};
