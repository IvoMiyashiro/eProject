import styled from 'styled-components';

export const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  overflow-y: scroll;
  height: 100%;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const PriceWrapper = styled.div`
  margin-top: 2em;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75em;
`;

export const Div = styled.div`
  background-color: ${prosp => prosp.theme.color_neutral_1};
  display: grid;
  height: 100vh;
  margin-left: auto;
  padding: 0 1.5em;
  padding-bottom: 2em;
  padding-top: 7em;
  position: sticky;
  top: 0;
  width: 100%;
`;

export const EmptyCart = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1em;
  height: 100%;
  margin-bottom: auto; 
  padding-top: 6.5em;
`;

export const Li = styled.li`
  display: flex;
  justify-content: space-between;

  :nth-child(2) {
    color: ${props => props.theme.color_primary_2}
  }
`;

export const H3 = styled.h2`
  /* font-family: 'Inter'; */
  font-size: 1.15rem;
  font-weight: 600;
`;

export const P = styled.p`
 font-family: 'Inter';
 font-size: 0.9rem;
 text-align: center;
`;

export const ButtonWrapper = styled.div`
  width: 100px;
  height: 35px;
`;
