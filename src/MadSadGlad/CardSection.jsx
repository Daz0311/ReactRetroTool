import React, { useState } from 'react';
import { IconButton, Tooltip, Button, Box } from '@mui/material';
import { Check as CheckIcon, Close as CloseIcon } from '@mui/icons-material';
import AutoSizeTextArea from './AutoSizeText';
import Card from './Card';

const CardSection = ({ onPublish, initialCards = [] }) => {
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
    <Box className="cards-section" 
   sx= {{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      overflowY: 'auto',
      maxHeight: '200px',
      marginTop: '2%',
      minHeight: '200px',
   }}>
      <Box className="cards-container"
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'


      }}>
        {cards.map((card, index) => (
          <Card
            key={index}
            text={card.text}
            isEditing={card.isEditing}
            onSave={(newText) => handleEditCard(index, newText)}
            onDelete={() => handleDeleteCard(index)}
          />
        ))}
        <Box className="card new-card"
        sx={{
          backgroundColor: '#fff599',
          borderRadius: '8px',
          color: 'black',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          maxHeight: '300px',
          overflow: 'hidden',
          padding: '3%',


        }}>
          <Box className="card-content"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            flex: 1,
            maxHeight: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',

          }}>
            <Box className="card-description-container"
            sx={{flex: 1,
              width: 'fit-content',
              height: 'fit-content',
              maxWidth: '150px',
              maxHeight: '125px',
              resize: 'none',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              border: '2px solid #f1910070',
              borderRadius: '4px',
              marginBottom: '5px',
              backgroundColor: '#ffe6478e',
              marginTop: '2%',

            }}>
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
            </Box>
            <Box className="buttons"
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
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
            </Box>
          </Box>
        </Box>
      </Box>
      <Button variant="contained" onClick={handlePublishAll} style={{ marginTop: '10px' }}>
        Publish All
      </Button>
    </Box>
  );
};

export default CardSection;

// va sistemato il controllo sui caratteri

// tasto modifica nel new card
//devo il tasto pubblica nel comtainer che ,mi permette di buttare la card nel container sopra