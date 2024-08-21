import React, { useState } from 'react';
import { Button, IconButton, TextField, Tooltip } from '@mui/material';
import { Check as CheckIcon, Close as CloseIcon, ColorLens as ColorLensIcon, EmojiEmotions as EmojiEmotionsIcon, AddPhotoAlternate as AddPhotoAlternateIcon } from '@mui/icons-material';
import './CardSection.css'; // Importa i file CSS per la stilizzazione
import { Textfit } from 'react-textfit';

function CardSection() {
  // Stato per memorizzare il testo dell'input
  const [text, setText] = useState('');
  // Limite massimo di caratteri per il testo
  const maxCharacters = 140;

  // Funzione per gestire il cambiamento del testo
  const handleChange = (event) => {
    // Ottieni il nuovo testo dal campo di input
    const newText = event.target.value;
    // Aggiorna lo stato solo se il nuovo testo non supera il limite massimo
    if (newText.length <= maxCharacters) {
      setText(newText);
    }

  };

  return (
    <div className="cards-section">
      {/* Contenitore per eventuali notifiche relative a nuove carte */}
      <div className="new-cards-notification">
      </div>
      <div className="card new-card">
        <div className="card-content edit">
          {/* Contenitore per il campo di testo */}
          <div className="card-description-container">
          <Textfit mode="single">

            {text}
              {/* // Permette più righe di testo
              minRows={4} // Numero minimo di righe visibili
              placeholder="Type here... Press Enter to save." // Testo segnaposto
              variant="outlined" // Stile del campo di testo
              fullWidth // Occupa tutta la larghezza disponibile
              className="text-field" // Classe CSS per la stilizzazione
              value={text} // Valore del campo di testo basato sullo stato
              onChange={handleChange} // Gestore per l'aggiornamento del testo */}
              </Textfit>
          </div>
          {/* Contenitore per i pulsanti di azione */}
          <div className="buttons">
            {/* Pulsante per salvare */}
            <Tooltip title="Save">
              <IconButton color="success">
                <CheckIcon />
              </IconButton>
            </Tooltip>
            {/* Pulsante per annullare */}
            <Tooltip title="Cancel">
              <IconButton color="error">
                <CloseIcon />
              </IconButton>
            </Tooltip>
            {/* Pulsante per selezionare il colore */}
            <Tooltip title="Select Color">
              <IconButton color="default">
                <ColorLensIcon />
              </IconButton>
            </Tooltip>
            {/* Pulsante per aggiungere emoji */}
            <Tooltip title="Add Emoji">
              <IconButton color="default">
                <EmojiEmotionsIcon />
              </IconButton>
            </Tooltip>
            {/* Pulsante per aggiungere immagine */}
            <Tooltip title="Add Image">
              <IconButton color="default">
                <AddPhotoAlternateIcon />
              </IconButton>
            </Tooltip>
            {/* Contatore dei caratteri */}
            <span className="counter">{text.length}/{maxCharacters}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSection;
