import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Thanks = () => {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <>
      <h2>Dziękujemy za złożenie zamówienia!</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <Link to="/">Start over</Link>
    </>
  );
};
