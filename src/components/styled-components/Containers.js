import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
`;

export const StyledContainer = styled(FlexContainer)`
  justify-content: space-around;
  padding: 1rem;
`;

export const LayoutContainer = styled(FlexContainer)`
  justify-content: center;
  flex-direction: column;
  padding: 0 1rem;
  align-items: center;
`;

export const GraphicContainer = styled(FlexContainer)`
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const PositionContainer = styled.div`
  position: relative;
`;
