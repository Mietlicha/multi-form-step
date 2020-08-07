import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { chooseBase } from '../store/rootSlice';

export const Step1 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(chooseBase(data.base));
    history.push('./step2');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Krok 1: Wybierz miejsce nadruku:</h2>
      <div>
        <label htmlFor="base_front">Z przodu </label>
        <input
          id="base_front"
          type="radio"
          name="base"
          ref={register}
          checked
          value="front"
        />
      </div>
      <div>
        <label htmlFor="base_back">Z tyłu </label>
        <input
          id="base_back"
          type="radio"
          name="base"
          ref={register}
          value="back"
        />
      </div>
      <div className="stepComplete">
        <button className="next" type="submit">
          Next
        </button>
      </div>
    </form>
  );
};
