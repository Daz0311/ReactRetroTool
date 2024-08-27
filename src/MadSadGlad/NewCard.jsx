import React, { useState } from 'react';
import AutoSizeTextArea from './AutoSizeText';
import './CardSection.css'; // Assicurati di avere gli stili originali applicati

const NewCard = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleAddCard = () => {
    if (text.trim()) {
      onAdd(text);
      setText(''); // Pulisci il testo dopo l'aggiunta
    }
  };

  return (
    <div className="editable-card">
      <div className="card-content">
        <AutoSizeTextArea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="editable-paragraph-text"
          maxFontSize={30} // Funzionalità dinamica del font
          minFontSize={12}
          maxLines={4}
          placeholder="Add a new card..."
        />
        <div className="delete-button-container">
          <button onClick={handleAddCard}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default NewCard;
