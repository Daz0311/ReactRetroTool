import React from 'react';
import './MadSadGladPage.css';
import { Button } from '@mui/material';
import CardSection from './CardSection';

function EditableParagraph({ initialText }) {
  const paragraphRef = React.useRef(null);

  React.useEffect(() => {
    if (paragraphRef.current) {
      paragraphRef.current.innerText = initialText;
    }
  }, [initialText]);

  return (
    <p
      contentEditable
      suppressContentEditableWarning={true}
      spellCheck={false}  // Disabilita il controllo ortografico
      className="editable-paragraph"
      ref={paragraphRef}
    />
  );
}

function FirstPage() {
  return (
    <div className="App">
      <header className="headerMadSadGlad">
        <nav className="navbar">
          <div className="nav-left">
            <span className="Retrospective">Untitled retrospective</span>
          </div>
          <div className="nav-center">
            <Button variant="contained">Print</Button>
            <Button variant="contained">Settings</Button>
            <Button variant="contained">Actions</Button>
          </div>
          <div className="nav-right">
            <span className="Remira-script">RetroRemira</span>
          </div>
        </nav>
      </header>
      <div className="content">
        <div className="column mad">
          <h2>Mad</h2>
          <EditableParagraph
            initialText="What has driven you mad? You might focus on issues, time wasters, unpleasant surprises, etc."
          />
          <div className="post-it-container">
            <CardSection />
          </div>
        </div>
        <div className="column sad">
          <h2>Sad</h2>
          <EditableParagraph
            initialText="What has made you feel sad? You might focus on failures, issues inside the team, etc."
          />
          <div className="post-it-container">
            <CardSection />
          </div>
        </div>
        <div className="column glad">
          <h2>Glad</h2>
          <EditableParagraph
            initialText="What has made you feel positive? You might focus on goals achieved, successes, events, etc."
          />
          <div className="post-it-container">
            <CardSection />
          </div>
        </div>
      </div>
      <footer>
        <p>© 2024 Your Company. All rights reserved. Privacy Policy | Terms of Use | Contact Us</p>
      </footer>
    </div>
  );
}

export default FirstPage;

//inserire le funzionalità pulsanti
// l'ok se all'intenro è scirtto qualcosa, mi crea un altro post it all'interno del div e ne volgio massimo 2 per irga e poi dopo scrolla sotto con la barra scorrimento , 
//la x deve cancellare il coneuto all'interno del post it
//il pulsate emoji mi deve fare scegliere delle emoji da inserire,
