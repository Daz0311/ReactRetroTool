import React, { useState, useEffect, useRef } from 'react';

function AutoSizeTextArea({
  value,
  onChange,
  onKeyDown, // Aggiungi questa proprietà
  minFontSize = 14,
  maxFontSize = 20,
  stepGranularity = 1,
  maxWidth = 400,
  maxHeight = 100,
  ...props
}) {
  const [fontSize, setFontSize] = useState(maxFontSize);
  const textAreaRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const adjustFontSize = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const textArea = textAreaRef.current;

      if (textArea && ctx) {
        let currentFontSize = maxFontSize;
        let textFits = false;

        while (currentFontSize >= minFontSize && !textFits) {
          ctx.font = `${currentFontSize}px Arial`;
          const textWidth = ctx.measureText(value).width;
          const textHeight = currentFontSize; // Altezza stimata come dimensione del font

          // Verifica se il testo rientra nell'area disponibile
          if (textWidth <= maxWidth && textHeight <= maxHeight) {
            textFits = true;
          } else {
            currentFontSize -= stepGranularity;
          }
        }

        // Imposta la dimensione del font ottimale
        setFontSize(currentFontSize);
      }
    };

    adjustFontSize();
  }, [value, minFontSize, maxFontSize, stepGranularity, maxWidth, maxHeight]);

  return (
    <>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <textarea
        {...props}
        ref={textAreaRef}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}  // Aggiungi il gestore dell'evento onKeyDown
        style={{
          fontSize: `${fontSize}px`,
          overflow: 'hidden',
          resize: 'none',
          outline: 'none',
          width: `${maxWidth}px`,
          height: `${maxHeight}px`,
          textAlign: 'center',
          ...props.style,
        }}
      />
    </>
  );
}

export default AutoSizeTextArea;

