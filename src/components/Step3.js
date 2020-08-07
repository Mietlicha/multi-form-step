import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { chooseBase } from '../store/rootSlice';

export const Step3 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(chooseBase(data.base));
    history.push('./step4');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>
        <span>Step 1: </span>Wybierz miejsce nadruku:
      </h3>
      <div>
        <label>
          Z przodu
          <input
            type="radio"
            name="base"
            ref={register}
            checked
            value="front"
          />
        </label>
        <label>
          Z tyłu
          <input type="radio" name="base" ref={register} value="back" />
        </label>
      </div>
      <button>Next</button>
    </form>
  );
};
