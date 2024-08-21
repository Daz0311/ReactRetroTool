// App.jsx
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './Homepage/Homepage.css';
import Homepage from './Homepage/HomePage.jsx'; // Importa il componente Homepage
import './MadSadGlad/MadSadGladPage.css';
import FirstPage from './MadSadGlad/MadSadGladPage.jsx';

function App() {
  

  return (
    <>
      <FirstPage />
    </>
  );
}

export default App;
