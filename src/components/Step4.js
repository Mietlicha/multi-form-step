import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { incrementStep, decrementStep } from '../store/rootSlice';
import { Form } from './styled-components/Form';
import { Link } from 'react-router-dom';
import { StepComplete, Previous, Next } from './styled-components/Steps';
import { GridContainer } from './styled-components/Containers';
import { Tip } from './styled-components/Tip';
import { Graphic } from './Graphic';

export const Step4 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  let step = useSelector((state) => state.helper.step);
  const data = useSelector((state) => state.data);
  const { base, billingInfo } = data;
  const { handleSubmit } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    dispatch(incrementStep({ step: step++ }));
    const form = document.querySelector('form');
    form.style.opacity = '0';
    form.style.transition = '0.3s all';
    setTimeout(() => {
      history.push('./thanks');
      form.style.opacity = '1';
    }, 300);
    setTimeout(() => {
      form.style.opacity = '1';
    }, 500);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h2>Krok 4: Podsumowanie danych:</h2>
      <GridContainer>
        <p>Miejsce nadruku:</p> <b>{base === 'front' ? 'przód' : 'tył'}</b>
        <p>grafika:</p> <Graphic />
      </GridContainer>
      <Tip> Twoje dane:</Tip>
      <GridContainer>
        <p>Imię:</p> <b>{billingInfo.firstName}</b>
        <p>Nazwisko:</p> <b>{billingInfo.lastName}</b>
        <p>Ulica:</p> <b>{billingInfo.street}</b>
        <p>Numer budynku:</p> <b>{billingInfo.building}</b>
        <p>Numer mieszkania: </p> <b>{billingInfo.apartment}</b>
        <p>Miasto: </p> <b>{billingInfo.town}</b>
        <p>Kod pocztowy: </p> <b>{billingInfo.zip}</b>
        <p>Numer telefonu: </p> <b>{billingInfo.phoneNumber}</b>
        <p>Adres email: </p> <b>{billingInfo.email}</b>
      </GridContainer>
      <StepComplete>
        <Link to="/step3">
          <Previous
            onClick={() => dispatch(decrementStep({ step: step-- }))}
            type="submit"
          >
            wróć
          </Previous>
        </Link>
        <Next type="submit">złóż zamówienie</Next>
      </StepComplete>
    </Form>
  );
};
