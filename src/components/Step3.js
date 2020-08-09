import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { chooseBillingInfo } from '../store/rootSlice';
import { Form } from './styled-components/Form';
import { Link } from 'react-router-dom';
import { StepComplete, Previous, Next } from './styled-components/Steps';
import { Error } from './styled-components/Error';
import { Fieldset } from './styled-components/Fieldset';
import { Tip } from './styled-components/Tip';

export const Step3 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const billingInfo = useSelector((state) => state.billingInfo);
  const { register, errors, handleSubmit } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    dispatch(chooseBillingInfo(data));
    const form = document.querySelector('form');
    form.style.opacity = '0';
    form.style.transition = '0.3s all';
    setTimeout(() => {
      history.push('./step4');
      form.style.opacity = '1';
    }, 300);
    setTimeout(() => {
      form.style.opacity = '1';
    }, 500);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h2>Krok 4: Podaj dane rachunku:</h2>
      <Fieldset>
        <legend>dane zamawiającego</legend>
        <div>
          <label htmlFor="billingInfo_name">*Imię: </label>
          <input
            defaultValue={billingInfo.firstName}
            id="billingInfo_name"
            type="text"
            name="firstName"
            ref={register({
              required: 'pole nie może być puste!',
              pattern: {
                value: /^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]{3,15}$/,
                message: 'imię musi zaweirać 3 do 15 liter',
              },
            })}
          />
          {errors.firstName && <Error>{errors.firstName.message}</Error>}
        </div>

        <div>
          <label htmlFor="billingInfo_lastName">*Nazwisko: </label>
          <input
            defaultValue={billingInfo.lastName}
            id="billingInfo_lastName"
            type="text"
            name="lastName"
            ref={register({
              required: 'pole nie może być puste!',
              pattern: {
                value: /^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]{3,15}$/,
                message: 'nazwisko musi zaweirać 3 do 15 liter',
              },
            })}
          />
          {errors.lastName && <Error>{errors.lastName.message}</Error>}
        </div>
      </Fieldset>

      <Fieldset>
        <legend>dane adresowe</legend>
        <div>
          <label htmlFor="billingInfo_street">*Ulica: </label>
          <input
            defaultValue={billingInfo.street}
            id="billingInfo_street"
            type="text"
            name="street"
            ref={register({
              required: 'pole nie może być puste!',
              pattern: {
                value: /^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ0-9-\s]{3,55}$/,
                message:
                  'proszę wprowadzić od 3 do 55 znaków.Dozwolona spacja i myślnik',
              },
            })}
          />
          {errors.street && <Error>{errors.street.message}</Error>}
        </div>

        <div>
          <label htmlFor="billingInfo_building">*Numer budynku: </label>
          <input
            defaultValue={billingInfo.building}
            id="billingInfo_building"
            type="text"
            name="building"
            ref={register({
              required: 'pole nie może być puste!',
              pattern: {
                value: /^[a-zA-Z0-9-/\\]{1,4}$/,
                message:
                  'proszę wprowadzić max 4 znaki (bez polskich). dozwolone liczby, litery, myślnik i slesz',
              },
            })}
          />
          {errors.building && <Error>{errors.building.message}</Error>}
        </div>

        <div>
          <label htmlFor="billingInfo_apartment">Numer mieszkania: </label>
          <input
            defaultValue={billingInfo.apartment}
            id="billingInfo_apartment"
            type="text"
            name="apartment"
            ref={register({
              pattern: {
                value: /^[a-zA-Z0-9-/\\]{1,4}$/,
                message:
                  'proszę wprowadzić max 4 znaki (bez polskich). dozwolone liczby, litery, myślnik i slesz',
              },
            })}
          />
          {errors.apartment && <Error>{errors.apartment.message}</Error>}
        </div>

        <div>
          <label htmlFor="billingInfo_zip">*Kod pocztowy: </label>
          <input
            defaultValue={billingInfo.zip}
            id="billingInfo_zip"
            type="text"
            name="zip"
            ref={register({
              required: 'pole nie może być puste!',
              pattern: {
                value: /^[0-9]{2}-[0-9]{3}$/,
                message: 'proszę wprowadzić liczby w formacie xx-xxx',
              },
            })}
          />
          {errors.zip && <Error>{errors.zip.message}</Error>}
        </div>

        <div>
          <label htmlFor="billingInfo_town">*Miasto: </label>
          <input
            defaultValue={billingInfo.town}
            id="billingInfo_town"
            type="text"
            name="town"
            ref={register({
              required: 'pole nie może być puste!',
              pattern: {
                value: /^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ0-9-\s]{3,55}$/,
                message:
                  'proszę wprowadzić od 3 do 55 znaków. dozwolone liczby, litery, myślnik i slesz',
              },
            })}
          />
          {errors.town && <Error>{errors.town.message}</Error>}
        </div>
      </Fieldset>

      <Fieldset>
        <legend>dane kontaktowe</legend>
        <div>
          <label htmlFor="billingInfo_phoneNumber">*Numer telefonu: </label>
          <input
            defaultValue={billingInfo.phoneNumber}
            id="billingInfo_phoneNumber"
            type="text"
            name="phoneNumber"
            ref={register({
              required: 'pole nie może być puste!',
              pattern: {
                value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                message:
                  'proszę wprowadzić 9 cyfrowy numer poprzedzony kodem kraju np. +48 ',
              },
            })}
          />
          {errors.phoneNumber && <Error>{errors.phoneNumber.message}</Error>}
        </div>

        <div>
          <label htmlFor="billingInfo_email">*Adres mailowy: </label>
          <input
            defaultValue={billingInfo.email}
            id="billingInfo_email"
            type="text"
            name="email"
            ref={register({
              required: 'pole nie może być puste!',
              pattern: {
                value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
                message: 'email musi zawierać @ oraz nazwę domeny',
              },
            })}
          />
          {errors.email && <Error>{errors.email.message}</Error>}
        </div>
      </Fieldset>
      <Tip>pola oznaczone * są wymagane</Tip>
      <StepComplete>
        <Link to="/step2">
          <Previous type="submit">previous</Previous>
        </Link>
        <Next type="submit">złóż zamówienie</Next>
      </StepComplete>
    </Form>
  );
};
