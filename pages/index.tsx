import type { NextPage } from 'next';
import Head from 'next/head';

import { Button } from 'components/ui';

import styled from 'styled-components';
import { ArrowRightIcon, GithubIcon } from 'components/icons';
import { lightTheme } from 'styles';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>eProject | We give the best shopping experience posible</title>
      </Head>

      <Div>
        <Section>
          <H1>We</H1>
          <H1>Are</H1>
          <Logo>
            <H1>eProject</H1>
            <Underline />
          </Logo>
        </Section>
        <Section>
          <P>I developed this e-commerce with <Span>Next.js</Span> to give to users the <Span>best shoppings experience</Span> posible.</P>
          <ButtonWrapper>
            <Button
              width="175px"
              height="45px"
              bRadius="4px"
              bgColor={lightTheme.color_neutral_1}
              textColor={lightTheme.color_ui_text_main}
              isLink={true}
              href="https://github.com/IvoMiyashiro/eProject"
            >
              <Wrapper>
                <GithubIcon width="18px" height="18px" />
              See Repo
              </Wrapper>
            </Button>
            <Button
              width="175px"
              height="45px"
              bRadius="4px"
              bgColor={lightTheme.color_neutral_1}
              textColor={lightTheme.color_ui_text_main}
              isLink={true}
              href="/products"
            >
              <Wrapper>
              Go Shopping
                <ArrowRightIcon width="16px" height="16px" />
              </Wrapper>
            </Button>
          </ButtonWrapper>
        </Section>
      </Div>
    </>
  );
};

export default HomePage;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: -117px;
  gap: 4em;
  padding-top: 12em;
`;
  
const H1 = styled.h1`
  font-size: 6.5rem;
  line-height: 1em;
  text-align: center;
`;

const Logo = styled.div`
  position: relative;
`;
  
const Underline = styled.span`
  position: absolute;
  width: 100%;
  height: 20px;
  background-color: ${props => props.theme.color_tertiary_0};
  transform: rotate(-1.5deg);
  bottom: -14px;
  z-index: -1;
`;

const Section = styled.section`

`;

const P = styled.p`
  color: ${props => props.theme.color_ui_text_main};
  max-width: 600px;
  text-align: center;
`;

const Span = styled.span`
  color: ${props => props.theme.color_primary_0};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2em;
  margin-top: 2em;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;
