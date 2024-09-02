import React, { useState, useLayoutEffect, useRef } from 'react';
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
    height: '100%',
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
    height: '100%',
  },
}));

function AutoSizeTextField({
  value,
  onChange,
  minFontSize = 10,
  maxFontSize = 40,
  stepGranularity = 2,
  ...props
}) {
  const [fontSize, setFontSize] = useState(maxFontSize);
  const textFieldRef = useRef(null);

  useLayoutEffect(() => {
    const adjustFontSize = () => {
      if (textFieldRef.current) {
        const textArea = textFieldRef.current.querySelector('textarea');

        if (textArea) {
          const containerHeight = textArea.clientHeight;
          const containerWidth = textArea.clientWidth;
          let currentFontSize = maxFontSize;

          // Imposta il fontSize iniziale
          textArea.style.fontSize = `${currentFontSize}px`;

          // Regola la dimensione del font fino a quando il testo rientra nel contenitore
          while (
            (textArea.scrollHeight > containerHeight || textArea.scrollWidth > containerWidth) &&
            currentFontSize > minFontSize
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
      variant="outlined"
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

export default AutoSizeTextField;
