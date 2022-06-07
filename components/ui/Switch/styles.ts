import styled from 'styled-components';

interface Styles {
  isOn: boolean;
}

export const Span = styled.span`
  content: '';
  background: #fff;
  border-radius: 45px;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  height: 20px;
  left: 2px;
  position: absolute;
  top: 2.5px;
  transition: 0.2s;
  width: 20px;
`;

export const Label = styled.label<Styles>`
  align-items: center;
  background: ${props => props.isOn ? props.theme.color_ui_ok_0 : props.theme.color_neutral_0};
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  height: 25px;
  justify-content: space-between;
  position: relative;
  transition: background-color .2s;
  width: 50px;

  :active ${Span} {
    width: 60px;
  }
`;

export const Input = styled.input`
  height: 0;
  visibility: hidden;
  width: 0;

  :checked + ${Label} ${Span} {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`;
