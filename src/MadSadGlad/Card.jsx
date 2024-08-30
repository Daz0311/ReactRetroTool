import React, { useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';
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
  style = {} 
}) => {
  const [localText, setLocalText] = useState(text);
  const [editable, setEditable] = useState(isEditing);

  const handleEdit = () => {
    setEditable(true);
    if (onEdit) {
      onEdit();
    }
  };

  const handleSave = () => {
    if (onSave) {
      onSave(localText);
    }
    setEditable(false);
  };

  const handleCancel = () => {
    setLocalText(text); // Reimposta il testo originale
    setEditable(false);
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <div className="card" style={style}>
      <div className="card-content">
        <div className="card-description-container">
          <AutoSizeTextArea
            value={localText}
            onChange={(e) => {
              setLocalText(e.target.value);
              if (onChange) onChange(e);
            }}
            readOnly={!editable}
            minFontSize={8}
            maxFontSize={16}
            stepGranularity={2}
            style={{
              width: '100%',
              height: '100px',
              textAlign: 'center',
              border:  'none',
              backgroundColor: 'transparent' ,
            }}
          />
        </div>
        <div className="buttons">
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
        </div>
      </div>
    </div>
  );
};

export default Card;
