import styled from 'styled-components';
import React from 'react';

export const Form = styled.form`
  background: rgba(14, 16, 27, 0.3);
  margin: 0 auto;
  margin-top: 3.5rem;
  border: 3px solid white;
  border-radius: 7px;
  padding: 1rem 2rem;
`;

export const Input = styled.input`
  display: none;

  &:checked + label {
    border: 3px solid orange;
  }
`;

export const Label = styled.label`
  margin: 0 1rem 2rem 0;
  display: inline-block;
  font-size: 1.4rem;
`;

export const ImageLabel = styled(Label)`
  background-image: url('https://picsum.photos/50/50?random=${({ htmlFor }) =>
    htmlFor}');
  height: 50px;
  width: 50px;
  display: inline-block;
  padding: 0 0 0 0px;
`;
