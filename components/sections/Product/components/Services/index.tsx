import { ReturnIcon, ShieldIcon, TruckIcon } from 'components/icons';
import { lightTheme } from 'styles';

import styled from 'styled-components';

export const Services = () => {
  return (
    <Ul>
      <Li>
        <TruckIcon width="28px" height="28px" color={lightTheme.color_ui_ok_0}/>
        <div>
          <P>Fast delivery and pickups</P>
          <Span>You will receive your phone within 1-3 business days </Span>
        </div>
      </Li>
      <Li>
        <ShieldIcon width="28px" height="28px" color={lightTheme.color_ui_ok_0}/>
        <div>
          <P>Secure payments</P>
          <Span>We use the most trustworthy payment providers</Span>
        </div>
      </Li>
      <Li>
        <ReturnIcon width="28px" height="28px" color={lightTheme.color_ui_ok_0}/>
        <div>
          <P>Warranty and returns</P>
          <Span>24-month ePoject warranty and 14-day free returns</Span>
        </div>
      </Li>
    </Ul>
  );
};

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75em;
  margin-top: 1em;
`;

const Li = styled.li`
  display: grid;
  grid-template-columns: 30px 1fr;
  align-items: center;
  gap: 0.5em;
  color: ${props => props.theme.color_ui_ok_0};
  font-size: 0.9rem;
`;

const P = styled.p``;

const Span = styled.span`
  color: ${props => props.theme.color_neutral_2}
`;
