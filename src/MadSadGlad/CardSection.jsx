import React, { useState, useEffect, useRef } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Check as CheckIcon, Close as CloseIcon, ColorLens as ColorLensIcon, EmojiEmotions as EmojiEmotionsIcon, AddPhotoAlternate as AddPhotoAlternateIcon } from '@mui/icons-material';
import './CardSection.css';
import AutoSizeTextArea from './AutoSizeText';
// codice modificare la dimensione del font in automatico


function CardSection() {
  const [text, setText] = useState('');
  const maxCharacters = 140;

  const handleChange = (event) => {
    const newText = event.target.value;
    if (newText.length <= maxCharacters) {
      setText(newText);
    }
  };

  return (
    <div className="cards-section">
      <div className="new-cards-notification"></div>
      <div className="card new-card">
        <div className="card-content edit">
          <div className="card-description-container">
            <AutoSizeTextArea
              value={text}
              onChange={handleChange}
              placeholder="Type here"
              minFontSize={8}
              maxFontSize={16}//modifica grandezza
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
              <IconButton color="success">
                <CheckIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Cancel">
              <IconButton color="error">
                <CloseIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Select Color">
              <IconButton color="default">
                <ColorLensIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Add Emoji">
              <IconButton color="default">
                <EmojiEmotionsIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Add Image">
              <IconButton color="default">
                <AddPhotoAlternateIcon />
              </IconButton>
            </Tooltip>
            <span className="counter">{text.length}/{maxCharacters}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSection;
