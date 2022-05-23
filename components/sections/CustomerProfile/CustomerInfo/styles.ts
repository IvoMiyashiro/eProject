import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  gap: 1em;
`;

export const ImageWrapper = styled.div`
  border-radius: 50%;
  height: 100px;
  overflow: hidden;
  position: relative;
  width: 100px;
`;

export const H2 = styled.h2`
  font-size: 1.25rem;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75em;
  list-style: none;
`;

export const Li = styled.li`
  display: flex;
  gap: 0.5em;
`;

export const P = styled.p`
  font-weight: 200;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 0.5em;
  position: absolute;
  right: 2em;
  top: 2em;
`;
