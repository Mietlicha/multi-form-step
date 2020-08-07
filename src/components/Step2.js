import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { chooseGraphics } from '../store/rootSlice';
import { Link } from 'react-router-dom';

export const Step2 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(chooseGraphics(data.graphics));
    history.push('./step3');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Krok 2: Wybierz grafikę:</h2>
      <div>
        <input type="checkbox" name="graphic1" id="graphic1" ref={register} />
        <label htmlFor="graphic1"></label>
      </div>
      <div className="stepComplete">
        <Link to="/">
          <button className="previous" type="submit">
            previous
          </button>
        </Link>
        <button className="next" type="submit">
          Next
        </button>
      </div>
    </form>
  );
};
