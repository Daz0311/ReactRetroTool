import React, { useState } from 'react';
import { IconButton, Tooltip, Button } from '@mui/material';
import { Check as CheckIcon, Close as CloseIcon, Edit as EditIcon, Save as SaveIcon } from '@mui/icons-material';
import './CardSection.css';
import AutoSizeTextArea from './AutoSizeText';
import './AutoSizeText.css';

function CardSection({ onPublish }) {
  const [text, setText] = useState('');
  const [cards, setCards] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const maxCharacters = 140;

  const handleChange = (event) => {
    const newText = event.target.value;
    if (newText.length <= maxCharacters) {
      setText(newText);
    }
  };

  const handleCardChange = (event, index) => {
    const newText = event.target.value;
    const updatedCards = [...cards];
    updatedCards[index] = newText;
    setCards(updatedCards);
  };

  const handleSave = () => {
    if (text.trim()) {
      setCards([...cards, text]);
      setText('');
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleSaveEdit = () => {
    setEditIndex(null);
  };

  const handleDelete = (index) => {
    const newCards = cards.filter((_, i) => i !== index);
    setCards(newCards);
    if (editIndex === index) {
      setEditIndex(null);
    }
  };

  const handlePublishAll = () => {
    if (cards.length > 0) {
      onPublish(
        cards.map((cardText, index) => (
          <div key={index}>
            <div className="card-content">
              <div className="card-description-container">
                <AutoSizeTextArea
                  value={cardText}
                  readOnly={true}
                  minFontSize={8}
                  maxFontSize={16}
                  stepGranularity={2}
                  style={{
                    width: '100%',
                    textAlign: 'center',
                    border: 'none',
                    backgroundColor: 'transparent',
                  }}
                />
              </div>
            </div>
          </div>
        ))
      );
      setCards([]);  // Optionally clear cards after publishing
    }
  };

  return (
    <div className="cards-section">
      <div className="cards-container">
        {cards.map((cardText, index) => (
          <div className="card" key={index}>
            <div className="card-content edit">
              <div className="card-description-container">
                <AutoSizeTextArea
                  value={cardText}
                  onChange={(event) => handleCardChange(event, index)}// questo devo portarlo anche di là
                  readOnly={editIndex !== index}
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
                {editIndex === index ? (
                  <Tooltip title="Save">
                    <IconButton color="success" onClick={handleSaveEdit}>
                      <SaveIcon />
                    </IconButton>
                  </Tooltip>
                ) : (
                  <Tooltip title="Edit">
                    <IconButton color="default" onClick={() => handleEdit(index)}>
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                )}
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
              <Tooltip>
                <IconButton color="success" onClick={handleSave}>
                  <CheckIcon />
                </IconButton>
              </Tooltip>
              <Tooltip>
                <IconButton color="error" onClick={() => setText('')}>
                  <CloseIcon />
                </IconButton>
              </Tooltip>
              <span className="counter">{text.length}/{maxCharacters}</span>
            </div>
          </div>
        </div>
      </div>
      <Button variant="contained" onClick={handlePublishAll} style={{ marginTop: '10px' }}>
        Publish All
      </Button>
    </div>
  );
}

export default CardSection;


// tasto modifica nel new card
//devo il tasto pubblica nel comtainer che ,mi permette di buttare la card nel container sopra