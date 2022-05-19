import type { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { getSession } from 'next-auth/react';

import { Navbar } from 'components/ui';
import { PurchaseIcon } from 'components/icons';

import { A, Div, H1, LinkWrapper, P, Section, Span, Text, TitleWrapper, Underline, Wrapper } from './styles';

interface Props {order: string;}

const CheckoutSuccess: NextPage<Props> = ({ order }) => {
  return (
    <>
      <Navbar 
        justLogo={true}
      />
      <Div>
        <Wrapper>
          <PurchaseIcon 
            width="450"
            height="450"
          />
        </Wrapper>
        <Section>
          <TitleWrapper>
            <H1>Thank you for the purchase!</H1>
            <Underline />
          </TitleWrapper>
          <Text>
            <P>
              Congratulations! Payment has been successfully completed and
              our team is now preparing your package.
              Your order number is <Span>#{ order.toString() }</Span>.
              
            </P>
          </Text>
          <Text>
            <P>
              If you chose the <Span> delivery </Span> option you will recive your
              product/s between <Span> 3 to 5 business days </Span>. On the other hand,
              if you went for the <Span> pick up </Span> option you can come to our store to
              recive your package <Span> whenever you want </Span>. 
            </P>
          </Text>
          <Text>
            <P>
              For more info check our&nbsp;
              <Link href={'/terms-and-conditions'} passHref> 
                <A>Terms and Conditions</A>
              </Link>
              .
            </P>
          </Text>
          <LinkWrapper>
            <Link href="/" passHref>
              <A> Go back to home page </A>
            </Link>
          </LinkWrapper>
        </Section>
      </Div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
    
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin?p=/checkout',
        permanent: false
      }
    };
  }

  return {
    props: { 
      order: query.order
    }
  };
};

export default CheckoutSuccess;
