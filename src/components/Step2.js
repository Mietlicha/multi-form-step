import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { chooseGraphic } from '../store/rootSlice';
import { Link } from 'react-router-dom';
import { Form, Input, ImageLabel } from './styled-components/Form';
import { StepComplete, Previous, Next } from './styled-components/Steps';
import { Error } from './styled-components/Error';

export const Step2 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const graphic = useSelector((state) => state.graphic);
  const { register, handleSubmit, errors } = useForm({
    defaultValues: { graphic },
  });

  const onSubmit = (data) => {
    dispatch(chooseGraphic(data.graphic));
    const form = document.querySelector('form');
    form.style.opacity = '0';
    form.style.transition = '0.3s all';
    setTimeout(() => {
      history.push('./step3');
      form.style.opacity = '1';
    }, 300);
    setTimeout(() => {
      form.style.opacity = '1';
    }, 500);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h2>Krok 2: Wybierz grafikę:</h2>
      <div>
        <Input
          id="graphic_1"
          type="radio"
          name="graphic"
          ref={register({ required: true })}
          value="1"
        />
        <ImageLabel htmlFor="graphic_1"></ImageLabel>
        <Input
          id="graphic_2"
          type="radio"
          name="graphic"
          ref={register({ required: true })}
          value="2"
        />
        <ImageLabel htmlFor="graphic_2"></ImageLabel>
        <Input
          id="graphic_3"
          type="radio"
          name="graphic"
          ref={register({ required: true })}
          value="3"
        />
        <ImageLabel htmlFor="graphic_3"></ImageLabel>
        <Input
          id="graphic_4"
          type="radio"
          name="graphic"
          ref={register({ required: true })}
          value="4"
        />
        <ImageLabel className="label4" htmlFor="graphic_4"></ImageLabel>
      </div>
      {errors.graphic && <Error>wybierz jedną grafikę</Error>}
      <StepComplete>
        <Link to="/">
          <Previous type="submit">previous</Previous>
        </Link>
        <Next type="submit">Next</Next>
      </StepComplete>
    </Form>
  );
};
