import React from 'react';
import { useSelector } from 'react-redux';
import back from '../../assets/img/back.png';
import front from '../../assets/img/front.png';
import { Img, Print } from './Img';

import { PositionContainer } from './Containers';

export const TshirtIimg = () => {
  const base = useSelector((state) => state.data.base);
  const graphic = useSelector((state) => state.data.graphic);
  const step = useSelector((state) => state.helper.step);
  const graphicSrc = `https://picsum.photos/id/${graphic}/100`;

  return (
    <PositionContainer>
      {base === 'front' || base === '' ? (
        <Img alt="t-shirt" src={front} />
      ) : (
        <Img alt="t-shirt" src={back} />
      )}
      {step > 1 && <Print alt="graphic" src={graphicSrc} />}
    </PositionContainer>
  );
};
