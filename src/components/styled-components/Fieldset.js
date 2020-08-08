import styled from 'styled-components';

export const Fieldset = styled.fieldset`
  border: none;
  border-top: 1px solid white;

  & > div {
    display: grid;
    grid-template-columns: 1.5fr 2fr;
    margin: 0.5rem 0;
  }

  & > legend {
    font-weight: lighter;
    letter-spacing: 2px;
  }

  & + p {
    font-weight: bold;
    font-size: 1.2rem;
    letter-spacing: 2px;
  }
`;
