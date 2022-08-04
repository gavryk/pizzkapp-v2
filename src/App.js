import React from 'react';
import { Logo, UIButton } from './components';
import logoImg from './assets/images/pizza-logo.png';

const App = () => {
  return (
    <div>
      <Logo src={logoImg} alt="logo" logoText="PizzaApp" />
      <UIButton>Test Button</UIButton>
    </div>
  );
};

export default App;
