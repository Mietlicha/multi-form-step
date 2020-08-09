import styled from 'styled-components';

export const Form = styled.form`
  background: rgba(14, 16, 27, 0.3);
  margin: 0 auto;
  border: 3px solid white;
  border-radius: 7px;
  padding: 1rem;
  width: 32rem;
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
  background-image: url('https://picsum.photos/id/${({ htmlFor }) =>
    htmlFor.replace(/\D+/g, '')}/100');
  height: 100px;
  width: 100px;
  display: inline-block;
  padding: 0 0 0 0px;

  @media screen and (min-width: 450px) {
    background-image: url('https://picsum.photos/id/${({ htmlFor }) =>
      htmlFor.replace(/\D+/g, '')}/150');
    height: 150px;
  width: 150px;
  }
`;
