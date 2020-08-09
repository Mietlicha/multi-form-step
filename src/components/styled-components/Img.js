import styled from 'styled-components';

export const Img = styled.img`
  max-width: 100%;
  width: 200px;
  height: auto;
`;

export const Print = styled(Img)`
  width: 80px;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`;
