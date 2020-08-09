import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Step1 } from './components/Step1';
import { Step2 } from './components/Step2';
import { Step3 } from './components/Step3';
import { Step4 } from './components/Step4';
import { Thanks } from './components/Thanks';
import { Header } from './components/styled-components/Header';
import { OrderPreview } from './components/OrderPreview';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const step = useSelector((state) => state.helper.step);

  return (
    <>
      <Header>
        {step === 5 ? (
          <h1>Dziękujemy za złożenie zamówienia!</h1>
        ) : (
          <h1>Skompletuj swoje zamówienie</h1>
        )}
      </Header>
      <Router>
        <Route exact path="/" component={Step1} />
        <Route path="/step2" component={Step2} />
        <Route path="/step3" component={Step3} />
        <Route path="/step4" component={Step4} />
        <Route path="/thanks" component={Thanks} />
      </Router>
      {step === 5 ? '' : <OrderPreview />}
    </>
  );
}

export default App;
