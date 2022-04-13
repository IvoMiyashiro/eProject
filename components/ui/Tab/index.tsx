import { useState } from 'react';
import { Div, Li, Nav, Ul, Wrapper } from './styles';

interface Props {
  nav: string[];
  info: any[];
}

export const Tab = ({ nav, info }: Props) => {

  const [panel, setPanel] = useState(0);
  
  return (
    <Div>
      <Nav>
        <Ul>
          {
            nav.map((navName, i) => {
              return (
                <Li 
                  key={i}
                  onClick={() => setPanel(i)}
                  isActive={i === panel ? true : false}
                >
                  { navName }
                </Li>
              );
            })
          }
        </Ul>
      </Nav>
      <Wrapper>
        {
          nav.map((nav, i) => {
            if (i === panel) {
              return (
                <div key={i}>{ info[i] }</div>
              );
            }
          })
        }
      </Wrapper>
    </Div>
  );
};
