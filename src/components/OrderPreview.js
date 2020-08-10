import React from 'react';
import { useSelector } from 'react-redux';
import { PriceDetail } from './styled-components/PriceDetail';
import {
  StyledContainer,
  LayoutContainer,
} from './styled-components/Containers';
import { TshirtIimg } from './styled-components/TshirtIimg';
import { Graphic } from './Graphic';

export const OrderPreview = () => {
  const price = useSelector((state) => state.helper.price);
  const step = useSelector((state) => state.helper.step);

  return (
    <>
      <LayoutContainer>
        <h2>Podgląd zamówienia:</h2>
      </LayoutContainer>
      <StyledContainer>
        <TshirtIimg />
        <LayoutContainer>
          {step === 1 ? <p>Proponowana grafika:</p> : <p>Wybrana grafika:</p>}
          <Graphic />
          <PriceDetail>
            <h3>Koszt:</h3>
            <p>{price} zł</p>
          </PriceDetail>
        </LayoutContainer>
      </StyledContainer>
    </>
  );
};
