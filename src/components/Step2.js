import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  chooseGraphic,
  incrementStep,
  decrementStep,
} from '../store/rootSlice';
import { Link } from 'react-router-dom';
import { Form, Input, ImageLabel } from './styled-components/Form';
import { StepComplete, Previous, Next } from './styled-components/Steps';
import { Error } from './styled-components/Error';
import { GraphicContainer } from './styled-components/Containers';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import { graphicInput } from '../utils/data';

export const Step2 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  let step = useSelector((state) => state.helper.step);
  const graphic = useSelector((state) => state.data.graphic);
  const { register, handleSubmit, errors } = useForm({
    defaultValues: { graphic },
  });

  const onSubmit = (data) => {
    dispatch(chooseGraphic(data.graphic));
    dispatch(incrementStep({ step: step++ }));
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

  const StyledCarousel = styled(Carousel)`
    width: 100%;

    .slide {
      background: transparent;
    }

    .carousel-status {
      display: none;
    }
  `;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h2>Krok 2: Wybierz grafikę:</h2>
      <GraphicContainer>
        <StyledCarousel
          dynamicHeight={true}
          infiniteLoop
          onClickItem={(e) => console.log(e)}
        >
          {graphicInput.map(({ id, value }) => {
            return (
              <div>
                <Input
                  id={id}
                  type="radio"
                  name="graphic"
                  ref={register({ required: true })}
                  value={value}
                  onChange={(e) => dispatch(chooseGraphic(e.target.value))}
                />
                <ImageLabel htmlFor={id}></ImageLabel>
              </div>
            );
          })}
        </StyledCarousel>
      </GraphicContainer>
      {errors.graphic && <Error>wybierz jedną grafikę</Error>}
      <StepComplete>
        <Link to="/">
          <Previous
            onClick={() => dispatch(decrementStep({ step: step-- }))}
            type="submit"
          >
            wróć
          </Previous>
        </Link>
        <Next type="submit">do kasy</Next>
      </StepComplete>
    </Form>
  );
};
