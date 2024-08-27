import React, { useState } from 'react';
import { IconButton, Tooltip, Button } from '@mui/material';
import { Check as CheckIcon, Close as CloseIcon, Edit as EditIcon } from '@mui/icons-material';
import AutoSizeTextArea from './AutoSizeText';
import './CardSection.css';

const CardSection = ({ onPublish, column, initialCards = [] }) => {
  const [cards, setCards] = useState(initialCards);
  const [newCardText, setNewCardText] = useState('');
  const [cardStyle, setCardStyle] = useState({});
  const maxCharacters = 140;

  const handleNewCardChange = (event) => {
    const newText = event.target.value;
    if (newText.length <= maxCharacters) {
      setNewCardText(newText);
    }
  };

  const handleCardChange = (event, index) => {
    const newText = event.target.value;
    const updatedCards = [...cards];
    updatedCards[index] = { ...updatedCards[index], text: newText };
    setCards(updatedCards);
  };

  const handleSaveNewCard = () => {
    if (newCardText.trim()) {
      const newCard = { text: newCardText, style: cardStyle, isEditing: false };
      setCards([...cards, newCard]);
      setNewCardText('');
      setCardStyle({});
    }
  };

  const handleSaveEdit = (index) => {
    const updatedCards = [...cards];
    updatedCards[index] = { ...updatedCards[index], text: updatedCards[index].text, isEditing: false };
    setCards(updatedCards);
  };

  const handleEdit = (index) => {
    const updatedCards = [...cards];
    updatedCards[index] = { ...updatedCards[index], isEditing: true };
    setCards(updatedCards);
  };

  const handleCancelEdit = (index) => {
    const updatedCards = [...cards];
    updatedCards[index] = { ...updatedCards[index], isEditing: false };
    setCards(updatedCards);
  };

  const handleDelete = (index) => {
    const updatedCards = cards.filter((_, i) => i !== index);
    setCards(updatedCards);
  };

  const handlePublishAll = () => {
    if (cards.length > 0) {
      onPublish(cards, column);
      setCards([]);
     
    }
  };

  return (
    <div className="cards-section">
      <div className="cards-container">
        {cards.map((card, index) => (
          <div className="card" key={index} style={card.style}>
            <div className="card-content">
              <div className="card-description-container">
                <AutoSizeTextArea
                  value={card.text}
                  onChange={(event) => handleCardChange(event, index)}
                  readOnly={!card.isEditing}
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
                {card.isEditing ? (
                  <>
                    <Tooltip title="Save">
                      <IconButton color="success" onClick={() => handleSaveEdit(index)}>
                        <CheckIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Cancel">
                      <IconButton color="error" onClick={() => handleCancelEdit(index)}>
                        <CloseIcon />
                      </IconButton>
                    </Tooltip>
                  </>
                ) : (
                  <>
                    <Tooltip title="Edit">
                      <IconButton color="primary" onClick={() => handleEdit(index)}>
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton color="error" onClick={() => handleDelete(index)}>
                        <CloseIcon />
                      </IconButton>
                    </Tooltip>
                  </>
                )}
              </div>
            </div>
          </div>
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