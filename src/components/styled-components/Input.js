import styled from 'styled-components';

const Input = styled.input`
  display: none;

  &:checked + label {
    border: 3px solid orange;
  }
`;

export default Input;
