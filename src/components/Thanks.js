import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Previous, StepComplete } from './styled-components/Steps';
import { ThanksContainer } from './styled-components/Containers';
import { TshirtIimg } from './styled-components/TshirtIimg';

export const Thanks = () => {
  const data = useSelector((state) => state.data);
  const helper = useSelector((state) => state.helper);
  const { base, billingInfo } = data;
  console.log(data);
  return (
    <>
      <ThanksContainer>
        <div>
          <p>
            <b>
              {billingInfo.firstName} {billingInfo.lastName}
            </b>
            , Koszulka z super grafiką z{' '}
            <b>{base === 'front' ? 'przodu' : 'tyłu'}</b> za jedyne{' '}
            <b>{helper.price} zł </b>zostanie wysłana na podane dane adresowe:
          </p>
          <p>
            <b>
              ul. {billingInfo.street} {billingInfo.building}
              {billingInfo.apartment ? `/${billingInfo.apartment}` : ''}
            </b>
          </p>
          <p>
            <b>
              {billingInfo.zip} {billingInfo.town}
            </b>
          </p>

          <p>
            Na podany przez Ciebie adres email: <b>{billingInfo.email}</b>{' '}
            wysłaliśmy również e-fakturę.
          </p>
          <p>
            Miej telefon pod ręką! Twój numer:
            <b>{billingInfo.phoneNumber}</b> przekazaliśmy kurierowi, który ma
            dostarczyć paczkę.
          </p>
        </div>
        <div>
          <TshirtIimg />
        </div>
        <StepComplete>
          <Link to="/">
            <Previous type="submit">Złóż nowe zamówienie</Previous>
          </Link>
        </StepComplete>
      </ThanksContainer>
    </>
  );
};
