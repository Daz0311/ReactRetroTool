import React, { useState, useEffect, useRef } from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

// Creiamo uno styled component per il TextField
const StyledTextField = styled(TextField)(({ theme, fontSize }) => ({
  '& .MuiInputBase-root': {
    fontSize: fontSize,
    overflow: 'hidden',
    resize: 'none',
    padding: 0,
    textAlign: 'center',
  },
  '& .MuiOutlinedInput-root': {
    border: 'none', // Rimuove il bordo
    '& fieldset': {
      border: 'none', // Rimuove il bordo del fieldset
    },
    '&:hover fieldset': {
      border: 'none', // Rimuove il bordo del fieldset anche quando il campo è hover
    },
    '&.Mui-focused fieldset': {
      border: 'none', // Rimuove il bordo del fieldset quando il campo è in focus
    },
  },
  '& .MuiInputBase-input': {
    overflow: 'hidden',
    textAlign: 'center',
    height:'100%'
  },
}));

function AutoSizeTextArea({
  value,
  onChange,
  minFontSize = 10,
  maxFontSize = 40,
  stepGranularity = 2,
  ...props
}) {
  const [fontSize, setFontSize] = useState(maxFontSize);
  const textFieldRef = useRef(null);

  useEffect(() => {
    const adjustFontSize = () => {
      if (textFieldRef.current) {
        const textArea = textFieldRef.current.querySelector('textarea');
        let currentFontSize = maxFontSize;

        if (textArea) {
          textArea.style.fontSize = `${currentFontSize}px`;

          while (
            currentFontSize > minFontSize &&
            (textArea.scrollHeight > textArea.clientHeight || textArea.scrollWidth > textArea.clientWidth)
          ) {
            currentFontSize -= stepGranularity;
            textArea.style.fontSize = `${currentFontSize}px`;
          }

          setFontSize(currentFontSize);
        }
      }
    };

    adjustFontSize();
  }, [value, minFontSize, maxFontSize, stepGranularity]);

  return (
    <StyledTextField
      {...props}
      inputRef={textFieldRef}
      multiline
      value={value}
      onChange={onChange}
      variant="outlined" // O qualsiasi variante desiderata
      fontSize={`${fontSize}px`}
      sx={{
        width: '100%',
        height: '100px',
        '& .MuiOutlinedInput-root': {
          border: 'none', // Rimuove il bordo
        },
        ...props.sx, // Permette la personalizzazione tramite sx
      }}
    />
  );
}

export default AutoSizeTextArea;
