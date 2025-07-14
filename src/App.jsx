import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './styles/variables.css';
import InterestForm from './components/InterestForm.jsx';
function App() {
  return (
    <>
      <div>
        <InterestForm />
      </div>
    </>
  );
}

export default App;
