import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import CardSection from './CardSection';
import Card from './Card';
import EditableParagraph from './EditableParagraph';

const Column = ({
  title,
  cards,
  editIndex,
  editingText,
  onPublish,
  onEdit,
  onDelete,
  onTextChange,
  onSaveEdit,
  onCancelEdit,
  columnName,
}) => {
  const [isPublished, setIsPublished] = useState(false);

  useEffect(() => {
    // Aggiorna lo stato di pubblicazione quando cambia l'elenco delle card
    if (cards.length === 0) {
      setIsPublished(false); // Mostra il paragrafo modificabile se non ci sono card
    }
  }, [cards]);

  const handlePublish = (newCards) => {
    onPublish(newCards, columnName);
    setIsPublished(true); // Nasconde l'EditableParagraph e mostra la sezione delle card pubblicate
  };

  return (
    <Box
      className={`column ${columnName}`}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        padding: 2,
        borderRadius: 1,
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        maxHeight: '550px',
        overflowY: 'auto',
        height: '550px',
        minWidth: '390px'
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px',
          margin: '-15px -15px 20px -15px',
          borderRadius: '10px 10px 0 0',
          textAlign: 'center',
          fontSize: '20px',
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          height: '100%',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {!isPublished ? (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 1,
              transition: 'background-color 0.3s ease',
              overflowWrap: 'break-word',
              whiteSpace: 'pre-wrap',
              width: '100%',
              height: '90%',
              overflowY: 'auto',
              backgroundColor: '#f8f8f8',
              boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              boxSizing: 'border-box',
              fontSize: '25px',
              alignContent: 'center',
            }}
          >
            <EditableParagraph
              text={`What has driven you ${title.toLowerCase()}? You might focus on issues, time wasters, unpleasant surprises, etc.`}
              onTextChange={onTextChange}
            />
          </Box>
        ) : (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            {cards.map((card, index) => (
              <Card
                key={index}
                text={editIndex?.index === index && editIndex?.column === columnName ? editingText : card.text}
                isEditing={editIndex?.index === index && editIndex?.column === columnName}
                onChange={(e) => onTextChange(e.target.value)}
                onSave={onSaveEdit}
                onCancel={onCancelEdit}
                onEdit={() => onEdit(index, columnName)}
                onDelete={() => onDelete(index, columnName)}
                isPublishedSection={isPublished} // Imposta a true se le card sono pubblicate
              />
            ))}
          </Box>
        )}
      </Box>
      <CardSection onPublish={handlePublish} column={columnName} />
    </Box>
  );
};

export default Column;
