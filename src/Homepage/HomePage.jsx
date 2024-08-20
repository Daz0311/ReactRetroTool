import React, { useState } from 'react';// funnzione specifica di
import './Homepage.css';
import robottinoImage from '../image/robottino.png';

function Homepage() {
  const [templateButtonClicked, setTemplateButtonClicked] = useState(false);

  const handleTemplateButtonClick = () => {
    setTemplateButtonClicked(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2 classname ="Retro" >RetroRemira</h2>
      </header>
      <main>
        <h1>New retrospective</h1>
        <div className="template-container">
          <button 
            className={`template-button ${templateButtonClicked ? 'active' : ''}`}
            onClick={handleTemplateButtonClick}
          >
            <img src={robottinoImage} alt="robottino" />
            <div>Mad | Sad | Glad</div>
          </button>
        </div>
        <button 
          className={`create-retro-button ${templateButtonClicked ? 'active' : ''}`}
          disabled={!templateButtonClicked}
        >
          Create Retro
        </button>
      </main>
    </div>
  );
}

export default Homepage;