import React, { useState, useEffect } from 'react';
import { IconButton, Tooltip, Box, Typography } from '@mui/material';
import { Check as CheckIcon, Close as CloseIcon, Edit as EditIcon } from '@mui/icons-material';
import AutoSizeTextArea from './AutoSizeText';

const Card = ({ 
  text, 
  onChange, 
  onSave, 
  onCancel, 
  onEdit, 
  onDelete, 
  isEditing = false, 
  style = {},
  isPublishedSection = false
}) => {
  const [localText, setLocalText] = useState(text);
  const [editable, setEditable] = useState(isEditing);
  const [isTextValid, setIsTextValid] = useState(true);
  const maxCharacters = 140;

  useEffect(() => {
    setLocalText(text);
  }, [text]);

  useEffect(() => {
    setIsTextValid(localText.length <= maxCharacters);
  }, [localText]);

  const handleEdit = () => {
    setEditable(true);
    if (onEdit) onEdit();
  };

  const handleSave = () => {
    if (isTextValid && onSave) {
      onSave(localText);
    }
    setEditable(false);
  };

  const handleCancel = () => {
    setLocalText(text);
    setEditable(false);
    if (onCancel) onCancel();
  };

  return (
    <Box
      sx={{
        backgroundColor: isPublishedSection ? 'beige' : '#fff599',
        borderRadius: '8px',
        color: 'black',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        maxHeight: '100%',
        overflow: 'hidden',
        padding: isPublishedSection ? '5%' : '3%',
        ...style,
      }}
      className={isPublishedSection ? 'card-published' : 'card'}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          flex: 1,
          maxHeight: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
        className={isPublishedSection ? 'card-published-content' : 'card-content'}
      >
        <Box
          sx={{
            flex: 1,
            width: 'fit-content',
            height: 'fit-content',
            maxWidth: '150px',
            maxHeight: '125px',
          
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            border: '2px solid #f1910070',
            borderRadius: '4px',
            marginBottom: '5px',
            backgroundColor: '#ffe6478e',
            marginTop: '2%',
            padding: '16px',
          }}
          className="card-description-container"
        >
          <AutoSizeTextArea
            value={localText}
            onChange={(e) => {
              const newText = e.target.value;
              if (newText.length <= maxCharacters) {
                setLocalText(newText);
                if (onChange) onChange(e);
              }
            }}
            readOnly={!editable}
            minFontSize={12}
            maxFontSize={20}
            stepGranularity={2}
            style={{
              width: '150px',
              height: '100px',
              textAlign: 'center',
              border: 'none',
              backgroundColor: 'transparent',
            }}
          />
          {editable && (
            <Typography variant="body2" sx={{ textAlign: 'center', fontSize: '14px', color: '#666' }}>
              {localText.length}/{maxCharacters}
            </Typography>
          )}
          {!isTextValid && editable && (
            <Typography variant="body2" color="error" sx={{ textAlign: 'center' }}>
              Text exceeds the maximum length of {maxCharacters} characters.
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '8px',
            padding: '8px',
          }}
          className="buttons"
        >
          {editable ? (
            <>
              <Tooltip title="Save">
                <IconButton color="success" onClick={handleSave}>
                  <CheckIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Cancel">
                <IconButton color="error" onClick={handleCancel}>
                  <CloseIcon />
                </IconButton>
              </Tooltip>
            </>
          ) : (
            <>
              <Tooltip title="Edit">
                <IconButton color="primary" onClick={handleEdit}>
                  <EditIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton color="error" onClick={onDelete}>
                  <CloseIcon />
                </IconButton>
              </Tooltip>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
//anceh se non clicco il pulsante viene reso editabile e devo cambiarlo


// cancella l'ultimo e invece deve richiamre se stesso per cancellare