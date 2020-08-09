import React from 'react';
import { useSelector } from 'react-redux';
import back from '../assets/img/back.png';
import front from '../assets/img/front.png';

export const OrderPreview = () => {
  const base = useSelector((state) => state.data.base);
  const graphic = useSelector((state) => state.data.graphic);
  const price = useSelector((state) => state.helper.price);
  const graphicSrc = `https://picsum.photos/id/${graphic}/100`;
  console.log(front);
  return (
    <>
      <div>
        {base === 'front' || base === '' ? (
          <img alt="t-shirt" src={front} />
        ) : (
          <img alt="t-shirt" src={back} />
        )}
      </div>

      <div>
        <img alt="graphic" src={graphicSrc} />
      </div>
      <div>
        <h3>Koszt:</h3>
        <p>{price} zł</p>
      </div>
    </>
  );
};
