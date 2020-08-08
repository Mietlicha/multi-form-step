import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { chooseGraphic } from '../store/rootSlice';
import { Link } from 'react-router-dom';

export const Step4 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    history.push('./thanks');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      ><h2>Krok 4: Podaj dane rachunku:</h2>
      <div>
        <input type="checkbox" name="graphic1" id="graphic1" />
        <label htmlFor="graphic1"></label>
      </div>
      <div className="stepComplete">
        <Link to="/step3">
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
