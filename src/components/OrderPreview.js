import React from 'react';
import { useSelector } from 'react-redux';
import { PriceDetail } from './styled-components/PriceDetail';
import {
  StyledContainer,
  LayoutContainer,
} from './styled-components/Containers';
import { TshirtIimg } from './styled-components/TshirtIimg';

export const OrderPreview = () => {
  const graphic = useSelector((state) => state.data.graphic);
  const price = useSelector((state) => state.helper.price);
  const graphicSrc = `https://picsum.photos/id/${graphic}/100`;

  return (
    <>
      <LayoutContainer>
        <h2>Podgląd zamówienia:</h2>
      </LayoutContainer>
      <StyledContainer>
        <TshirtIimg />
        <LayoutContainer>
          <img alt="graphic" src={graphicSrc} />
          <PriceDetail>
            <h3>Koszt:</h3>
            <p>{price} zł</p>
          </PriceDetail>
        </LayoutContainer>
      </StyledContainer>
    </>
  );
};
