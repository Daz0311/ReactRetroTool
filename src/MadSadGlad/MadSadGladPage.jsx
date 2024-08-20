import React from 'react';
import './MadSadGladPage.css';

function EditableParagraph({ initialText }) {
  const paragraphRef = React.useRef(null);

  React.useEffect(() => {
    if (paragraphRef.current) {
      paragraphRef.current.innerText = initialText;
    }
  }, [initialText]);

  const handleInput = (e) => {
    // Il testo modificato non è gestito dallo stato in questo caso
  };

  return (
    <p
      contentEditable
      onInput={handleInput}
      suppressContentEditableWarning={true}
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
            <button>Print</button>
            <button>Settings</button>
            <button>Actions</button>
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
          <textarea placeholder="Type here..."></textarea>
        </div>
        <div className="column sad">
          <h2>Sad</h2>
          <EditableParagraph
            initialText="What has made you feel sad? You might focus on failures, issues inside the team, etc."
          />
          <textarea placeholder="Type here..."></textarea>
        </div>
        <div className="column glad">
          <h2>Glad</h2>
          <EditableParagraph
            initialText="What has made you feel positive? You might focus on goals achieved, successes, events, etc."
          />
          <textarea placeholder="Type here..."></textarea>
        </div>
      </div>
      <footer>
        <p>© 2024 Your Company. All rights reserved. Privacy Policy | Terms of Use | Contact Us</p>
      </footer>
    </div>
  );
}

export default FirstPage;

// rendere fissa la navbar
//non permettere di aumentare in larghezza e lunghezza
//creare un altro div che contiene la parte sotto
// rendere fisso il text area 
//fare in modo che si arrotondi 
//aumentare la scritta con font migliori 
//aumentare la navbar