import React, { useState } from 'react';
import { IconButton, Tooltip, Button } from '@mui/material';
import { Check as CheckIcon, Close as CloseIcon } from '@mui/icons-material';
import AutoSizeTextArea from './AutoSizeText';
import Card from './Card';
import './CardSection.css';

const CardSection = ({ onPublish, column, initialCards = [] }) => {
  const [cards, setCards] = useState(initialCards);
  const [newCardText, setNewCardText] = useState('');
  const maxCharacters = 140;

  const handleNewCardChange = (event) => {
    const newText = event.target.value;
    if (newText.length <= maxCharacters) {
      setNewCardText(newText);
    }
  };

  const handleSaveNewCard = () => {
    if (newCardText.trim()) {
      const newCard = { text: newCardText, isEditing: false };
      setCards([...cards, newCard]);
      setNewCardText('');
    }
  };

  const handleEditCard = (index, newText) => {
    const updatedCards = [...cards];
    updatedCards[index].text = newText;
    updatedCards[index].isEditing = false;
    setCards(updatedCards);
  };

  const handleDeleteCard = (index) => {
    const updatedCards = cards.filter((_, i) => i !== index);
    setCards(updatedCards);
  };

  const handlePublishAll = () => {
    if (cards.length > 0) {
      onPublish(cards);
      setCards([]);  // Puoi scegliere se svuotare le card dopo la pubblicazione
    }
  };

  return (
    <div className="cards-section">
      <div className="cards-container">
        {cards.map((card, index) => (
          <Card
            key={index}
            text={card.text}
            isEditing={card.isEditing}
            onSave={(newText) => handleEditCard(index, newText)}
            onDelete={() => handleDeleteCard(index)}
          />
        ))}
        <div className="card new-card">
          <div className="card-content">
            <div className="card-description-container">
              <AutoSizeTextArea
                value={newCardText}
                onChange={handleNewCardChange}
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
                <IconButton color="success" onClick={handleSaveNewCard}>
                  <CheckIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Cancel">
                <IconButton color="error" onClick={() => setNewCardText('')}>
                  <CloseIcon />
                </IconButton>
              </Tooltip>
              <span className="counter">{newCardText.length}/{maxCharacters}</span>
            </div>
          </div>
        </div>
      </div>
      <Button variant="contained" onClick={handlePublishAll} style={{ marginTop: '10px' }}>
        Publish All
      </Button>
    </div>
  );
};

export default CardSection;

// tasto modifica nel new card
//devo il tasto pubblica nel comtainer che ,mi permette di buttare la card nel container sopra