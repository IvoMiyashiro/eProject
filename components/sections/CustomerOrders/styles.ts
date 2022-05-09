import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  align-items: center;
  background-color: ${props => props.theme.color_ui_background};
  box-shadow:
  0px 0px 1.4px rgba(0, 0, 0, 0.011),
  0px 0px 3.4px rgba(0, 0, 0, 0.016),
  0px 0px 6.4px rgba(0, 0, 0, 0.02),
  0px 0px 11.4px rgba(0, 0, 0, 0.024),
  0px 0px 21.3px rgba(0, 0, 0, 0.029),
  0px 0px 51px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  height: 50px;
  margin-top: 2em;
  padding: 0 1em;
`;

export const P = styled.p`
  font-size: 0.8rem;
  color: ${props => props.theme.color_neutral_2};
`;
