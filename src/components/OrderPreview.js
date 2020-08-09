import React from 'react';
import { useSelector } from 'react-redux';
import back from '../assets/img/back.png';
import front from '../assets/img/front.png';
import { Img, Print } from './styled-components/Img';
import { PriceDetail } from './styled-components/PriceDetail';
import {
  StyledContainer,
  LayoutContainer,
  PositionContainer,
} from './styled-components/Containers';

export const OrderPreview = () => {
  const base = useSelector((state) => state.data.base);
  const graphic = useSelector((state) => state.data.graphic);
  const price = useSelector((state) => state.helper.price);
  const step = useSelector((state) => state.helper.step);
  const graphicSrc = `https://picsum.photos/id/${graphic}/100`;

  return (
    <>
      <LayoutContainer>
        <h2>Podgląd zamówienia:</h2>
      </LayoutContainer>

      <StyledContainer>
        <PositionContainer>
          {base === 'front' || base === '' ? (
            <Img alt="t-shirt" src={front} />
          ) : (
            <Img alt="t-shirt" src={back} />
          )}
          {step > 1 && <Print alt="graphic" src={graphicSrc} />}
        </PositionContainer>

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
