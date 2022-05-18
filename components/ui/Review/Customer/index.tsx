import Image from 'next/image';

import { CheckIcon } from 'components/icons';

import { Div, ImageWrapper, Wrapper, H2, Section, Span, P } from './styles';

interface Props { 
  username: string; 
  profileImg: string;
}

export const Customer = ({ username, profileImg }: Props) => {

  const USER_PROFILE_IMAGE = profileImg !== null ? profileImg : '/images/profile_image.png';

  return (

    <Div>
      <ImageWrapper>
        <Image
          alt={ username }
          blurDataURL={ USER_PROFILE_IMAGE as string }
          layout="fill"
          placeholder="blur"
          src={ USER_PROFILE_IMAGE as string }
        />
      </ImageWrapper>
      <Wrapper>
        <H2>{ username } </H2>
        <Section>
          <Span>
            <CheckIcon width="16px" height="16px" />
          </Span>
          <P>Verified Owner</P>
        </Section>
      </Wrapper>
    </Div>
  );
};
