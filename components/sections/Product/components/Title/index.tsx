import React from 'react';
import styled from 'styled-components';
import { bp } from 'styles';

interface Props {
  brand: string;
  title: string;
}

export const Title = ({ brand, title }: Props) => {
  return (
    <Div>
      <Span>{ brand }</Span>
      <H1>{ title }</H1>
    </Div>
  );
};

const Div = styled.div`
  margin-bottom: 0.5em;
`;

const Span = styled.span`
  font-size: 0.9rem;
  color: ${prosp => prosp.theme.color_neutral_0};
`;

const H1 = styled.h1`
  color: ${props => props.theme.color_ui_text_main};

  @media (max-width: ${bp.mobile}) {
    font-size: 1.25rem;
  }
`;
