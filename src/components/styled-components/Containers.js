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

export const ThanksContainer = styled(LayoutContainer)`
  height: 80vh;
  justify-content: space-between;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-bottom: 1rem;
  & > p {
    margin: 0.5rem 0;
    @media screen and (min-width: 450px) {
      margin: 0.5rem 1rem;
    }
  }
`;
