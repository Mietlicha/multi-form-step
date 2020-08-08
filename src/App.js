import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Step1 } from './components/Step1';
import { Step2 } from './components/Step2';
import { Step3 } from './components/Step3';
import { Step4 } from './components/Step4';
import { Thanks } from './components/Thanks';
import { Header } from './components/styled-components/Header';
import './App.css';

function App() {
  return (
    <>
      <Header>
        <h1>Skompletuj swoje zamówienie</h1>
      </Header>
      <Router>
        <Route exact path="/" component={Step1} />
        <Route path="/step2" component={Step2} />
        <Route path="/step3" component={Step3} />
        <Route path="/step4" component={Step4} />
        <Route path="/thanks" component={Thanks} />
      </Router>
    </>
  );
}

export default App;
