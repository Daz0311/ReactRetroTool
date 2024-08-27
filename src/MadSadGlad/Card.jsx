import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Close as CloseIcon, Edit as EditIcon } from '@mui/icons-material';

const Card = ({ card, index, onEdit, onDelete }) => (
  <div className="card" style={card.style}>  {/* Lo stile viene applicato direttamente */}
    <div>{card.text}  {/* Mostra il testo della card */}
    
    </div>
    <div className="card-buttons">

      <Tooltip title="Edit">
        <IconButton color="default" onClick={() => onEdit(index)}>
          <EditIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete">
        <IconButton color="error" onClick={() => onDelete(index)}>
          <CloseIcon />
        </IconButton>
      </Tooltip>
    </div>
  </div>
);

export default Card;
