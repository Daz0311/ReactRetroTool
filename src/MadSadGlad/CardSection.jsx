import React, { useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import {
  Check as CheckIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import './CardSection.css';
import AutoSizeTextArea from './AutoSizeText';

function CardSection() {
  const [text, setText] = useState('');
  const [cards, setCards] = useState([]); // Stato per gestire i post-it creati
  const maxCharacters = 140;

  const handleChange = (event) => {
    const newText = event.target.value;
    if (newText.length <= maxCharacters) {
      setText(newText);
    }
  };

  const handleSave = () => {
    if (text.trim()) {
      setCards([...cards, text]);
      setText('');
    }
  };

  const handleDelete = (index) => {
    const newCards = cards.filter((_, i) => i !== index);
    setCards(newCards);
  };

  return (
    <div className="cards-section">
      <div className="cards-container">
        {cards.map((cardText, index) => (
          <div className="card" key={index}>
            <div className="card-content">
              <div className="card-description-container">
                <p>{cardText}</p>
              </div>
              <div className="buttons">
                <Tooltip title="Delete">
                  <IconButton color="error" onClick={() => handleDelete(index)}>
                    <CloseIcon />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
          </div>
        ))}

        <div className="card new-card">
          <div className="card-content edit">
            <div className="card-description-container">
              <AutoSizeTextArea
                value={text}
                onChange={handleChange}
                placeholder="Type here"
                minFontSize={8}
                maxFontSize={16}
                stepGranularity={2}
                style={{
                  width: '100%',
                  height: '100px',
                  textAlign: 'center',
                  border: 'none',
                  backgroundColor: 'transparent',
                }}
              />
            </div>
            <div className="buttons">
              <Tooltip title="Save">
                <IconButton color="success" onClick={handleSave}>
                  <CheckIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Cancel">
                <IconButton color="error" onClick={() => setText('')}>
                  <CloseIcon />
                </IconButton>
              </Tooltip>
              <span className="counter">{text.length}/{maxCharacters}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSection;


//Cambiare paragrafo e metterlo in textarea