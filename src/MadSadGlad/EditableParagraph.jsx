import React from 'react';
import { Box } from '@mui/material';

const EditableParagraph = ({ text, onTextChange }) => (
  <Box
    sx={{
      // General container styles
      height: '100%',
      overflowY: 'auto', // Permette lo scorrimento verticale se necessario
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f8f8f8',
      borderRadius: '5px',
      transition: 'background-color 0.3s ease',
      overflowWrap: 'break-word', // Gestisce il testo lungo
      wordBreak: 'break-word', // Gestisce ulteriormente il testo lungo
      whiteSpace: 'pre-wrap', // Permette l'andare a capo automatico e preserva gli spazi
      width: '100%',
      maxHeight: '300px', // Altezza massima
      textAlign: 'center', // Centra il testo orizzontalmente
      padding: '10px', // Padding interno
      boxSizing: 'border-box', // Include il padding nella larghezza totale
      fontSize: '25px',
      alignContent: 'center',
      '&:focus': {
        outline: 'none',
        backgroundColor: 'lightgreen'
      }
    }}
    contentEditable
    suppressContentEditableWarning={true}
    spellCheck={false}
    onBlur={(e) => onTextChange(e.target.innerText)}
  >
    {text}
  </Box>
);

export default EditableParagraph;
