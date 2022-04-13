import styled from 'styled-components';
import { DislikeIcon, LikeIcon } from 'components/icons';
import { Button } from 'components/ui';

interface Props {
  likes: number;
  dislikes: number;
}

export const LikeDislikeButtons = ({ likes, dislikes }: Props) => {
  return (
    <Buttons>
      <Button
        bgColor="transparent"
        textColor=''
      >
        <>
          <LikeIcon width="20px" height="20px" />
          <Span>{ likes }</Span>
        </>
      </Button>
      <Button
        bgColor="transparent"
        textColor=''
      >
        <>
          <DislikeIcon width="20px" height="20px" />
          <Span>{ dislikes }</Span>
        </>
      </Button>
    </Buttons>
  );
};

const Buttons = styled.div`
  display: flex;
  gap: 1em;
  width: 125px;
  height: 35px;
  margin-top: 2em;
  margin-left: auto;
`;

const Span = styled.span`
  margin-left: 0.5em;
`;
