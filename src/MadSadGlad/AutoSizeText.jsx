import React, { useState, useEffect, useRef } from 'react';
import './AutoSizeText.css';

 function AutoSizeTextArea({ value, onChange, minFontSize = 10, maxFontSize = 40, stepGranularity = 2, maxLines = 4, ...props }) {
    const [fontSize, setFontSize] = useState(maxFontSize);
    const textAreaRef = useRef(null);
  
    useEffect(() => {
      const textArea = textAreaRef.current;
  
      if (textArea) {
        const adjustFontSize = () => {
          let currentFontSize = maxFontSize;
  
          textArea.style.fontSize = `${currentFontSize}px`;
         
  
          while (
            currentFontSize > minFontSize &&
            (textArea.scrollHeight > textArea.clientHeight || textArea.scrollWidth > textArea.clientWidth)
          ) {
            currentFontSize -= stepGranularity;
            textArea.style.fontSize = `${currentFontSize}px`;
        
          }
  
          setFontSize(currentFontSize);
        };
  
        adjustFontSize();
      }
    }, [value, minFontSize, maxFontSize, stepGranularity]);
  
    return (
      <textarea className='txt-Area'
        {...props}
        ref={textAreaRef}
        value={value}
        onChange={onChange}
        style={{
          fontSize: `${fontSize}px`,
          overflow: 'hidden',
          resize: 'none',
          ...props.style,
        }}
      />
    );
  }
  export default AutoSizeTextArea;
  