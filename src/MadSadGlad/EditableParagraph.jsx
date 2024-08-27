import React from 'react';

const EditableParagraph = ({ text, onTextChange }) => (
  <p
    contentEditable
    suppressContentEditableWarning={true}
    spellCheck={false}
    className="editable-paragraph-text"
    onBlur={(e) => onTextChange(e.target.innerText)}
  >
    {text}
  </p>
);

export default EditableParagraph;
//modificare in modo che l'iditable phargraph scompaia e che compaia un altra swzione che prende il suo posto dove all'interno vanno inserite dutte le card pubblicate e il testo poi deve scomparire
//problema