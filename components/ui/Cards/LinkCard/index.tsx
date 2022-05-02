import { useState } from 'react';
import { useRouter } from 'next/router';

import { ArrowRightIcon } from 'components/icons';

import { Div, IconWrapper, Section, Text, TextWrapper, Wrapper } from './styles';

interface Props {
  href: string;
  icon: any;
  title: string;
  text?: string;
}

export const LinkCard = ({ href, icon, title, text }: Props) => {

  const [isHover, setHover] = useState(false);
  const router = useRouter();


  return (
    <Div
      isHover={isHover}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => router.push(href)}
    >
      <Section>
        <Wrapper>
          <IconWrapper>
            { icon }
          </IconWrapper>
          <TextWrapper>
            <p>{ title }</p>
            {
              text && <Text>{ text }</Text>
            }
          </TextWrapper>
        </Wrapper>
        <ArrowRightIcon width="22px" height="22px" />
      </Section>
    </Div>
  );
};
