import React from 'react';
import { useSelector } from 'react-redux';

export const Graphic = () => {
  const graphic = useSelector((state) => state.data.graphic);
  const graphicSrc = `https://picsum.photos/id/${graphic}/100`;

  return <img alt="graphic" src={graphicSrc} />;
};
