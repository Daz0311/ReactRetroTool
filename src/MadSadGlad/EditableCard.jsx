import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Close as CloseIcon, Save as SaveIcon } from '@mui/icons-material';

const EditableCard = ({ text, onChange, onSave, onCancel }) => (
  <div>
    <textarea
      value={text}
      onChange={onChange}
      style={{ width: '100%', height: '100px', border: '1px solid #ddd', borderRadius: '4px' }}
    />
    <div>
      <Tooltip title="Save">
        <IconButton color="success" onClick={onSave}>
          <SaveIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Cancel">
        <IconButton color="error" onClick={onCancel}>
          <CloseIcon />
        </IconButton>
      </Tooltip>
    </div>
  </div>
);

export default EditableCard;
