import styled from 'styled-components';

interface Props {
  type: 'button' | 'submit';
  children: string;
  logo: string;
  bgColor: string;
  textColor: string;
  onClick: any;
}

export const ProviderButton = ({ type, children, logo, bgColor, textColor, onClick }: Props) => {
  return (
    <Button
      type={type}
      bgColor={bgColor}
      onClick={onClick}
    >
      <Logo src={logo} alt={children} />
      <P textColor={textColor}> {children} </P>
    </Button>
  );
};

interface Styles {
  bgColor?: string;
  textColor?: string;
}

const Button = styled.button<Styles>`
    align-items: center;
    background: ${props => props.bgColor};
    border-radius: 4px;
    border: none;
    cursor: pointer;
    display: grid;
    font-family: 'Roboto';
    grid-template-columns: 50px 1fr;
    height: 100%;
    padding: 0.5em;
    width: 100%;
`;

const Logo = styled.img`
    background: #fff;
    border-radius: 4px;
    padding: 0.5em;
    width: 43px;
`;

const P = styled.p<Styles>`
    color: ${props => props.textColor};
    font-size: .9rem;
    margin: 0;
`;
