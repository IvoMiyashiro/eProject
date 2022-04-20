import styled from 'styled-components';

export const Div = styled.div`
  display: none;
  padding-top: 27px;
  position: absolute;
  right: 0;
`;

export const Ul = styled.ul`
  background-color: ${props => props.theme.color_primary_0};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0.5em 0;
`;

export const Li = styled.li`
  cursor: pointer;
  padding: 0.75em 1em;
  transition: 0.1s;
  
  :hover {
    background-color: ${props => props.theme.color_primary_2};
    transition: 0.1s;
  }

  :last-child {
    border-top: 1px solid ${props => props.theme.color_primary_2};
  }

  :first-child {
    border-bottom: 1px solid ${props => props.theme.color_primary_2};
  }
`;

export const Dashboard = styled.li`
  cursor: pointer;
  padding: 0.75em 1em;
  transition: 0.1s;
  border-top: 1px solid ${props => props.theme.color_primary_2};

  :hover {
    background-color: ${props => props.theme.color_primary_2};
    transition: 0.1s;
  }
`;

export const Span = styled.span`
  color: ${props => props.theme.color_ui_text_contrast};
  font-size: 0.9rem;
  white-space: nowrap;
`;

export const Wrapper = styled.div`
  border-radius: 4px;
  display: flex;
  gap: 0.5em;
`;

export const ImageWrapper = styled.section`
  border-radius: 4px;
  height: 50px;
  overflow: hidden;
  position: relative;
  width: 50px;
`;

export const H2 = styled.h2`
  color: ${props => props.theme.color_ui_text_contrast};
  font-size: 1rem;
`;

export const P = styled.p`
  color: ${props => props.theme.color_ui_text_contrast};
  font-size: 0.8rem;
`;

export const Role = styled.p`
  color: ${props => props.theme.color_ui_text_contrast};
  font-size: 0.8rem;
  text-transform: capitalize;
`;

export const Section = styled.section``;

export const A = styled.a`
  align-items: center;
  display: flex;
  gap: 0.5em;
  justify-content: space-between;
  text-decoration: none;
`;
