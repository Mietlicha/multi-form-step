import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { chooseGraphic } from '../store/rootSlice';
import { Link } from 'react-router-dom';
import Form from './styled-components/Form';
import Label from './styled-components/Label';
import { StepComplete, Previous, Next } from './styled-components/Steps';
import Input from './styled-components/Input';

export const Step2 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(chooseGraphic(data.graphic));
    history.push('./step3');
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h2>Krok 2: Wybierz grafikę:</h2>
      <div>
        <Input
          id="graphic_1"
          type="radio"
          name="graphic"
          ref={register}
          defaultChecked
          value="1"
        />
        <Label className="label1" htmlFor="graphic_1"></Label>
        <Input
          id="graphic_2"
          type="radio"
          name="graphic"
          ref={register}
          value="2"
        />
        <Label className="label2" htmlFor="graphic_2"></Label>
      </div>
      <StepComplete>
        <Link to="/">
          <Previous type="submit">previous</Previous>
        </Link>
        <Next type="submit">Next</Next>
      </StepComplete>
    </Form>
  );
};
