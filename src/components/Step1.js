import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { chooseBase } from '../store/rootSlice';
import Form from './styled-components/Form';
import Label from './styled-components/Label';
import { StepComplete, Next } from './styled-components/Steps';

export const Step1 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(chooseBase(data.base));
    const form = document.querySelector('form');
    form.style.opacity = '0';
    form.style.transition = '0.3s all';
    setTimeout(() => {
      history.push('./step2');
      form.style.opacity = '1';
    }, 300);
    setTimeout(() => {
      form.style.opacity = '1';
    }, 500);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h2>Krok 1: Wybierz miejsce nadruku:</h2>
      <div>
        <Label htmlFor="base_front">Z przodu </Label>
        <input
          id="base_front"
          type="radio"
          name="base"
          ref={register}
          defaultChecked
          value="front"
        />
      </div>
      <div>
        <Label htmlFor="base_back">Z tyłu </Label>
        <input
          id="base_back"
          type="radio"
          name="base"
          ref={register}
          value="back"
        />
      </div>
      <StepComplete>
        <Next type="submit">Next</Next>
      </StepComplete>
    </Form>
  );
};
