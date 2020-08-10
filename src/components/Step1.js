import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { chooseBase, updatePrice, incrementStep } from '../store/rootSlice';
import { Form, Label } from './styled-components/Form';
import { StepComplete, Next } from './styled-components/Steps';
import { Error } from './styled-components/Error';
import { Tip } from './styled-components/Tip';
import { baseInput } from '../utils/data';

export const Step1 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const base = useSelector((state) => state.data.base);
  let step = useSelector((state) => state.helper.step);

  const { register, handleSubmit, errors } = useForm({
    defaultValues: { base },
  });

  base && dispatch(updatePrice(5));

  const onSubmit = (data) => {
    dispatch(chooseBase(data.base));
    dispatch(incrementStep({ step: step++ }));
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
      {baseInput.map(({ htmlFor, label, id, value }) => {
        return (
          <div key={id}>
            <Label htmlFor={htmlFor}>{label}</Label>
            <input
              id={id}
              type="radio"
              name="base"
              ref={register({ required: true })}
              value={value}
              onChange={(e) => dispatch(chooseBase(e.target.value))}
            />
          </div>
        );
      })}
      {errors.base && <Error>wybierz jedną z opcji</Error>}
      <Tip>Dodanie nadruku kosztuje 5zł</Tip>
      <StepComplete>
        <Next type="submit">dalej</Next>
      </StepComplete>
    </Form>
  );
};
